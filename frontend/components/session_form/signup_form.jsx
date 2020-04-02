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
        this.props.signup(user);
    }

    handleOtherForm(e) {
        e.preventDefault();
        this.props.otherForm();
    }
}