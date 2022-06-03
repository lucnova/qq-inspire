import React, { useEffect, useState } from 'react';
import {
	Box,
	Text,
	Grid,
	Button,
	GridItem,
	Flex,
	IconButton,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { GiPerspectiveDiceSixFacesRandom } from 'react-icons/gi';
import { getRandomQuestion } from './helpers/getRandomQuestion';

import "@fontsource/charis-sil";

const defaultClass = 'animate__animated animate__fadeIn';

function App() {
	const [question, setQuestion] = useState(getRandomQuestion());
	const [animationClass, setAnimationClass] = useState(defaultClass);

	useEffect(() => {
		setAnimationClass(defaultClass);
		setQuestion(getRandomQuestion());
	}, [animationClass]);

	const handleGetRandomQuestion = (e) => {
		e.preventDefault();

		setAnimationClass('animate__animated');
	};

	return (
		<Box textAlign="center">
			<Grid templateRows='repeat(3, 1fr)' gap={6} h='100vh'>
				<GridItem w='100%'>
					<Flex justifyContent='end'>
						<ColorModeSwitcher />
					</Flex>
				</GridItem>

				<GridItem w='100%' alignSelf='start'>
					<Text
						colorScheme='red'
						fontSize='3rem'
						px={9}
						className={animationClass}
					>
						{question}
					</Text>
				</GridItem>

				<GridItem w='100%' alignSelf='center'>
					<IconButton
						size='lg'
						icon={<GiPerspectiveDiceSixFacesRandom />}
						colorScheme='red'
						variant='solid'
						onClick={handleGetRandomQuestion}
						justifySelf="flex-end"
						fontSize='2.5rem'
						p={9}
					/>
				</GridItem>
			</Grid>
		</Box>
	);
}

export default App;
