import { AxiosResponse } from 'axios';
import myAxiosInstance from '../../lib/axios';
import roomMapper from './mappers/RoomMapper';
import { IRoomIndexQuery } from '../../shared/interfaces/room/IRoomInterfaces';

class RoomService {
	public index(data: IRoomIndexQuery): Promise<AxiosResponse> {
		const params = roomMapper.toPersistenceIndex(data);
		return myAxiosInstance.get('/v1/user/room', { params });
	}

	public show(id: number): Promise<AxiosResponse> {
		return myAxiosInstance.get(`/v1/user/room/${id}`);
	}
}

export default new RoomService();
