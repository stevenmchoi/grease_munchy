import React from 'react';
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';
import HeadShake from 'react-reveal/HeadShake';

class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: '',
		};
		this.triggerErr = 0;

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
		this.triggerErr = this.triggerErr + 1;
		this.props.login(this.state);
	}

	handleDemoSubmit(e) {
		e.preventDefault();
		this.props.login({ username: 'demo', password: 'password' });
	}

	handleErrors() {
		return (
			<Fade bottom when={this.triggerErr}>
				<ul className="err-msg">
					{this.props.session.map((errStr, idx) => (
						<li key={`err-${idx}`}>{errStr}</li>
					))}
				</ul>
			</Fade>
		);
	}

	render() {
		const { username, password } = this.state;

		return (
			<div>
				<Slide top>
					<HeadShake spy={this.triggerErr}>
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
					</HeadShake>
				</Slide>

				{this.handleErrors()}
			</div>
		);
	}
}

export default Login;
