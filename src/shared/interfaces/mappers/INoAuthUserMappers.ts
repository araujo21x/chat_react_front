export interface ICreateUserRequest {
	file?: File;
	name: string;
	email: string;
	password: string;
}

export interface ICreateUserResponse {
	message: string;
}

export interface IForgotPasswordRequest {
	email: string;
}

export interface IForgotPasswordResponse {
	message: string;
}
