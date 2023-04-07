const Form = ({ input, setInput, meeting, setMeeting, id }) => {
  const onInputChange = (e) => {
    setInput(e.target.value);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    setMeeting([...meeting, { id: id, title: input, completed: false }]);
    setInput("");
  };

  return (
    <form onSubmit={onFormSubmit}>
      <input
        type="text"
        placeholder="Enter a meeting Name"
        value={input}
        required
        onChange={onInputChange}
        id={id}
      />
      <button>Add Meeting</button>
    </form>
  );
};

export default Form;
