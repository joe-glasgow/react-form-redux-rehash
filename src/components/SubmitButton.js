// src/components/SubmitButton.js
import React, {Component, PropTypes} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default class SubmitButton extends Component {

    render() {
        return (
            <MuiThemeProvider>
                <RaisedButton
                    primary
                    disabled={!this.context.isFormValid()}
                    label={this.props.label}
                    onTouchTap={this.context.submit}/>
            </MuiThemeProvider>
        );
    }
};

SubmitButton.propTypes = {
    label: PropTypes.string
};

SubmitButton.contextTypes = {
    isFormValid: PropTypes.func.isRequired,
    submit: PropTypes.func.isRequired
};

SubmitButton.defaultProps = {
    label: 'Submit'
};
