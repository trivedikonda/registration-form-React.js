// Write your JS code here
import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {
    firstNameInput: '',
    lastNameInput: '',
    isFormSubmitted: false,
    firstNameErrMsg: false,
    lastNameErrMsg: false,
  }

  onSubmitForm = event => {
    event.preventDefault()

    const {firstNameInput, lastNameInput} = this.state
    const isFirstNameValid = firstNameInput !== ''
    const isLastNameValid = lastNameInput !== ''

    if (isFirstNameValid && isLastNameValid) {
      this.setState({
        isFormSubmitted: true,
      })
    } else {
      this.setState({
        isFormSubmitted: false,
        firstNameErrMsg: !isFirstNameValid,
        lastNameErrMsg: !isLastNameValid,
      })
    }
  }

  onChangeFirstName = event => {
    this.setState({firstNameInput: event.target.value})
  }

  onChangeLastName = event => {
    this.setState({lastNameInput: event.target.value})
  }

  onBlurFirstName = () => {
    const {firstNameInput} = this.state
    const isFirstNameValid = firstNameInput !== '' // boolean value  --- false
    this.setState({firstNameErrMsg: !isFirstNameValid}) // true
  }

  onBlurLastName = () => {
    const {lastNameInput} = this.state
    const isLastNameValid = lastNameInput !== ''
    this.setState({lastNameErrMsg: !isLastNameValid})
  }

  submitAnotherResponse = () => {
    this.setState(prevState => ({
      firstNameInput: '',
      lastNameInput: '',
      isFormSubmitted: !prevState.isFormSubmitted,
    }))
  }

  renderRegistrationSuccessView = () => (
    <>
      <img
        height={40}
        width={40}
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png "
        alt="success"
      />
      <p>Submitted Successfully</p>
      <button
        className="submit-another-response-btn"
        type="button"
        onClick={this.submitAnotherResponse}
      >
        Submit Another Response
      </button>
    </>
  )

  renderRegistrationForm = () => {
    const {
      firstNameInput,
      lastNameInput,
      firstNameErrMsg,
      lastNameErrMsg,
    } = this.state
    return (
      <form onSubmit={this.onSubmitForm}>
        <div className="label-input-container">
          <label className="label-element" htmlFor="firstName">
            FIRST NAME
          </label>
          <input
            className="input-element"
            type="text"
            id="firstName"
            placeholder="First name"
            onChange={this.onChangeFirstName}
            onBlur={this.onBlurFirstName}
            value={firstNameInput}
          />
          {firstNameErrMsg && <p className="error-msg">Required</p>}
        </div>

        <div className="label-input-container">
          <label className="label-element" htmlFor="lastName">
            LAST NAME
          </label>
          <input
            className="input-element"
            type="text"
            id="lastName"
            placeholder="Last name"
            onChange={this.onChangeLastName}
            onBlur={this.onBlurLastName}
            value={lastNameInput}
          />
          {lastNameErrMsg && <p className="error-msg">Required</p>}
        </div>

        <div className="btn-container">
          <button className="button" type="submit">
            Submit
          </button>
        </div>
      </form>
    )
  }

  render() {
    const {isFormSubmitted} = this.state
    return (
      <div className="app-container">
        <h1 className="main-heading">Registration</h1>
        <div className="form-container">
          {isFormSubmitted // false
            ? this.renderRegistrationSuccessView()
            : this.renderRegistrationForm()}
        </div>
      </div>
    )
  }
}

export default RegistrationForm
