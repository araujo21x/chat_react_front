export default interface IToast {
	id?: number;
	type: 'default' | 'success' | 'danger';
	text: string;
	duration?: number;
}
