type IMyColors = {
	background: string;
	primary: {
		light: string;
		main: string;
		dark: string;
		maxDark: string;
	};
	danger: {
		light: string;
		main: string;
		dark: string;
	};
	text: {
		light: string;
		main: string;
		dark: string;
	};
};

type IMyTheme = {
	colors: IMyColors;
};

export default IMyTheme;
