import React, { useEffect, useState } from "react";

const SnackFormDelete = (props) => {
  const [formState, setFormState] = useState({
    genre: "",
    title: "",
    description: "",
  });

  useEffect(() => {
    setFormState(props.snack);
  }, [props.snack]);

  const handleChange = (e) => {
    const newState = { ...formState };
    newState[e.target.name] = e.target.value;
    setFormState(newState);
  };

  const handleSubmit = (e) => {
    props.submit(formState);
  };

  return (
    <div>
      <h2>Delete Snack</h2>
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
        <button type="submit">Delete Snack</button>
      </form>
    </div>
  );
};

export { SnackFormDelete };
