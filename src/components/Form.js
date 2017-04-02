// src/components/Form.js
import React, {Component, PropTypes} from 'react';
import without from 'lodash.without';
import assign from 'lodash.assign';

// no operation
const noop = () => undefined;
let validations = [];
export default class Form extends Component {
    constructor(props) {
        super(props);
        this.registerValidation = this.registerValidation.bind(this);
        this.isFormValid = this.isFormValid.bind(this);
        this.submit = this.submit.bind(this);
        this.removeValidation = this.removeValidation.bind(this);
    }

    /* validations */
    registerValidation(isValidFunc) {
        validations = [...validations, isValidFunc];
        return this.removeValidation(isValidFunc);
    };

    removeValidation(ref) {
        this.validations = without(this.validations, ref);
    };

    isFormValid(showErrors) {
        return validations.reduce((memo, isValidFunc) =>
        isValidFunc(showErrors) && memo, true);
    };

    /*submit*/
    submit() {
        if (this.isFormValid(true)) {
            this.props.onSubmit(assign({}, this.props.values));
            this.props.reset();
        }
    };

    getChildContext() {
        return {
            update: this.props.update,
            reset: this.props.reset,
            submit: this.submit,
            values: this.props.values,
            registerValidation: this.registerValidation,
            isFormValid: this.isFormValid
        };
    };

    render() {
        return (
            <form>
                {this.props.children}
            </form>
        );
    }
};

Form.propTypes = {
    children: PropTypes.node,
    values: PropTypes.object,
    update: PropTypes.func,
    reset: PropTypes.func,
    onSubmit: PropTypes.func
};

Form.childContextTypes = {
    update: PropTypes.func,
    reset: PropTypes.func,
    submit: PropTypes.func,
    values: PropTypes.object,
    registerValidation: PropTypes.func,
    removeValidation: PropTypes.func,
    isFormValid: PropTypes.func
};

Form.defaultProps = {
    onSubmit: noop
};
