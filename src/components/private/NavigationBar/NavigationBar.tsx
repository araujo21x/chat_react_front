import useNavigationBar from './useNavigationBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	Container,
	Header,
	Logo,
	LogoImg,
	LogoText,
	MenuBar,
	MenuLinks,
	Menu,
	Toggle,
	IconMenu,
	Upside,
	Bottom,
	MenuItem,
	MenuText,
} from './styles';
import { faComments } from '@fortawesome/free-regular-svg-icons';
import {
	faChevronRight,
	faChevronLeft,
} from '@fortawesome/free-solid-svg-icons';

export default function NavigationBar() {
	const { containerMenu, close, handleClose, goToPage } = useNavigationBar();

	return (
		<Container close={close}>
			<Header>
				<Logo onClick={() => goToPage('chat')}>
					<LogoImg>
						<FontAwesomeIcon icon={faComments} size="xl" />
					</LogoImg>

					{!close && (
						<LogoText>
							<span>Chat</span>
						</LogoText>
					)}
				</Logo>

				<Toggle onClick={handleClose} close={close}>
					{close && <FontAwesomeIcon icon={faChevronRight} size="1x" />}
					{!close && <FontAwesomeIcon icon={faChevronLeft} size="1x" />}
				</Toggle>
			</Header>

			<MenuBar>
				<Menu>
					<MenuLinks>
						<Upside>
							{containerMenu.upside.map(function (item) {
								return (
									<MenuItem
										key={item.id}
										close={close}
										selected={item.isSelected}
										onClick={item.goTo}
									>
										<MenuText close={close} selected={item.isSelected}>
											<IconMenu>
												<FontAwesomeIcon icon={item.icon} />
											</IconMenu>
											{!close && <span>{item.name}</span>}
										</MenuText>
									</MenuItem>
								);
							})}
						</Upside>
						<Bottom>
							{containerMenu.bottom.map(function (item) {
								return (
									<MenuItem
										key={item.id}
										close={close}
										selected={item.isSelected}
										onClick={item.goTo}
									>
										<MenuText close={close} selected={item.isSelected}>
											<IconMenu>
												<FontAwesomeIcon icon={item.icon} />
											</IconMenu>
											{!close && <span>{item.name}</span>}
										</MenuText>
									</MenuItem>
								);
							})}
						</Bottom>
					</MenuLinks>
				</Menu>
			</MenuBar>
		</Container>
	);
}
