import React from "react";

const SnackList = (props) => {
  // console.log("props.snacks", props.snacks);
  return (
    <div>
      <table className="table table-striped">
        <thread>
          <tr>
            <th>Name</th>
            <th>Rating</th>
            <th>Description</th>
          </tr>
        </thread>
        <tbody>
          {props.snacks.map((e, index) => (
            <tr key={index} onClick={() => props.handleClick(index)}>
              <td>{e.name}</td>
              <td>{e.rating}</td>
              <td>{e.description}</td>
              <td>
                <button
                  type="submit"
                  className="btn btn-warning"
                  onClick={() => {
                    props.handleEditSnack(e);
                  }}
                >
                  Edit
                </button>
                <button
                  type="submit"
                  className="btn btn-danger"
                  onClick={() => {
                    props.handleDeleteSnack(e._id);
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
