import React, {useState}  from "react";
import MyInput from "./UI/Input/MyInput";
import MyButton from "./UI/Button/MyButton";

const BookForm = ({create}) => {
    const [book, setBook] = useState({name:'', email:'', body:''})

    const addNewBook = (e) => {
        e.preventDefault()
        const newBook = {
            ...book,
            id:Date.now()
        }
        create(newBook)
        setBook({name:'', email:'', body:''})
    }

    return (
        <form>
            <MyInput
                onChange={e => setBook({...book, name: e.target.value})}
                value={book.name}
                type="text"
                placeholder='Название книги'/>
            <MyInput
                onChange={e => setBook({...book, email: e.target.value})}
                value={book.email}
                type="text"
                placeholder='Автор '/>
            <MyInput
                onChange={e => setBook({...book, body: e.target.value})}
                value={book.body}
                type="text"
                placeholder='Описание книги'/>
            <MyButton onClick={addNewBook}>Создать книгу</MyButton>
        </form>
    );
};

export default BookForm;