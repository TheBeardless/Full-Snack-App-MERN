import React, { useState } from "react";

const SnackForm = (props) => {
  const [formState, setFormState] = useState({
    rating: "",
    name: "",
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
    props.submit(formState.name, formState.rating, formState.description);
  };

  return (
    <div>
      <h2>Add Snack</h2>
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
        <button type="submit">Add Snack</button>
      </form>
    </div>
  );
};

export { SnackForm };
