import { useState } from 'react';
import errorRequest from '../../../../../../../services/utils/errorRequest';

export default function useBodyMsg(handlerMessages: (value: string) => void) {
	const [msg, setMsg] = useState<string>('');

	function handlerMsgChange(event: React.ChangeEvent<HTMLInputElement>) {
		setMsg(event.target.value);
	}

	function handlerSubmit() {
		try {
			setMsg('');
			handlerMessages(msg);
		} catch (err) {
			errorRequest(err);
		}
	}

	return {
		msg,
		handlerMsgChange,
		handlerSubmit,
	};
}
