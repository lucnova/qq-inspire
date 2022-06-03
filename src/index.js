import {
	ChakraProvider, ColorModeScript
} from '@chakra-ui/react';
import React from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App';

import { extendTheme } from '@chakra-ui/react';

import "@fontsource/charis-sil";

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

const theme = extendTheme({
	fonts: {
		body: `'Charis SIL', sans-serif`,
	},
});

root.render(
	<>
		<ChakraProvider theme={theme}>
			<ColorModeScript />
			<App />
		</ChakraProvider>
	</>
);
