const { OAuth2Client } = require("google-auth-library");

const client = new OAuth2Client(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  "http://localhost:3001"
);

const getProfileInfo = async (token: any) => {
  const tokenInfo = await client.getTokenInfo(
    token
  ); 

  console.log(tokenInfo);
  console.log("tokenInfo--", );
  
  return tokenInfo
};
export { getProfileInfo };
