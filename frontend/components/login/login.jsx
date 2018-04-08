import React from 'react';

class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
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
		this.props.login(this.state).then(() => this.props.history.push('/'));
		// QUESTION: Since AuthRoute automatically Redirects currentUser,
		//   better to remove or keep 'history.push('/')?
	}

	render() {
		const { username, password } = this.state;

		return (
			<form onSubmit={this.handleSubmit}>
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
					Log in
				</button>
			</form>
		);
	}
}

export default Login;
