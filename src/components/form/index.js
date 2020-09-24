import React, {useState} from "react";

const AddForm = () => {

    const [newIdValue, setNewIdValue] = useState('')
    const [newFirstNameValue, setNewFirstNameValue] = useState('')
    const [newLastNameValue, setNewLastNameValue] = useState('')
    const [newEmailValue, setNewEmailValue] = useState('')
    const [newPhoneValue, setNewPhoneValue] = useState('')
    const [formErrors, setFormError] = useState({
        id:'',
        firstName:'',
        lastName:'',
        email:'',
        phone:''
    })

    const [formIdError, setIdError] = useState('')
    const [formFirstNameError, setFirstNameError] = useState('')
    const [formLastNameError, setLastNameError] = useState('')
    const [formEmailError, setEmailError] = useState('')
    const [formPhoneError, setPhoneError] = useState('')

    const [formIdInput, setFormIdInput] = useState('')
    const [formFirstNameInput, setFormFirstNameInput] = useState('')
    const [formLastNameInput, setFormLastNameInput] = useState('')
    const [formEmailInput, setFormEmailInput] = useState('')
    const [formPhoneInput, setFormPhoneInput] = useState('')

    const formValidation = () => {
        if (newIdValue === '') {
            setIdError('id не может быть пустым')
            setFormIdInput('form-error')
        } else if (!/^[0-9]+$/.test(newIdValue)) {
            setIdError('в строке не может быть букв')
            setFormIdInput('form-error')
        } else {
            setIdError('')
            setFormIdInput('form-success')
        }

        if (newFirstNameValue === '') {
            setFirstNameError('firstName не может быть пустым')
            setFormFirstNameInput('form-error')
        } else {
            setFirstNameError('')
            setFormFirstNameInput('form-success')
        }

        if (newLastNameValue === '') {
            setLastNameError('lastName не может быть пустым')
            setFormLastNameInput('form-error')
        } else {
            setLastNameError('')
            setFormLastNameInput('form-success')
        }

        if (newEmailValue === '') {
            setEmailError('email не может быть пустым')
            setFormEmailInput('form-error')
        } else if (!/^([A-Z|a-z|0-9](\.|_){0,1})+[A-Z|a-z|0-9]\@([A-Z|a-z|0-9])+((\.){0,1}[A-Z|a-z|0-9]){2}\.[a-z]{2,3}$/gm.test(newEmailValue)) {
            setEmailError('email не корректен')
            setFormEmailInput('form-error')
        } else {
            setEmailError('')
            setFormEmailInput('form-success')
        }

        if (newPhoneValue === '') {
            setPhoneError('phone не может быть пустым')
            setFormPhoneInput('form-error')
        } else if (!/^[0-9]+$/.test(newPhoneValue)) {
            setPhoneError('phone не должен содержать букв')
            setFormPhoneInput('form-error')
        } else {
            setPhoneError('')
            setFormPhoneInput('form-success')
        }
    }

    formValidation()

    return (
        <>
            <form>
                <div className="form-group">
                    <label htmlFor="form-lase-name">id</label>
                    <input type="email" className={"form-control " + formIdInput} id="form-id" value={newIdValue}
                           onChange={event => setNewIdValue(event.target.value)}/>
                    <div className="form-error-info">
                        {formIdError}
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="form-first-name">firstName</label>
                    <input type="text" className={"form-control " + formFirstNameInput} id="form-first-name"
                           value={newFirstNameValue} onChange={event => setNewFirstNameValue(event.target.value)}/>
                    <div className="form-error-info">
                        {formFirstNameError}
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="form-lase-name">lastName</label>
                    <input type="text" className={"form-control " + formLastNameInput} id="form-lase-name"
                           value={newLastNameValue} onChange={event => setNewLastNameValue(event.target.value)}/>
                    <div className="form-error-info">
                        {formLastNameError}
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="form-email">email</label>
                    <input type="text" className={"form-control " + formEmailInput} id="form-email"
                           value={newEmailValue} onChange={event => setNewEmailValue(event.target.value)}/>
                    <div className="form-error-info">
                        {formEmailError}
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="form-phone">phone</label>
                    <input type="text" className={"form-control " + formPhoneInput} id="form-phone"
                           value={newPhoneValue} onChange={event => setNewPhoneValue(event.target.value)}/>
                    <div className="form-error-info">
                        {formPhoneError}
                    </div>
                </div>
            </form>
        </>
    );
}

export default AddForm
