/* eslint-disable react-hooks/rules-of-hooks */

import { toast } from '../../utils/toast';

export interface IDataErrorSocket {
	errors: string;
}

export default function errorEventSocket(err: IDataErrorSocket) {
	toast({ text: err.errors, type: 'danger' });
}
