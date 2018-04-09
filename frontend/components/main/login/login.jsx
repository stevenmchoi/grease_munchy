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

	handleErrors() {
		return this.props.session.map((errStr, idx) => (
			<li key={`err-${idx}`}>{errStr}</li>
		));
	}

	handleChange(field) {
		return (e) => {
			this.setState({ [field]: e.target.value });
		};
	}

	handleSubmit(e) {
		e.preventDefault();
		this.props.login(this.state);
	}

	handleDemoSubmit(e) {
		e.preventDefault();
		this.props.login({ username: 'demo', password: 'password' });
	}

	render() {
		const { username, password } = this.state;

		return (
			<Slide top>
				<div>
					<form onSubmit={this.handleDemoSubmit}>
						<button className="button">Demo</button>
					</form>

					<ul className="err-msg">{this.handleErrors()}</ul>

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
