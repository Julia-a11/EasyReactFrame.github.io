import React, { useState} from 'react';
import classes from './Components/styles/app.scss'
import Welcome from "./Components/Welcome";
import FormNote from "./Components/FormNote";
import NoteList from "./Components/NoteList";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

const App = () => {
    const [notesList, setNotesList] = useState([])

    const createNote = (newNote) => {
        setNotesList([...notesList, newNote])
    }

    return (
        <div>
            <Header />
            <div className={classes.app}>
                <div className={classes.app__item}>
                    <Welcome/>
                    <NoteList notesList={notesList}/>
                </div>
                <FormNote create={createNote}/>
            </div>
            <Footer />
        </div>
    )
}

export default App;