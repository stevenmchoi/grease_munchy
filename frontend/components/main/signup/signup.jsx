import React from 'react';
import Slide from 'react-reveal/Slide';

class Signup extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			email: '',
			password: '',
		};

		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(field) {
		return (e) => {
			this.setState({ [field]: e.target.value });
		};
	}

	handleSubmit(e) {
		e.preventDefault();
		this.props
			.signup(this.state)
			.then(() => this.props.history.push('/account'));
		// QUESTION: Since AuthRoute automatically Redirects currentUser,
		//   better to remove or keep 'history.push('/account')?
	}

	render() {
		const { username, email, password } = this.state;

		return (
			<Slide top>
				<form onSubmit={this.handleSubmit}>
					<h1>Sign Up</h1>

					<label>
						Email:
						<input
							type="email"
							value={`${email}`}
							onChange={this.handleChange('email')}
						/>
					</label>

					<label>
						Username:
						<input
							type="text"
							value={`${username}`}
							onChange={this.handleChange('username')}
						/>
					</label>

					<label>
						Password:
						<input
							type="password"
							value={`${password}`}
							onChange={this.handleChange('password')}
						/>
					</label>

					<button className="button">Sign Up</button>
				</form>
			</Slide>
		);
	}
}

export default Signup;
