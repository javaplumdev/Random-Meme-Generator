import React from 'react';

function Main(props) {
	return (
		<div className="main-section-parent">
			<div className="main-section">
				<input
					type="text"
					placeholder="Top text"
					name="topText"
					onChange={props.onChange}
				/>
				<input
					type="text"
					placeholder="Bottom text"
					name="bottomText"
					onChange={props.onChange}
				/>

				<button onClick={props.handleClick}>Generate New Meme</button>
				<div className="meme-holder">
					<img src={props.image} className="meme-image" alt="" />
					<h1 className="top-text">Sample</h1>
					<h1 className="bottom-text">Sample two</h1>
				</div>
			</div>
		</div>
	);
}

export default Main;
