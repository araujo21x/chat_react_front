import * as ReactDOM from 'react-dom';
import { Overlay } from './styles';
import Spinner from '../Spinner';

interface ILoaderProp {
	isLoading: boolean;
}

export default function Loader({ isLoading }: ILoaderProp) {
	if (!isLoading) return null;

	return ReactDOM.createPortal(
		<Overlay>
			<Spinner size={90} />
		</Overlay>,
		document.getElementById('loader-root') as HTMLElement
	);
}
