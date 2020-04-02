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

    demoSubmit() {
        return (
            <input type="submit"
                id="demo-user"
                onClick={() => this.setState({email: "demoUser@aol.com", password: "demoguy"})}
                value="DEMO" />
        );
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
        this.props.login(this.state).then(this.props.closeModal);
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
                    <div className="branding" />
                    <h2 className="main-form" >{this.props.formType}</h2>
                    <div onClick={this.props.closeModal} className="close-x">X</div>
                    

                    {this.renderErrors()}
                    <div className="login-form">
                        <br/>
                        <label className="text-email">
                            <input type="text"
                            placeholder="E-mail"
                            value={this.state.email}
                            onChange={this.update('email')}
                            className="login-input"
                            />
                        </label>
                        <br/>
                        <label className="text-password">
                            <input type="password"
                            placeholder="Password"
                            value={this.state.password}
                            onChange={this.update('password')}
                            className="login-input"
                            />
                        </label>
                        <br/>
                        <div className="buttons" >
                            <button onClick={() => (this.setState({
                                email: "demoUser@aol.com",
                                password: "demoguy"
                            }))} className="modal-login-button">Demo</button>
                            <input className="session-submit" type="submit" value={this.props.formType} />
                        </div>
                    </div>
                    <h3 className="other-form">{this.props.otherForm}</h3>
                </form>
            );
    }
}

export default withRouter(SessionForm);