import React from "react";

class SnacksList extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    // new state value
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // Read name and rating state and put in a temp variable which is Obj literal
    const newSnack = { rating: this.state.rating, name: this.state.name };
    // Create a new snacks array variable which is a copy from snacks state via ... operator
    const newSnacks = [...this.state.snacks];
    newSnacks.push(newSnack);
    // Set the state for snacks and pass the new snacks array.
    this.setState({ snacks: newSnacks });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name
            <input
              name="Name"
              value={this.state.name}
              onChange={this.handleChange}
            ></input>
          </label>
          <label>
            Rating
            <input
              name="rating"
              value={this.state.rating}
              onChange={this.handleChange}
            ></input>
          </label>
          <button type="submit">Add Snack</button>
        </form>
        <ul>
          {this.state.snacks.map((el, index) => (
            <li key={index}>
              Name: {el.name} - Rating: {el.rating}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default SnacksList;
