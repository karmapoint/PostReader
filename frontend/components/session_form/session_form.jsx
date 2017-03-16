import React from 'react';
import { Link,hashHistory, withRouter } from 'react-router';

class SessionForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = { email: "", password: "" };
		this.handleSubmit = this.handleSubmit.bind(this);
		this.clearErrors = this.clearErrors.bind(this);
		this.demoSubmit = this.demoSubmit.bind(this);
	}

	componentDidUpdate() {
		this.redirectIfLoggedIn();
	}

	componentDidUpdate() {
		this.clearErrors();
	}

	redirectIfLoggedIn() {
		if (this.props.loggedIn) {
			this.props.router.push("/home");
		}
	}

	clearErrors(){
		this.props.errors.length = 0;
	}

	update(field) {
		return e => this.setState({
			[field]: e.currentTarget.value
		});
	}

	handleSubmit(e) {
		e.preventDefault();
		const user = this.state;
		console.log(user);
		this.clearErrors();
		this.props.processForm(user).then(() => hashHistory.push('/home'));
	}

	demoSubmit(e) {
		e.preventDefault();
		const user = this.state;
		this.clearErrors();
		this.props.login({email: "hello@guest.com", password: "hello@guest.com"})
		.then(() => hashHistory.push('/home'));
	}

	navLink() {
		if (this.props.formType === "login") {
			return <Link to="/signup">New user? Sign up</Link>;
		} else {
			return <Link to="/login">Existing user? Login</Link>;
		}
	}

	renderErrors() {
		return(
			<ul>
				{this.props.errors.map((error, i) => (
					<li key={`error-${i}`}>
						{error}
					</li>
				))}
			</ul>
		);
	}



	render() {
		return (
			<div className="login-form-container">

				<div className="login-form-box">
				<form>
					<img src="https://res.cloudinary.com/postreader/image/upload/v1489611558/postreader_content_logo_r1atgy.png" alt="PostReader Logo"></img>

					<h2><span>{this.props.formType}</span> to PostForm</h2>
					<div className="errors">{this.renderErrors()}</div>
					<div className="login-form">
						<br/>
							<input type="text"
								value={this.state.email}
								onChange={this.update("email")}
								className="login-input"
								placeholder="Email" />
						<br/>

							<input type="password"
								value={this.state.password}
								placeholder="Password"
								onChange={this.update("password")}
								className="login-input" />
						<br/>
						<button type="submit"
							onClick={this.handleSubmit} >
							{this.props.formType}
						</button>
						<button type="submit" className="demoSubmit"
							onClick={this.demoSubmit} >
							DEMO
						</button>


					</div>
				</form>
				<p className="switch">{this.navLink()}</p>
			</div>

			</div>
		);
	}

}

export default withRouter(SessionForm);
