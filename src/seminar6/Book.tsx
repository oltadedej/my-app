import React, { FormEvent, useContext, useState } from "react"
import { BookContext } from "./BookContext"

const Book = () => {
    const { books, addBook } = useContext(BookContext)
    const [bookForm, setBookForm] = useState({
        title: "",
        author: "",
        genre: "",
        year: 0
    })

    const handleFormChange = (e: FormEvent<HTMLInputElement>) => {
        const {id, value} = e.currentTarget;
        setBookForm((prev) => {
            return {
                ...prev,
                [id]: value
            }
        })
    }

    const submitBook = (e: FormEvent) => {
        e.preventDefault();
        addBook(bookForm)
    }

    return (
        <div>
            <form onSubmit={(e: FormEvent) => submitBook(e)}>
                <div>
                    <label htmlFor="title">name</label>
                    <input id="title" type="text" value={bookForm.title}
                        onChange={(e: FormEvent<HTMLInputElement>) => handleFormChange(e)}
                    />
                </div>
                <div>
                    <label htmlFor="author">author</label>
                    <input id="author" type="text" value={bookForm.author}
                        onChange={(e: FormEvent<HTMLInputElement>) => handleFormChange(e)}
                    />
                </div>
                <div>
                    <label htmlFor="genre">genre</label>
                    <input id="genre" type="text" value={bookForm.genre}
                        onChange={(e: FormEvent<HTMLInputElement>) => handleFormChange(e)}
                    />
                </div>
                <div>
                    <label htmlFor="year">year</label>
                    <input id="year" type="number" value={bookForm.year}
                        onChange={(e: FormEvent<HTMLInputElement>) => handleFormChange(e)}
                    />
                </div>
                <button>Add book</button>
            </form>
            <div>
                <h1>All books</h1>
                {books?.length && books?.map(book => {
                    return (
                        <div>
                            <p>Id: {book.id}</p>
                            <p>Title: {book.title}</p>
                            <p>Author: {book.author}</p>
                            <p>Genre: {book.genre}</p>
                            <p>Year: {book.year}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Book