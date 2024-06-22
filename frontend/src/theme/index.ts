import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
    interface Palette {
        colors: {
            white: string;
            purple: string;
            darkGrey: string;
            darkBlue: string;
            lightBlue: string;
            greyWhite: string;
            lightGrey: string;
        }
    }
    interface PaletteOptions {
        colors?: {
            white?: string;
            purple?: string;
            darkGrey?: string;
            darkBlue?: string;
            lightBlue?: string;
            greyWhite?: string;
            lightGrey?: string;
        }
    }
}

export default createTheme({
    palette: {
        primary: {
            main: '#02203c',
            dark: '#001528',
            light: '#15314b',
        },
        colors: {
            white: '#f6f9fc',
            purple: '#626ee3',
            darkGrey: '#e4e4e4',
            darkBlue: '#0046c7',
            lightGrey: '#f2f2f2',
            lightBlue: '#1976d2',
            greyWhite: '#f6f9fc'
        }
    }
});