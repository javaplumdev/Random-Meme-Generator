import React, { useState, useEffect } from 'react';

// Components
import Navbar from './components/Navbar';
import Main from './components/Main';

function App() {
	const [meme, setMeme] = useState({
		topText: '',
		bottomText: '',
		memeImage: 'https://i.imgflip.com/26am.jpg',
	});

	const [allMemes, setAllMemes] = useState({});

	function handleChange(event) {
		const { name, value } = event.target;

		setMeme((prevForm) => {
			return {
				...prevForm,
				[name]: value,
			};
		});
	}

	useEffect(() => {
		fetch(`https://api.imgflip.com/get_memes`)
			.then((res) => res.json())
			.then((data) => setAllMemes(data));
	}, []);

	function handleClick() {
		// Changing meme
		const randomMeme = allMemes.data.memes;
		const randomMemes = Math.floor(Math.random() * randomMeme.length);
		const randomMemeURL = randomMeme[randomMemes].url;
		console.log(randomMemeURL);
	}

	return (
		<>
			<Navbar />
			<Main
				onChange={handleChange}
				handleClick={handleClick}
				image={meme.memeImage}
			/>
		</>
	);
}

export default App;
