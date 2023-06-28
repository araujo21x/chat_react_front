import EventManager from '../lib/EventManager';
import IToast from './types/event/IToast';

export const toastEventManager = new EventManager<IToast>();

export function toast(payload: IToast) {
	toastEventManager.emit('addtoast', payload);
}
