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
	}

	render() {
		const { username, email, password } = this.state;
		return (
			<form onSubmit={this.handleSubmit}>
				<label>Username</label>
				<input
					type="text"
					value={`${username}`}
					onChange={this.handleChange('username')}
				/>
				<input
					type="email"
					value={`${email}`}
					onChange={this.handleChange('email')}
				/>
				<input
					type="password"
					value={`${password}`}
					onChange={this.handleChange('password')}
				/>
				<button type="submit">Sign Up</button>
			</form>
		);
	}
}

export default Signup;
