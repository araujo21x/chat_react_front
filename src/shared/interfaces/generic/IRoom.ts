import TypeRoom from '../enum/TypeRoom';
import { IMessage } from './IMessage';
import { IUser } from './IUser';

export interface IRoom {
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
