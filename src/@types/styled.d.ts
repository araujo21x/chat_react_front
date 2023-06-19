import 'styled-components';
import IMyTheme from '../assets/styles/themes/IMyTheme';

declare module 'styled-components' {
	// eslint-disable-next-line @typescript-eslint/no-empty-interface
	export interface DefaultTheme extends IMyTheme {}
}
