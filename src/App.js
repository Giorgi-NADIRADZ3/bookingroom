import React, { useState, useEffect } from "react";
import { View } from "./components/View";
import TimeDate from "./components/TimeDate";

// getting the values of local storage
const getDatafromLS = () => {
  const data = localStorage.getItem("books");
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
};

export const App = () => {
  // main array of objects state || books state || books array of objects
  const [books, setbooks] = useState(getDatafromLS());

  // input field states
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  // form submit event
  const handleAddBookSubmit = (e) => {
    e.preventDefault();
    // creating an object
    let book = {
      title,
      author,
      start,
      end,
    };
    setbooks([...books, book]);
    setTitle("");
    setAuthor("");
    setStart("");
    setEnd("");
  };

  // delete book from LS
  const deleteBook = (start) => {
    const filteredBooks = books.filter((element, index) => {
      return element.start !== start;
    });
    setbooks(filteredBooks);
  };

  // saving data to local storage
  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);

  return (
    <div className="body">
      <div className="wrapper">
        <div className="header-text">
          <TimeDate />
          <h1>შეხვედრის ოთახი სართული 3</h1>
          <p>დაჯავშნე ოთახი. შეამოწმე დრო</p>
        </div>
        <div className="main">
          <div className="form-container">
            <form
              autoComplete="off"
              className="form-group"
              onSubmit={handleAddBookSubmit}
            >
              <label>დასახელება</label>
              <input
                type="text"
                className="form-control"
                required
                onChange={(e) => setTitle(e.target.value)}
                value={title}
              ></input>
              <br></br>
              <label>ავტორი</label>
              <input
                type="text"
                className="form-control"
                required
                onChange={(e) => setAuthor(e.target.value)}
                value={author}
              ></input>
              <br></br>
              <label>დაწყების დრო</label>
              <input
                type="text"
                className="form-control"
                required
                onChange={(e) => setStart(e.target.value)}
                value={start}
              ></input>
              <br></br>
              <label>დასასრული</label>
              <input
                type="text"
                className="form-control"
                required
                onChange={(e) => setEnd(e.target.value)}
                value={end}
              ></input>
              <br></br>
              <button type="submit" className="btn-create">
                დამატება
              </button>
            </form>
          </div>

          <div className="view-container">
            {books.length > 0 && (
              <>
                <div className="table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>დასახელება</th>
                        <th>ავტორი</th>
                        <th>დასაწყისი</th>
                        <th>დასასრული</th>
                      </tr>
                    </thead>
                    <tbody>
                      <View books={books} deleteBook={deleteBook} />
                    </tbody>
                  </table>
                </div>
                <button className="btn-all-delete" onClick={() => setbooks([])}>
                  ყველა შეხვედრის გასუფთავება
                </button>
              </>
            )}
            {books.length < 1 && <div>ჯერ არ არის შექმნილი შეხვედრა</div>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
