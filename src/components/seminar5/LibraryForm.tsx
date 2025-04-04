import React, { useState } from "react";

const genres = ["Comedy", "Fiction", "Drama", "Romance", "Educational"];

const LibraryForm: React.FC = () => {
  const [form, setForm] = useState({ title: "", author: "", year: "", genre: "" });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const currentYear = new Date().getFullYear();

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    
    if (!form.title) newErrors.title = "Title is required.";
    else if (form.title.length > 25) newErrors.title = "Title cannot exceed 25 characters.";
    
    if (!form.author) newErrors.author = "Author is required.";
    else if (!/^([A-Z][a-z]+\s)+[A-Z][a-z]+$/.test(form.author)) 
      newErrors.author = "Author name must be in 'Name Surname' format.";
    
    if (!form.year) newErrors.year = "Year is required.";
    else if (isNaN(Number(form.year)) || Number(form.year) > currentYear) 
      newErrors.year = "Year cannot exceed the current year.";
    
    if (!form.genre) newErrors.genre = "Genre is required.";
    else if (!genres.includes(form.genre)) 
      newErrors.genre = "Invalid genre. Allowed: Comedy, Fiction, Drama, Romance, Educational.";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      alert(JSON.stringify(form, null, 2));
      setForm({ title: "", author: "", year: "", genre: "" });
      setErrors({});
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 border rounded shadow">
      <div className="mb-4">
        <label className="block mb-1">Title</label>
        <input type="text" name="title" value={form.title} onChange={handleChange} className="w-full p-2 border rounded" />
        {errors.title && <p className={errors.title.includes("required") ? "text-red-500" : "text-yellow-500"}>{errors.title}</p>}
      </div>

      <div className="mb-4">
        <label className="block mb-1">Author</label>
        <input type="text" name="author" value={form.author} onChange={handleChange} className="w-full p-2 border rounded" />
        {errors.author && <p className={errors.author.includes("required") ? "text-red-500" : "text-yellow-500"}>{errors.author}</p>}
      </div>

      <div className="mb-4">
        <label className="block mb-1">Year</label>
        <input type="text" name="year" value={form.year} onChange={handleChange} className="w-full p-2 border rounded" />
        {errors.year && <p className={errors.year.includes("required") ? "text-red-500" : "text-yellow-500"}>{errors.year}</p>}
      </div>

      <div className="mb-4">
        <label className="block mb-1">Genre</label>
        <input type="text" name="genre" value={form.genre} onChange={handleChange} className="w-full p-2 border rounded" />
        {errors.genre && <p className={errors.genre.includes("required") ? "text-red-500" : "text-yellow-500"}>{errors.genre}</p>}
      </div>

      <button type="submit" className="bg-blue-500 text-white p-2 rounded">Add Book</button>
    </form>
  );
};

export default LibraryForm;
