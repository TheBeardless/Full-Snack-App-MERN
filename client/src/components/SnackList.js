import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SnackList = (props) => {
  // console.log("props.snacks", props.snacks);
  return (
    <div>
      <table className="table table-hover">
        <thead className="thead-dark">
          <tr>
            <th>Name</th>
            <th>Rating</th>
            <th>Description</th>
            <th className="text-center align-middle">
              <Link to="/snack/add">
                <Button className="btn btn-light">
                  <FontAwesomeIcon icon="plus-square" /> Add Snack
                </Button>
              </Link>
            </th>
          </tr>
        </thead>
        <tbody>
          {props.snacks.map((el, index) => (
            <tr key={index}>
              <td>{el.name}</td>
              <td>{el.rating}</td>
              <td>{el.description}</td>
              <td className="text-center">
                <Link to="/snack/edit">
                  <Button
                    className="btn btn-warning"
                    onClick={() => {
                      props.handleSnackClick(index);
                      // props.handleEditSnack(el);
                    }}
                  >
                    <FontAwesomeIcon icon="edit" />
                  </Button>
                </Link>{" "}
                <Link to="/snack/delete">
                  <Button
                    className="btn btn-danger"
                    onClick={() => {
                      props.handleSnackClick(index);
                    }}
                  >
                    <FontAwesomeIcon icon="trash-alt" />
                  </Button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export { SnackList };
