import { IconButton, useColorModeValue } from '@chakra-ui/react';
import { GiPerspectiveDiceSixFacesRandom } from 'react-icons/gi';

export const ButtonGetRandomQ = ({ handleGetRandomQuestion }) => {
	const buttonColor = useColorModeValue('#F09314', '#FCBB62');

	const handleClick = (e) => {
		e.preventDefault();

		handleGetRandomQuestion();

		setTimeout(() => {
			let currNode = e.target;
			while (currNode.nodeName !== 'BUTTON') {
				currNode = currNode.parentNode;
			}
			currNode.blur();
		}, 500);
	};
	return (
		<>
			<IconButton
				size='lg'
				icon={<GiPerspectiveDiceSixFacesRandom />}
				colorScheme='red'
				variant='solid'
				onClick={handleClick}
				justifySelf="flex-end"
				fontSize='2.5rem'
				p={9}
				_focus={{
					outline: 'none',
					boxShadow: 'none',
					backgroundColor: buttonColor,
				}}
				_hover={{
					outline: 'none',
					boxShadow: 'none',
				}}
			/>
		</>
	);
};
