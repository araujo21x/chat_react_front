import { IRoom } from '../../../shared/interfaces/generic/IRoom';
import {
	IRoomCreate,
	IRoomIndex,
	IRoomIndexQuery,
	IRoomShow,
} from '../../../shared/interfaces/room/IRoomInterfaces';
import {
	IRoomCreateResponse,
	IRoomIndexRequest,
	IRoomIndexResponse,
	IRoomShowResponse,
} from '../../../shared/interfaces/room/mappers/IRoomMappers';

class RoomMapper {
	toPersistenceIndex(domain: IRoomIndexQuery): IRoomIndexRequest {
		const params: IRoomIndexRequest = {};

		if (domain.limit) params.limit = domain.limit;
		if (domain.type) params.type = domain.type;
		if (domain.paginate) params.paginate = domain.paginate;
		if (domain.limit) params.limit = domain.limit;
		if (domain.page) params.page = domain.page;

		return params;
	}

	toDomainIndex(persistent: IRoomIndexResponse): IRoomIndex {
		return {
			count: persistent.countRooms,
			rooms: persistent.rooms.map((room): IRoom => {
				return {
					id: room.id,
					type: room.type,
					name: room.name,
					description: room.description,
					image: room.image,
					imageKey: room.imageKey,
					myUser: room.myUser,
					addresseeUser: room.addresseeUser ? room.addresseeUser : undefined,
					messages: room.messages ? room.messages : [],
					createdAt: room.createdAt,
					updatedAt: room.updatedAt,
				};
			}),
		};
	}

	toDomainShow(persistent: IRoomShowResponse): IRoomShow {
		return {
			id: persistent.id,
			type: persistent.type,
			name: persistent.name,
			description: persistent.description,
			image: persistent.image,
			imageKey: persistent.imageKey,
			myUser: persistent.myUser,
			addresseeUser: persistent.addresseeUser
				? persistent.addresseeUser
				: undefined,
			messages: persistent.messages ? persistent.messages : [],
			createdAt: persistent.createdAt,
			updatedAt: persistent.updatedAt,
		};
	}

	toPersistenceCreate(id: number): { userId: number } {
		return { userId: id };
	}

	toDomainCreate(persistent: IRoomCreateResponse): IRoomCreate {
		return {
			message: persistent.message,
			room: persistent.room,
		};
	}
}

export default new RoomMapper();
