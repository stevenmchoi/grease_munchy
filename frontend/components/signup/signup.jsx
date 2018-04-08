import React from 'react';

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
		this.props.signup(this.state).then(() => this.props.history.push('/'));
		// QUESTION: Since AuthRoute automatically Redirects currentUser,
		//   better to remove or keep 'history.push('/')?
	}

	render() {
		const { username, email, password } = this.state;

		return (
			<form onSubmit={this.handleSubmit}>
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

				<button className="button" type="submit">
					Sign Up
				</button>
			</form>
		);
	}
}

export default Signup;
