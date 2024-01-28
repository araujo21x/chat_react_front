import { IUser } from '../generic/IUser';

// index
export interface IUserIndexRequest {
	name?: string;
	paginate?: 'yes' | 'not';
	limit?: number;
	page?: number;
}

export interface IUserIndex {
	users: IUser[];
	count: number;
}

export interface IUserIndexResponse {
	countUsers: number;
	users: IUser[];
}
