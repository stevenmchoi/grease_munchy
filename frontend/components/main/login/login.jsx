import React from 'react';
import Slide from 'react-reveal/Slide';

class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: '',
		};
		this.triggerErr = false;

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
		this.triggerErr = true;
		this.props.login(this.state);
	}

	handleDemoSubmit(e) {
		e.preventDefault();
		this.props.login({ username: 'demo', password: 'password' });
	}

	handleErrors() {
		return (
			<Slide left when={this.triggerErr}>
				<ul className="err-msg">
					{this.props.session.map((errStr, idx) => (
						<li key={`err-${idx}`}>{errStr}</li>
					))}
				</ul>
			</Slide>
		);
	}

	render() {
		const { username, password } = this.state;

		return (
			<div>
				<Slide top>
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
				</Slide>

				{this.handleErrors()}
			</div>
		);
	}
}

export default Login;
