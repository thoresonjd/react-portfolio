import { createTheme, Theme } from '@mui/material/styles';
import { colors } from './colors';

export const theme: Theme = createTheme({
	palette: {
		mode: 'dark',
		primary: {
			main: colors.Lime
		}
	}
});
