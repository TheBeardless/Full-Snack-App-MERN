import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

const SnackFormEdit = (props) => {
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
    e.preventDefault();
    props.submit(formState);
  };

  return (
    <div>
      <h2>Edit Snack</h2>
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
        <Button type="submit" className="btn btn-warning">
          Edit Snack
        </Button>
      </form>
    </div>
  );
};

export { SnackFormEdit };
