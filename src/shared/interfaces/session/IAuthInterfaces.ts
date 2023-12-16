export interface ILoginBody {
	email: string;
	password: string;
}

export interface IAuth {
	token: string;
	user: IUserAuth;
}

export interface IUserAuth {
	id: number;
	image?: string;
	name: string;
	email: string;
	status: string;
	type: string;
	createdAt: string;
	updatedAt: string;
}
