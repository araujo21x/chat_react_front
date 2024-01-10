import TypeRoom from '../../enum/TypeRoom';
import { IMessage } from '../../generic/IMessage';
import { IUser } from '../../generic/IUser';

export interface IRoomIndexRequest {
	name?: string;
	type?: TypeRoom;
	paginate?: 'yes' | 'not';
	limit?: number;
	page?: number;
}

export interface IRoomIndexResponse {
	rooms: IRoomShowResponse[];
	countRooms: number;
}

export interface IRoomShowResponse {
	id: number;
	type: TypeRoom;
	name?: string;
	description?: string;
	image?: string;
	imageKey?: string;
	myUser: IUser;
	addresseeUser?: IUser;
	messages?: IMessage[];
	createdAt: string;
	updatedAt: string;
}
