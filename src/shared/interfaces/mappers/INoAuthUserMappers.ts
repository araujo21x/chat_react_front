export interface ICreateUserRequest {
	file?: File;
	name: string;
	email: string;
	password: string;
}

export interface ICreateUserResponse {
	message: string;
}
