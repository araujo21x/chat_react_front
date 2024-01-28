import { useEffect } from 'react';
import io, { Socket } from 'socket.io-client';

export const socket: Socket = io('http://localhost:4000/v1/chat', {
	transportOptions: {
		polling: {
			extraHeaders: {
				Authorization: `Bearer ${localStorage.getItem('token') as string}`,
			},
		},
	},
});

export type IUsePrivateRoute = {};

export function usePrivateRoute(): IUsePrivateRoute {
	useEffect(() => {
		socket.on('connect', () => {
			console.log('Connected to server');
		});

		socket.on('disconnect', () => {
			console.log('Disconnected from server');
		});
	}, []);
	return {};
}
