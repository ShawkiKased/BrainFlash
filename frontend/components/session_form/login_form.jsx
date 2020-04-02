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

        this.props.login(user);
    }

    handleOtherForm(e) {
        e.preventDefault();
        this.props.otherForm()
    }

    render() {
        return (
            <div>
                
            </div>
            
        );
    }
}