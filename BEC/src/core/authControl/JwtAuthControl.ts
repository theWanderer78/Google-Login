import jwt from "jsonwebtoken";
import HttpError from "standard-http-error";
import AuthControlInterface from "./AuthControlInterface";
export default class JwtAuthControl implements AuthControlInterface {
  public sign(valueToEncode, secret, options: any = null) {
    try {
      const token = jwt.sign({ payload: valueToEncode }, secret, options);
      return token;
    } catch (error) {
      console.log("sign ----- error ", error)
      throw new HttpError(500, "InternalServerError");
    }
  }

  public decode(verifyToken, secret) {
    try {
      const decoded = jwt.verify(verifyToken, secret, { ignoreExpiration: true });
      return decoded.payload;
    } catch (error) {
      console.log("JwtAuthControl.decode error ==> ", error);
      throw new HttpError(401, "Unauthorized");
    }
  }

  public decodeRequestHeader(req, secret) {
    try {
      const token = req.headers.authorization;
      return this.decode(token, secret);
    } catch (error) {
      console.log("JwtAuthControl.decodeRequestHeader error ==> ", error);
      throw new HttpError(401, "Unauthorized");
    }
  }
  public decodeWithoutVerifying(token) {
    try {
      const decoded = jwt.decode(token);
      return decoded;
    } catch (error) {
      console.log("JwtAuthControl.decodeWithoutVerifying error ==> ", error);
      throw new HttpError(401, "Unauthorized");
    }
  }
}
