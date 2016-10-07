import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'

import FieldInput from '../components/FieldInput'
import {validate} from '../utils/Validate'


class SubmitValidationForm extends Component {
  render() {
    const { error, handleSubmit } = this.props
    return (
      <form className="c-form" onSubmit={handleSubmit}>
        <Field name="email" type="email" component={FieldInput} label="email"/>
        <Field name="password" type="password" component={FieldInput} label="Password"/>
        {error && <strong>{error}</strong>}
        <div>
          <button className="c-btn c-btn-primary--flat" type="submit">Submit</button>
        </div>
      </form>
    )
  }
}

export const validations = {
  'email': {required: true, email: true},
  'password': {required: true, password: true}
}

export default reduxForm({
  form: 'submitValidation',
  validate: validate(validations)
})(SubmitValidationForm)
