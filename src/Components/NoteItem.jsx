import React from 'react';
import classes from './styles/app.scss'

const NoteItem = (props) => {
    return (
        <div className={classes.noteItem}>
            <div className={classes.noteItem__list}>
                <p>{props.note.numberNote}) {props.note.textNote}</p>
            </div>
        </div>
    );
};

export default NoteItem;