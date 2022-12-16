import JwtAuthControl from "./JwtAuthControl";

export default class AuthControlFactory {
  public create() {
    let authControl = new JwtAuthControl();
    return authControl;
  }
}
