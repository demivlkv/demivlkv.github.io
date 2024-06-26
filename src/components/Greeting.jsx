import { useState, useEffect } from 'react';

const greetings = [
	`Hi`,
	`Hola`,
	`こんにちは`,
	`Здравствуйте`,
	`Привіт`,
	`Cześć`,
	`Bonjour`,
	`Ciao`,
	`Aloha`,
	`Hallo`,
	`Olá`,
	`Hej`,
];

const Greeting = () => {
	const [greetingIndex, setGreetingIndex] = useState(
		Math.floor(Math.random() * greetings.length)
	);

	const changeGreeting = () => {
		let randomNumber = Math.floor(Math.random() * greetings.length);
		setGreetingIndex(randomNumber);
	};

	useEffect(() => changeGreeting(), []);

	return <>{greetings[greetingIndex]}</>;
};

export default Greeting;
