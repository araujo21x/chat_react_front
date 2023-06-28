type IKey = 'addtoast';
type IValue<T> = (payload: T) => void;

export default class EventManager<T> {
	private listeners: Map<IKey, IValue<T>[]>;

	constructor() {
		this.listeners = new Map<IKey, IValue<T>[]>();
	}

	public on(event: IKey, listener: IValue<T>): void {
		if (!this.listeners.has(event)) this.listeners.set(event, []);

		(this.listeners.get(event) as IValue<T>[]).push(listener);
	}

	public emit(event: IKey, payload: T): void {
		if (!this.listeners.has(event)) return;

		(this.listeners.get(event) as IValue<T>[]).forEach((listener) => {
			listener(payload);
		});
	}

	public removeListener(event: IKey, listenerToRemove: IValue<T>): void {
		const listeners = this.listeners.get(event);
		if (!listeners) return;

		const filteredListeners = listeners.filter(
			(listener) => listener !== listenerToRemove
		);

		this.listeners.set(event, filteredListeners);
	}
}
