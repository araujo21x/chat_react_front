import { IRoom } from './IRoom';
import { IUser } from './IUser';

export interface IMessage {
	id: number;
	content?: string;
	image?: string;
	imageKey?: string;
	sender: IUser;
	room: IRoom;
	createdAt: string;
	updatedAt: string;
}
