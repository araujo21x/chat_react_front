import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container, Form, IconContainer, Input } from './styles';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import useSearchBar from './useSearchBar';

interface ISearchBar {
	handlerOnClick: (value: string) => void;
}

export default function SearchBar({ handlerOnClick }: ISearchBar) {
	const { valueSearch, handlerValueSearchChange } = useSearchBar();

	return (
		<Container>
			<Form>
				<Input
					type="text"
					value={valueSearch}
					onChange={handlerValueSearchChange}
					onKeyDown={(e) => {
						if (e.key === 'Enter') {
							e.preventDefault();
							handlerOnClick(valueSearch);
						}
					}}
				/>
			</Form>

			<IconContainer>
				<FontAwesomeIcon
					size="xl"
					icon={faMagnifyingGlass}
					onClick={() => handlerOnClick(valueSearch)}
				/>
			</IconContainer>
		</Container>
	);
}
