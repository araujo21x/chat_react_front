export interface IAuthRequest {
	email: string;
	password: string;
}

export interface IAuthResponse {
	token: string;
	user: IUserResponse;
}

export interface IUserResponse {
	id: number;
	image?: string;
	name: string;
	email: string;
	status: string;
	type: string;
	createdAt: string;
	updatedAt: string;
}
