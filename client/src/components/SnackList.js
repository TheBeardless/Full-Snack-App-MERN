import React from "react";

const SnackList = (props) => {
  // console.log("props.snacks", props.snacks);
  return (
    <div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Rating</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {props.snacks.map((
            el,
            index // el is snack in SnackContainer const handleEditSnack = (snack) => {
          ) => (
            <tr key={index}>
              <td>{el.name}</td>
              <td>{el.rating}</td>
              <td>{el.description}</td>
              <td>
                <button
                  type="submit"
                  className="btn btn-warning"
                  onClick={() => {
                    props.handleSnackClick(index);
                    // props.handleEditSnack(el);
                  }}
                >
                  Edit
                </button>
                <button
                  type="submit"
                  className="btn btn-danger"
                  onClick={() => {
                    props.handleSnackClick(index);
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export { SnackList };
