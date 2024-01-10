export interface IUser {
	id: number;
	image: string;
	imageKey: string;
	name: string;
	email: string;
	status: string;
	type: string;
	online?: boolean;
	createdAt: string;
	updatedAt: string;
}
