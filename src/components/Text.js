// src/components/Text.js
import React, {Component, PropTypes} from 'react';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import * as validators from '../validators';
// no operation
const noop = () => undefined;

export default class Text extends Component {
  constructor(props) {
    super(props);
    // errors
    this.state = {
      errors: []
    };
    this.isValid = this.isValid.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onBlur = this.onBlur.bind(this);
  };
  componentWillMount() {
    this.removeValidationFromContext = this.context.registerValidation(show =>
      this.isValid(show));
  };
  componentWillUnmount() {
    this.removeValidationFromContext();
  };
  updateValue(value) {
    this.context.update(this.props.name, value);

    if (this.state.errors.length) {
      setTimeout(() => this.isValid(true), 0);
    }
  };

  onChange(event) {
    this.updateValue(event.target.value)
  };

  isValid(showErrors) {
    const errors = this.props.validate
      .reduce((memo, currentName) =>
        memo.concat(validators[currentName](
          this.context.values[this.props.name]
        )), []);

    if (showErrors) {
      this.setState({
        errors
      });
    }
    return !errors.length;
};

  onBlur() {
    this.isValid(true);
  };

  render() {
    return (
       <MuiThemeProvider>
        <TextField hintText={this.props.placeholder}
          floatingLabelText={this.props.label}
          value={this.context.values[this.props.name]}
          onChange={this.onChange.bind(this)}
          onBlur={this.onBlur.bind(this)}
          errorText={this.state.errors.length ? (
            <div>
              {this.state.errors.map((error, i) => <div key={i}>{error}</div>)}
            </div>
          ) : null}/>
      </MuiThemeProvider>
    );
  }
};

Text.defaultProps = {
    validate: [],
    removeValidationFromContext: noop
};

Text.propTypes = {
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    label: PropTypes.string
};

Text.contextTypes = {
  update: PropTypes.func.isRequired,
  values: PropTypes.object.isRequired,
  registerValidation: PropTypes.func.isRequired
}
