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
} from './styles';
import { faComments } from '@fortawesome/free-regular-svg-icons';
import {
	faChevronRight,
	faHouseChimney,
	faChevronLeft,
} from '@fortawesome/free-solid-svg-icons';

export default function NavigationBar() {
	const { close, handleClose } = useNavigationBar();

	return (
		<Container close={close}>
			<Header>
				<Logo>
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
					<MenuLinks close={close}>
						<Upside>
							<li>
								<a href="#">
									<IconMenu>
										<FontAwesomeIcon icon={faHouseChimney} />
									</IconMenu>
									{!close && <span>Home</span>}
								</a>
							</li>
							<li>
								<a href="#">
									<IconMenu>
										<FontAwesomeIcon icon={faHouseChimney} />
									</IconMenu>
									{!close && <span>Home</span>}
								</a>
							</li>
							<li>
								<a href="#">
									<IconMenu>
										<FontAwesomeIcon icon={faHouseChimney} />
									</IconMenu>
									{!close && <span>Home</span>}
								</a>
							</li>
						</Upside>
						<Bottom>
							<li>
								<a href="#">
									<IconMenu>
										<FontAwesomeIcon icon={faHouseChimney} />
									</IconMenu>
									{!close && <span>Logout</span>}
								</a>
							</li>
						</Bottom>
					</MenuLinks>
				</Menu>
			</MenuBar>
		</Container>
	);
}
