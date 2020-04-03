import React from "react";
import { withRouter } from "react-router-dom";

class LoginForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            errors: {}
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleOtherForm = this.handleOtherForm.bind(this);
    }

    demoSubmit() {
        return (
            <input type="submit"
                id="demo-user"
                onClick={() => this.setState({ email: "demoUser@aol.com", password: "demoguy" })}
                value="DEMO" />
        );
    }

    update(field) {
        return e =>
          this.setState({
              [field]: e.currentTarget.value
          });
    }

    handleSubmit(e) {
        e.preventDefault();
        e.stopPropagation();

        let user = {
            email: this.state.email,
            password: this.state.password
        };

        this.props.login(user).then(this.props.closeModal).then(this.props.clearErrors);
    }

    handleOtherForm(e) {
        // debugger;
        e.preventDefault();
        this.props.otherForm();
    }

    render() {
        return (
            <div className="login-outer-container">
                <div className="login-form-container">
                    <form onSubmit={this.handleSubmit} className="login-form-box">
                        {this.props.errors.map((error, i) => (
                            <li key={`error-${i}`}>
                                {error}
                            </li>
                        ))}
                        {/* {this.props.errors.map((err, idx) => (
                            <div key={idx} className="errors">
                                {err}
                            </div>
                        ))} */}
                        <div className="login-message">
                            <h2 className="title">Welcome Back!</h2>
                            <h3 className="sub-title">Let's get to Studying!</h3>
                        </div>
                        <div className="login-wrapper">
                            <div className="login-email">
                                <h5>Email:</h5>
                                <input
                                  type="text"
                                  value={this.state.email}
                                  onChange={this.update("email")}
                                  placeholder="Email*"
                                  className="login-emailpw-input"
                                />
                            </div>
                            <br />
                            <div className="login-password">
                                <h5>PASSWORD:</h5>
                                <input
                                  type="password"
                                  value={this.state.password}
                                  onChange={this.update("password")}
                                  placeholder="Password*"
                                  className="login-emailpw-input"
                                />
                                <br />
                                <div className="login-button">
                                    <button
                                      className="session-submit"
                                      type="submit"
                                      value="Submit"
                                    >
                                        <div className="context-text">Log In</div>
                                    </button>
                                </div>
                                <div className="buttons" >
                                    <button onClick={() => (this.setState({
                                        email: "demoUser@aol.com",
                                        password: "demoguy"
                                    }))} className="modal-login-button">Demo</button>
                                    {/* <input className="session-submit" type="submit" value={this.props.formType} /> */}
                                </div>
                                <div className="loginNavContent">
                                    <button onClick={this.handleOtherForm} className="other-form">
                                        Need an Account?
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                    <br />
                    <div
                      onClick={() => this.props.closeModal()}
                        className="close-x"
                    >
                        X
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(LoginForm);