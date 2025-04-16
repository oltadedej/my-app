import React, { createContext, PropsWithChildren, useState } from "react";

interface Book {
    id: number;
    title: string;
    author: string;
    genre: string;
    year: number
}

interface BookCont {
    books: Book[] | null;
    addBook: Function
}

const initBookObj: Book[] = []

export const BookContext = createContext<BookCont>({
    books: initBookObj,
    addBook: () => {}
})

const BookContextProvider: React.FC<PropsWithChildren> = ({children}) => {
    const [books, setBooks] = useState(initBookObj);

    const addBook = (book: Book) => {
        console.log(book)
        try {
            books.push({...book, id: books?.length + 1})
            setBooks([...books])
            console.log(books)
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <BookContext.Provider value={{books, addBook}}>
            {children}
        </BookContext.Provider>
    )
}

export default BookContextProvider