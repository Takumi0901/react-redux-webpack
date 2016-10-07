import React from'react'

export default class FieldInput extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {input, label, type, meta, meta: { touched, error }} = this.props
    return (
      <div className="c-container--full">
        <label>{label}</label>
        <div>
          <input {...input} placeholder={label} type={type}/>
          {touched && error && <span className="c-text--highlight">{error}</span>}
        </div>
      </div>
    )
  }
}