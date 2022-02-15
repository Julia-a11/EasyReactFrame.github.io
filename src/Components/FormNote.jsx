import React, {useState} from 'react';
import MyInput from "./UI/Input/MyInput";
import classes from "./styles/app.scss"
import MyButton from "./UI/Button/MyButton";
import {Form, Field} from 'react-final-form'


const FormNote = ({create}) => {

    const [regexForNumber] = useState(["e", "E", "+", ".", ","]);
    const required = value => (value ? undefined : 'Обязательное поле')

    const addNewNote = (values) => {
        const newNote = {
            ...values, id: Date.now()
        }

        create(newNote)
    }

    return (
        <div className={classes.form}>
            <Form onSubmit={addNewNote}
                  render={({handleSubmit, submitting, errors,pristine}) => {
                      const disabled = !!Object.keys(errors).length
                      return(
                          <form onSubmit={handleSubmit}>
                              <Field name="numberNote" validate={required}>
                                  {({input, meta}) => (
                                      <>
                                          <label>Номер записи</label>
                                          {meta.error && meta.touched && <span className={classes.form__error}>{meta.error}</span>}
                                          <MyInput type="number" {...input}
                                           onKeyDown={e => regexForNumber.includes(e.key) && e.preventDefault()}  />
                                      </>
                                  )}
                              </Field>
                              <Field name="textNote" validate={required}>
                                  {({input, meta}) => (
                                      <>
                                          <label>Название записи</label>
                                          {meta.error && meta.touched && <span className={classes.form__error}>{meta.error}</span>}
                                          <MyInput type="text" {...input}/>
                                      </>
                                  )}
                              </Field>
                              <MyButton disabled={disabled || pristine} type="submit">Добавить в список</MyButton>
                          </form>
                      )
                  }}/>
        </div>
    );
}

export default FormNote;