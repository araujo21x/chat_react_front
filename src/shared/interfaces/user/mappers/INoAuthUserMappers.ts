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

export interface IResetPasswordRequest {
	code: string;
	password: string;
}

export interface IResetPasswordResponse {
	message: string;
}
