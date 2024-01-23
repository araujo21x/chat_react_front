import { ReactNode, createContext, useContext, useState } from 'react';
import { IRoom } from '../shared/interfaces/generic/IRoom';

export interface IRoomContext {
	handlerSelectRoom: (room: IRoom | null) => void;
	selectedRoom: IRoom | null;
}

interface IRoomContextProps {
	children: ReactNode;
}

export const RoomContext = createContext<IRoomContext>({} as IRoomContext);

export function RoomProvider({ children }: IRoomContextProps) {
	const [selectedRoom, setSelectedRoom] = useState<IRoom | null>(null);

	function handlerSelectRoom(room: IRoom | null): void {
		setSelectedRoom(room);
	}

	return (
		<RoomContext.Provider value={{ selectedRoom, handlerSelectRoom }}>
			{children}
		</RoomContext.Provider>
	);
}

export function useRoom(): IRoomContext {
	const context = useContext(RoomContext);

	if (!context) throw new Error('useRoom must be used within an RoomProvider');

	return context;
}
