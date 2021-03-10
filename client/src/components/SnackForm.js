import React, { useState } from "react";
import { Button } from "react-bootstrap";

const SnackForm = (props) => {
  const [formState, setFormState] = useState({
    rating: "",
    name: "",
    description: "",
  });

  const handleChange = (e) => {
    // console.log('formState', formState);
    const newState = { ...formState };
    newState[e.target.name] = e.target.value;

    setFormState(newState);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("handleSubmit");
    props.submit(formState.name, formState.rating, formState.description);
  };

  return (
    <div>
      <h2>Add Snack</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
            className="form-control"
            id="inputName"
            name="name"
            value={formState.name}
            onChange={handleChange}
          ></input>
        </div>
        <div className="form-group">
          <label>Rating</label>
          <input
            className="form-control"
            name="rating"
            value={formState.rating}
            onChange={handleChange}
          ></input>
        </div>
        <div className="form-group">
          <label>Description</label>
          <input
            className="form-control"
            name="description"
            value={formState.description}
            onChange={handleChange}
          ></input>
        </div>
        <Button type="submit" className="btn btn-primary">
          Add Snack
        </Button>
      </form>
    </div>
  );
};

export { SnackForm };
