import React from 'react';
import { Link, withRouter } from 'react-router';

class SessionForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = { email: "", password: "" };
		this.handleSubmit = this.handleSubmit.bind(this);
		this.clearErrors = this.clearErrors.bind(this);
	}

	componentDidUpdate() {
		this.redirectIfLoggedIn();
	}

	componentDidUpdate() {
		this.clearErrors();
	}

	redirectIfLoggedIn() {
		if (this.props.loggedIn) {
			this.props.router.push("/");
		}
	}

	clearErrors(){
		console.log(this.props.errors);
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
		this.clearErrors();
		this.props.processForm(user);
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
				<form onSubmit={this.handleSubmit} className="login-form-box">
					<img src="http://res.cloudinary.com/postreader/image/upload/v1489611558/postreader_content_logo_r1atgy.png" alt="PostReader Logo"></img>

					<h2><span>{this.props.formType}</span> to PostForm</h2>
					<p className="errors">{this.renderErrors()}</p>
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
						<input type="submit" value={this.props.formType} />
						<br />
						<p className="switch">{this.navLink()}</p>
					</div>
				</form>

			</div>
		);
	}

}

export default withRouter(SessionForm);
