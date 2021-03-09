import React, { useEffect, useState } from "react";

const SnackFormDelete = (props) => {
  const [formState, setFormState] = useState({
    rating: "",
    name: "",
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
          Name
          <input
            name="name"
            value={formState.name}
            onChange={handleChange}
          ></input>
        </label>
        <label>
          Rating
          <input
            name="rating"
            value={formState.rating}
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
