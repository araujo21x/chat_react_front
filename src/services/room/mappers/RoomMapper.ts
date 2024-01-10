import { IRoom } from '../../../shared/interfaces/generic/IRoom';
import {
	IRoomIndex,
	IRoomIndexQuery,
} from '../../../shared/interfaces/room/IRoomInterfaces';
import {
	IRoomIndexRequest,
	IRoomIndexResponse,
} from '../../../shared/interfaces/room/mappers/IRoomMappers';

class RoomMapper {
	toPersistence(domain: IRoomIndexQuery): IRoomIndexRequest {
		const params: IRoomIndexRequest = {};

		if (domain.limit) params.limit = domain.limit;
		if (domain.type) params.type = domain.type;
		if (domain.paginate) params.paginate = domain.paginate;
		if (domain.limit) params.limit = domain.limit;
		if (domain.page) params.page = domain.page;

		return params;
	}

	toDomain(persistent: IRoomIndexResponse): IRoomIndex {
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
}

export default new RoomMapper();
