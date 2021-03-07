import React from "react";

class SnacksList extends React.Component {
  constructor() {
    super();
    this.state = {
      snacks: [
        { title: "X-men", genre: "Fantasy" },
        { title: "Start Trek", genre: "Science Fiction" },
      ],
      title: "",
      genre: "",
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    // new state value
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // Read title and genre state and put in a temp variable which is Obj literal
    const newSnack = { genre: this.state.genre, title: this.state.title };
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
            Title
            <input
              name="title"
              value={this.state.title}
              onChange={this.handleChange}
            ></input>
          </label>
          <label>
            Genre
            <input
              name="genre"
              value={this.state.genre}
              onChange={this.handleChange}
            ></input>
          </label>
          <button type="submit">Add Snack</button>
        </form>
        <ul>
          {this.state.snacks.map((el, index) => (
            <li key={index}>
              Title: {el.title} - Genre: {el.genre}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default SnacksList;
