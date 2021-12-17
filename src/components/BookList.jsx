import React from 'react';
import BookItem from "./BookItem";

const BookList = ({books, title, remove}) => {
    if (!books.length){
        return (
            <h1 style={{textAlign:'center'}}>
                Список книг пуст
            </h1>
        )
    }

    return (
        <div>
            <h1 style={{textAlign: 'center'}}>
                {title}
            </h1>
            {books.map((book, index) =>
                <BookItem remove={remove} number={index+1} book={book} key={book.id}/>
            )}
        </div>
    );
};

export default BookList;