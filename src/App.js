import React, { useEffect, useState } from 'react';
import {
	Box,
	Text,
	Grid,
	GridItem,
	Flex,
	useColorModeValue,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';

import { getRandomQuestion } from './helpers/getRandomQuestion';
import { ButtonGetRandomQ } from './components/ButtonGetRandomQ';

const defaultClass = 'animate__animated animate__fadeIn';

function App() {
	const pageBg = useColorModeValue('gray.200', 'red.900');

	const [question, setQuestion] = useState(getRandomQuestion());
	const [animationClass, setAnimationClass] = useState(defaultClass);

	useEffect(() => {
		setAnimationClass(defaultClass);
		setQuestion(getRandomQuestion());
	}, [animationClass]);

	const handleGetRandomQuestion = (e) => {
		setAnimationClass('animate__animated');
	};

	return (
		<Box textAlign="center" bg={pageBg}>
			<Grid templateRows='repeat(3, 1fr)' gap={6} h='100vh'>
				<GridItem w='100%'>
					<Flex justifyContent='end'>
						<ColorModeSwitcher />
					</Flex>
				</GridItem>

				<GridItem w='100%' alignSelf='start'>
					<Text
						fontSize='3rem'
						px={9}
						className={animationClass}
					>
						{question}
					</Text>
				</GridItem>

				<GridItem w='100%' alignSelf='center'>
					<ButtonGetRandomQ handleGetRandomQuestion={handleGetRandomQuestion} />
				</GridItem>
			</Grid>
		</Box>
	);
}

export default App;
