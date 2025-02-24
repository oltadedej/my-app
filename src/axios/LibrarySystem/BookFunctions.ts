import axios from 'axios';

const API_URL = 'http://localhost:3001/books';

interface Book {
    id?: number;
    title: string;
    author: string;
    year:number;
  }
  


// Fetch all books
const fetchBooks = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching books:', error);
  }
};

// Fetch a single book by ID
const fetchBookById = async (id:number) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching book:', error);
  }
};

// Add a new book
const addBook = async (book:Book) => {
  try {
    const response = await axios.post(API_URL, book);
    return response.data;
  } catch (error) {
    console.error('Error adding book:', error);
  }
};

// Update a book by ID
const updateBook = async (id:number, updatedBook:Book) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, updatedBook);
    return response.data;
  } catch (error) {
    console.error('Error updating book:', error);
  }
};

// Delete a book by ID
const deleteBook = async (id:number) => {
  try {
    await axios.delete(`${API_URL}/${id}`);
    console.log('Book deleted successfully');
  } catch (error) {
    console.error('Error deleting book:', error);
  }
};

// Example usage
const exampleBook:Book= {
  title: 'The Great Gatsby',
  author: 'F. Scott Fitzgerald',
  year: 1925
};

addBook(exampleBook).then(() => {
  fetchBooks().then(books => console.log('All books:', books));
});