import React from "react";
import { withRouter } from "react-router-dom";

class SignupForm extends React.Component {
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

    componentWillReceiveProps(nextProps) {
        if (nextProps.signedIn === true) {
            this.props.history.push("/login");
        }

        this.setState({ errors: nextProps.errors });
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
        this.props.signup(user).then(this.props.closeModal);
    }

    handleOtherForm(e) {
        // debugger;
        e.preventDefault();
        this.props.otherForm();
        this.props.clearErrors();
    }

    render() {
        return (
            <div className="login-outer-container">
                <div className="login-form-container">
                    <form onSubmit={this.handleSubmit} className="login-form-box">
                        <div className="branding" />
                        <h2 className="main-form" >{this.props.formType}</h2>
                        {this.props.errors.map((error, i) => (
                            <li key={`error-${i}`}>
                                {error}
                            </li>
                        ))}
                        <div className="login-message">
                            {/* <h3 className="title">Welcome to BrainFlash!</h3>
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
                            <br />
                            <div className="signup-button">
                                <button
                                    className="session-submit"
                                    type="submit"
                                    value="Submit"
                                >
                                    <div className="content-text">Get Started</div>
                                </button>
                            </div>
                        </div>
                        <br />
                        <div className="signup-nav-content">
                            <button onClick={this.handleOtherForm} className="other-form">
                                Already have an account?
                            </button>
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

export default withRouter(SignupForm);