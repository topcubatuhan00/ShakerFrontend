import { TokenModel } from "./token.model";

export class LoginResponseModel {
    token: TokenModel = new TokenModel();
    email: string = "";
    userId: string = "";
    name: string = "";
    surName: string = "";
}