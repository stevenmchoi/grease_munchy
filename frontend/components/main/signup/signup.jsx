import React, { Component } from 'react';
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';
import HeadShake from 'react-reveal/HeadShake';

class Signup extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			email: '',
			password: '',
		};
		this.triggerErr = 0;

		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(field) {
		return (e) => {
			this.setState({ [field]: e.target.value });
		};
	}

	handleSubmit(e) {
		e.preventDefault();
		this.triggerErr = this.triggerErr + 1;
		this.props.signup(this.state);
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
		const { username, email, password } = this.state;

		return (
			<div>
				<Slide top>
					<HeadShake spy={this.triggerErr}>
						<form onSubmit={this.handleSubmit}>
							<h1>Sign Up</h1>

							<label>
								Email:
								<input type="email" value={`${email}`} onChange={this.handleChange('email')} />
							</label>

							<label>
								Username:
								<input type="text" value={`${username}`} onChange={this.handleChange('username')} />
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
					</HeadShake>
				</Slide>

				{this.handleErrors()}
			</div>
		);
	}
}

export default Signup;
