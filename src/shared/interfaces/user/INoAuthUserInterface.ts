export interface ICreateUserBody {
	image?: File;
	email: string;
	name: string;
	password: string;
}

export interface IResetPasswordBody {
	token: string;
	password: string;
}
