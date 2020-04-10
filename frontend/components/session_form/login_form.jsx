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

    componentDidMount() {
        this.props.clearErrors();
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
        this.props.clearErrors();

        let user = {
            email: this.state.email,
            password: this.state.password
        };

        // this.props.login(user).then(this.props.closeModal);
        // this.props.history.push("/decks");
        this.props.login(user).then(() => {
            this.props.closeModal();
            this.props.history.push("/decks");
        });
    }

    handleOtherForm(e) {
        e.preventDefault();
        this.props.otherForm();
        this.props.clearErrors();
    }

    getErrors() {
        if (this.errors) {
            return (
                <>
                {this.props.errors.map((error,i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))} 
                </>
            )
        }
    }

    render() {
        return (
            <div className="login-outer-container">
                <div className="login-form-container">
                    <form onSubmit={this.handleSubmit} className="login-form-box">
                        <div className="branding" />
                        <h2 className="main-form" >{this.props.formType}</h2>
                        {this.props.errors && this.props.errors.map((error, i) => (
                            <li key={`error-${i}`}>
                                {error}
                            </li>
                        ))}
                        {/* {this.getErrors()} */}
                        <div className="login-message">
                            {/* <h3 className="title">Welcome to BrainFlash,</h3>
                            <br />
                            <h3 className="title">Let's get to Studying!</h3> */}
                        </div>
                        <div className="login-form">
                            <div className="login-email">
                                <h5>Email:</h5>
                                <input
                                  type="text"
                                  value={this.state.email}
                                  onChange={this.update("email")}
                                  className="login-input"
                                />
                            </div>
                            <br />
                            <div className="login-password">
                                <h5>Password:</h5>
                                <input
                                  type="password"
                                  value={this.state.password}
                                  onChange={this.update("password")}
                                  className="login-input"
                                />
                            </div>
                            <br />
                            <div className="login-button-modal">
                                <button
                                    className="session-submit"
                                    type="submit"
                                    value="Submit"
                                >
                                    <div className="context-text">Log In</div>
                                </button>
                                <div className="buttons" >
                                    <button onClick={() => (this.setState({
                                        email: "demoUser@aol.com",
                                        password: "demoguy"
                                    }))} className="demo-button">Demo</button>
                                    {/* <input className="session-submit" type="submit" value={this.props.formType} /> */}
                                </div>
                            </div>
                            <div className="loginNavContent">
                                <button onClick={this.handleOtherForm} className="other-form">
                                    Need an Account?
                                </button>
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