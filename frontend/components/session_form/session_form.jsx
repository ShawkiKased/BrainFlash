import React from 'react';
import { withRouter } from 'react-router';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        // const user = Object.assign({}, this.state);
        // this.props.processForm(this.state).then(() => this.props.history.push("/")); 
        this.props.processForm(this.state).then(this.props.closeModal);
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
                <form onSubmit={this.handleSubmit} className="login-form-box">
                    <br/>
                    <h2 className="main-form" >{this.props.formType}</h2>
                    <div onClick={this.props.closeModal} className="close-x">X</div>
                    {this.renderErrors()}
                    <div className="login-form">
                        <br/>
                        <label className="text-email">E-Mail:
                            <input type="text"
                            value={this.state.email}
                            onChange={this.update('email')}
                            className="login-input"
                            />
                        </label>
                        <br/>
                        <label className="text-password">Password:
                            <input type="password"
                            value={this.state.password}
                            onChange={this.update('password')}
                            className="login-input"
                            />
                        </label>
                        <br/>
                        <input className="session-submit" type="submit" value={this.props.formType} />
                    </div>
                    <h3 className="other-form">{this.props.otherForm}</h3>
                </form>
            );
    }
}

export default withRouter(SessionForm);