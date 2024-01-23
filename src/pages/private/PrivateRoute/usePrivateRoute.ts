import { useEffect } from 'react';
import io, { Socket } from 'socket.io-client';

export const socket: Socket = io('http://localhost:4000/v1/chat', {
	transportOptions: {
		polling: {
			extraHeaders: {
				Authorization:
					'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjE0LCJpYXQiOjE3MDU4NDQ3Njl9.9xxNCYJTFGWbNPmjEdVl5Vd8Gr2iA_EDkj-u3FSYnzI',
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
