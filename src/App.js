import React, {createElement, useEffect, useState} from "react";
import "./styles/App.css"
import BookList from "./components/BookList";
import MyButton from "./components/UI/Button/MyButton";
import BookForm from "./components/BookForm";
import MyModal from "./components/UI/MyModal/MyModal";
import BookService from "./API/BookService";
import Loader from "./components/UI/Loader/Loader";

function App() {
    const [books, setBooks] = useState([
        // {id:1, name:'Книга 1', email:'author 1',body:'Content'},
        // {id:2, name:'Книга 2', email:'author 2', body:'Content'},
        // {id:3, name:'Книга 3', email:'author 3', body:'Content'}
    ])

    const [modal, setModal] = useState(false)
    const [isBookLoading, setIsBookLoading] = useState(false)

    useEffect(() => {
        fetchBooks()
    }, [])


    const createBook = (newBook) => {
        setBooks([...books, newBook])
        setModal(false)
    }

    const removeBook = (book) => {
        setBooks(books.filter(b => b.id !== book.id))

    }

    async function fetchBooks() {
        setIsBookLoading(true)
        const books = await BookService.getAll()
        setBooks(books)
        setIsBookLoading(false)
    }



  return (
    <div className="App">
        <MyButton style={{marginTop: '30px'}} onClick={() => setModal(true)}>
            Создать книгу
        </MyButton>
        <MyModal visible={modal} setVisible={setModal}>
            <BookForm create={createBook}/>
        </MyModal>
        {isBookLoading === true
            ? <div style={{display: 'flex', justifyContent: 'center', marginTop: '50px'}}><Loader /></div>
            :<BookList
                remove={removeBook}
                books={books}
                title={"Список книг"} />

        }
    </div>
  );
}

export default App;

