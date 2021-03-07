import React, { useState } from "react";

const SnackForm = (props) => {
  // const [title, setTitle] = useState("");
  // const [genre, setGenre] = useState("");
  // const [description, setDescription] = useState("");
  // 1st element - > state Variable
  // 2nd element - > function to change that state variable

  const [formState, setFormState] = useState({
    genre: "",
    title: "",
    description: "",
  });

  // useEffect(() => {
  //   console.log('SnackForm useEffect');
  //   setFormState(props.snack)
  // }, [props.snack])

  // 1st element - > state Variable
  // 2nd element - > function to change that state variable

  const handleChange = (e) => {
    // console.log('formState', formState);
    const newState = { ...formState };
    newState[e.target.name] = e.target.value;
    // Alternate one line for the previous two lines
    // const newState = { ...formState, [e.target.name]: e.target.value }
    // console.log('newState', newState);
    setFormState(newState);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("handleSubmit");
    props.submit(formState.title, formState.genre, formState.description);
  };

  return (
    <div>
      <h2>Add Snack</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Title
          <input
            name="title"
            value={formState.title}
            onChange={handleChange}
          ></input>
        </label>
        <label>
          Genre
          <input
            name="genre"
            value={formState.genre}
            onChange={handleChange}
          ></input>
        </label>
        <label>
          Description
          <input
            name="description"
            value={formState.description}
            onChange={handleChange}
          ></input>
        </label>
        <button type="submit">Add Snack</button>
      </form>
    </div>
  );
};

export { SnackForm };
