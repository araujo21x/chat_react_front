import TypeRoom from '../enum/TypeRoom';
import { IMessage } from '../generic/IMessage';
import { IRoom } from '../generic/IRoom';

// index
export interface IRoomIndexQuery {
	name?: string;
	type?: TypeRoom;
	paginate?: 'yes' | 'not';
	limit?: number;
	page?: number;
}

export interface IRoomIndex {
	rooms: IRoom[];
	count: number;
}

export interface IRoomShow extends IRoom {
	messages: IMessage[];
}
