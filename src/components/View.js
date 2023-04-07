import React from "react";

export const View = ({ books, deleteBook }) => {
  return books.map((book) => (
    <tr key={book.start}>
      <td>{book.title}</td>
      <td>{book.author}</td>
      <td>{book.start} საათი</td>
      <td>{book.end} საათი</td>
      <td className="delete-btn" onClick={() => deleteBook(book.start)}>
        <button className="btn-delete">წაშლა</button>
      </td>
    </tr>
  ));
};
