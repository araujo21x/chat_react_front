import EventManager from '../lib/EventManager';
import IToast from '../shared/interfaces/IToast';

export const toastEventManager = new EventManager<IToast>();

export function toast(payload: IToast) {
	toastEventManager.emit('addtoast', payload);
}
