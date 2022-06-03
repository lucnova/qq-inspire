import questions from '../data/questions.json';

export const getRandomQuestion = () => {
	const randomIndex = Math.floor(Math.random() * questions.length);
	const randomQuestion = questions[randomIndex].question;
	return randomQuestion;
};