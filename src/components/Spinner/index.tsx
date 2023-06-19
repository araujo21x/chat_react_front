import { StyledSpinner } from './styles';

interface ISpinnerProp {
	size?: number;
}

export default function Spinner({ size = 32 }: ISpinnerProp) {
	return <StyledSpinner size={size} />;
}
