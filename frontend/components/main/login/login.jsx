import React from 'react';
import Slide from 'react-reveal/Slide';

class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: '',
		};

		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleDemoSubmit = this.handleDemoSubmit.bind(this);
	}

	handleChange(field) {
		return (e) => {
			this.setState({ [field]: e.target.value });
		};
	}

	handleSubmit(e) {
		e.preventDefault();
		this.props
			.login(this.state)
			.then(() => this.props.history.push('/account'));
		// QUESTION: Since AuthRoute automatically Redirects currentUser,
		//   better to remove or keep 'history.push('/account')?
	}

	handleDemoSubmit(e) {
		e.preventDefault();
		this.props
			.login({ username: 'demo', password: 'password' })
			.then(() => this.props.history.push('/account'));
		// QUESTION: Since AuthRoute automatically Redirects currentUser,
		//   better to remove or keep 'history.push('/account')?
	}

	render() {
		const { username, password } = this.state;

		return (
			<Slide top>
				<div>
					<form onSubmit={this.handleDemoSubmit}>
						<button className="button">Demo</button>
					</form>

					<form onSubmit={this.handleSubmit}>
						<h1>Log In</h1>

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
				</div>
			</Slide>
		);
	}
}

export default Login;
