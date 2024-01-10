import { IUser } from './IUser';

export interface IMessage {
	content?: string;
	image?: string;
	imageKey?: string;
	sender: IUser;
	createdAt: string;
	updatedAt: string;
}
