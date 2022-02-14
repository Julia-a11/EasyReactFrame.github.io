import React, {useState} from 'react';
import MyInput from "./UI/Input/MyInput";
import classes from "./styles/app.scss"
import MyButton from "./UI/Button/MyButton";
import { Field } from 'react-final-form'


const Form = ({create}) => {

    const [note, setNote] = useState({numberNote: '', textNote: ''})
    const [regexForNumber] = useState(["e", "E", "+", "-", ".", ","]);

    const addNewNote = () => {
        const newNote = {
            ...note, id: Date.now()
        }

        create(newNote)
        setNote({numberNote: '', textNote: ''})
    }

    const clickEnter=(event)=> {
        if (event.keyCode === 13) {
            addNewNote()
        }
    }

    const getValidator = isRequired =>
        isRequired ? value => (value ? undefined : "Required") : () => {};
    const Error = ({ name }) => (
        <Field name={name} subscription={{ error: true }}>
            {({ meta: { error } }) => (error ? <span>{error}</span> : null)}
        </Field>
    );

    return (
        <div className={classes.form}>
            <form>
                <label>Номер записи</label>
                <MyInput type="number" value={note.numberNote}
                         onKeyDown={e => regexForNumber.includes(e.key) && e.preventDefault()}
                         onChange={e => setNote({...note, numberNote: e.target.value})}/>
                <label>Название записи</label>
                <MyInput type="text" value={note.textNote} onKeyDown={(e) => clickEnter(e) }
                         onChange={e => setNote({...note, textNote: e.target.value})} />
                <MyButton onClick={addNewNote}>Добавить в список</MyButton>
            </form>
        </div>
    );
}

export default Form;