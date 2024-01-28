import SearchBar from '../../../components/private/searchBar/SearchBar';
import UserCard from './components/userCard';
import { Container, UserListContainer } from './styles';
import useContacts from './useContacts';

export default function Contacts() {
	const { filterUsers, users } = useContacts();

	return (
		<Container>
			<SearchBar handlerOnClick={filterUsers} />
			<UserListContainer>
				{users.map((user) => (
					<UserCard key={user.id} user={user} />
				))}
			</UserListContainer>
		</Container>
	);
}
