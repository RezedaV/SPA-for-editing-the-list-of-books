import React from 'react';
import MyButton from "./UI/Button/MyButton";

const BookItem = (props) => {
    return (
        <div className="book">
            <div className="book__content">
                <strong>{props.number}. Название книги: {props.book.name}</strong>
                <div>
                    <em>Автор книги: {props.book.email}</em>
                </div>
                <div>
                    Краткое описание: <br/> {props.book.body}
                </div>
            </div>
            <div className="book__btns">
                <MyButton
                    onClick={() => props.remove(props.book)}>
                    Удалить
                </MyButton>
            </div>
        </div>
    );
};

export default BookItem;