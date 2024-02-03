import { ReactNode, createContext, useContext, useState } from 'react';
import { IRoom } from '../shared/interfaces/generic/IRoom';

export interface IGetSelectRoom {
	storage: IRoom | null;
	room: IRoom | null;
}
export interface IRoomContext {
	handlerSelectRoom: (room: IRoom | null) => void;
	selectedRoom: IRoom | null;
	getSelectRoom: () => IGetSelectRoom;
}

interface IRoomContextProps {
	children: ReactNode;
}

export const RoomContext = createContext<IRoomContext>({} as IRoomContext);

export function RoomProvider({ children }: IRoomContextProps) {
	const [selectedRoom, setSelectedRoom] = useState<IRoom | null>(() => {
		const room: string | null = localStorage.getItem('selectedRoom');

		if (!room) return null;

		return JSON.parse(room) as IRoom;
	});

	function handlerSelectRoom(room: IRoom | null): void {
		if (room) localStorage.setItem('selectedRoom', JSON.stringify(room));

		setSelectedRoom(room);
	}

	function getSelectRoom(): IGetSelectRoom {
		const storage: string | null = localStorage.getItem('selectedRoom');

		return {
			storage: storage ? (JSON.parse(storage) as IRoom) : null,
			room: selectedRoom,
		};
	}

	return (
		<RoomContext.Provider
			value={{ selectedRoom, handlerSelectRoom, getSelectRoom }}
		>
			{children}
		</RoomContext.Provider>
	);
}

export function useRoom(): IRoomContext {
	const context = useContext(RoomContext);

	if (!context) throw new Error('useRoom must be used within an RoomProvider');

	return context;
}
