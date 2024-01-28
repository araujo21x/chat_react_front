import { useEffect, useRef } from 'react';
import { IMessage } from '../../../../../../../shared/interfaces/generic/IMessage';

export default function useBodyMsg(messages: IMessage[]) {
	const containerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (containerRef.current) {
			containerRef.current.scrollTop = containerRef.current.scrollHeight;
		}
	}, [messages]);

	return { containerRef };
}
