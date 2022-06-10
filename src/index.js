import "@fontsource/charis-sil";

import * as ReactDOM from 'react-dom/client';
import {
	ChakraProvider, ColorModeScript
} from '@chakra-ui/react';
import App from './App';

import { theme } from './theme';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
	<>
		<ChakraProvider theme={theme}>
			<ColorModeScript />
			<App />
		</ChakraProvider>
	</>
);
