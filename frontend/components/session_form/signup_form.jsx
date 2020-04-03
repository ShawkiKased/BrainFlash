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

    closeAndClear() {
        this.props.clearErrors();
        this.props.closeModals();
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
            <div className="signup-outer-container">
                <div className="signup-form-container">
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
                            <h2 className="title">Welcome to BrainFlash!</h2>
                        </div>
                        <div>
                            <div className="login-email">
                                <h5>EMAIL:</h5>
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
                                <div className="signup-button">
                                    <button
                                      className="session-submit"
                                      type="submit"
                                      value="Submit"
                                    >
                                        <div className="content-text-signup">Get Started</div>
                                    </button>
                                </div>
                            </div>
                            <div className="signup-nav-content">
                                <p className="signup-login-link">
                                    <button onClick={this.handleOtherForm} className="other-form">
                                        Already have an account?
                                    </button>
                                </p>
                            </div>
                        </div>
                    </form>
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