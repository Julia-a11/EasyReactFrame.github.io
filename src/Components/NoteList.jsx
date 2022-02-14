import React, {useState} from 'react';
import NoteItem from "./NoteItem";
import classes from './styles/app.scss'

const NoteList = ({notesList}) => {

    if (!notesList.length) {
        return (
            <div className={classes.noteList__text}>
                <p>Список пуст</p>
            </div>
        )
    }

    return (
        <div className={classes.noteList}>
            <div className={classes.noteList__text}>
                <p>Список:</p>
            </div>
            {notesList.sort((a, b) => a.numberNote > b.numberNote ? 1 : -1)
                .map((note) =>
                    <NoteItem note={note} key={note.id}/>
                )}
        </div>
    );
};

export default NoteList;