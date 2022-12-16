import { getProfileInfo } from "../../core/auth/googleOAuth";
import invariant from "ts-invariant";
import { Knex } from "knex";
import Users from '../../core/knexSchema/User';
import AuthControlFactory from "../../core/authControl/AuthControlFactory";

const userLogin = async (req: any, res: any) => {
  try {
    console.log("--====-----------1", req.headers.authorization, "=====");
    const knex: Knex = req.app.get('db')
  
    invariant(req.headers.authorization, "Forbidden")
    const code: string = req.headers.authorization
    const token = code.split(" ")[1]
    invariant(token , "Bearer token not found")
    const profile = await getProfileInfo(token);
    console.log("-------profile", profile);
    
    // Check user in Application's DB
    const userObj: Users | undefined = await knex<Users>("Users").select("*").where({email:profile?.email }).first()
    console.log("----userObj", userObj);
    
    invariant(userObj, "User not found.")
    invariant(userObj.isActive, "User is inactive")

     const access_token = await signJWTToken(userObj)

    console.log("======= access_token", access_token);
    
    res.send({ ...userObj, access_token: access_token });

  } catch (e) {
    console.log(e);
    res.status(401).send("401 Unauthorised");
  }
};

async function signJWTToken(user: Users) {

  const authControlFactory = new AuthControlFactory();
  const authControl = authControlFactory.create();

  const loginToken = authControl.sign(
    user,
    process.env.jwtSecret,
    { expiresIn: "30d" }
  );
  return loginToken;
}
export default userLogin
