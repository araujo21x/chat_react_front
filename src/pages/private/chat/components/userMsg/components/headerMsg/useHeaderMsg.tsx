import TypeRoom from '../../../../../../../shared/interfaces/enum/TypeRoom';
import { IRoom } from '../../../../../../../shared/interfaces/generic/IRoom';
import DefaultImgUser from '../../../../../../../assets/images/user-icon.png';

export interface IDataRoom {
	id: number;
	name: string;
	img: string;
	type: TypeRoom;
}

export type IUseHeaderMsg = {
	getDataRoom: (room: IRoom) => IDataRoom;
};

export default function useHeaderMsg(): IUseHeaderMsg {
	function getDataRoom(room: IRoom): IDataRoom {
		const data = room.type === TypeRoom.PRIVATE ? room.addresseeUser : room;
		return {
			id: room.id,
			name: data?.name as string,
			img: data?.image ? data?.image : DefaultImgUser,
			type: room.type,
		};
	}

	return { getDataRoom };
}
