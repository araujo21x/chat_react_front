import TypeRoom from '../enum/TypeRoom';
import { IRoom } from '../generic/IRoom';

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
