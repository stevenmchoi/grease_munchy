import React from 'react';

class NavBar extends React.Component {
	render() {
		return (
			<div>
				<a href="/">
					<img
						src="https://fontmeme.com/permalink/180401/ebd8cc51ec8f24ef053f3daebd6b9506.png"
						alt="blue-apron-logo-font"
						border="0"
					/>
				</a>
				{/* <!-- Logo from Font Meme:
			https://fontmeme.com/blue-apron-logo-font/ --> */}
				<h1>Grease Munchy...why not?</h1>
			</div>
		);
	}
}

export default NavBar;
