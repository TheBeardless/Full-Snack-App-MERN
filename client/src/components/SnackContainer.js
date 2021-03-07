import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import { SnackForm } from "./SnackForm";
import { SnackFormEdit } from "./SnackFormEdit";
import { List } from "./List";
import { SnackFormDelete } from "./SnackFormDelete";

const FunctionalSnackContainer = () => {
  // Initialise state variables using hooks
  const [snacksList, setSnacksList] = useState([]);

  // State to store snack being selected to edit
  const [snackEdit, setSnackEdit] = useState({
    genre: "",
    title: "",
    description: "",
  });

  // State to store snack being selected to deleted
  const [snackDelete, setSnackDelete] = useState({
    genre: "",
    title: "",
    description: "",
  });

  // This function runs when you click a snack from the snack list
  const handleSnackClick = (snackIndex) => {
    const snack = snacksList[snackIndex];

    /* 
    You set both the snackEdit and SnackDelete as the selected snack
    so both forms are pre-loaded with the contents of the snack that will be deleted 
    */
    setSnackEdit(snack);
    setSnackDelete(snack);
  };

  const handleEditSnack = (snack) => {
    const foundSnack = snacksList.findIndex((snackEl) => {
      return snackEl._id === snack._id;
    });
    const newSnacks = [...snacksList];
    newSnacks[foundSnack] = snack;

    // Update snack list by calling the setSnacksList function
    setSnacksList(newSnacks);
    fetch(`http://localhost:3000/snacks/${snack._id}`, {
      //TODO
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(snack),
    });
  };

  const handleDeleteSnack = (snack) => {
    const foundSnack = snacksList.findIndex((snackEl) => {
      return snackEl._id === snack._id;
    });

    const newSnacks = [...snacksList];
    newSnacks[foundSnack] = snack;

    // Update snack list by calling the setSnacksList function
    setSnacksList(newSnacks);
    fetch(`http://localhost:3000/snacks/${snack._id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  const handleSnackFormSubmit = (title, genre, description) => {
    // Read title and genre state and put in a temp variable which is Obj literal
    const newSnack = { genre: genre, title: title, description: description };

    const newSnacks = [...snacksList];
    newSnacks.push(newSnack);

    // Update snack list by calling the setSnacksList function
    setSnacksList(newSnacks);

    fetch("http://localhost:3000/all", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newSnack),
    });
  };

  useEffect(() => {
    fetch("http://localhost:9000/api/v1/movies", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((snackData) => {
        // call to set state
        setSnacksList(snackData.data);
      });
  }, [snacksList]);

  return (
    <Router>
      <div>
        <h1>Snacks</h1>
        <List snacks={snacksList} handleClick={handleSnackClick} />

        <Link to="/snack/add">Add Snack</Link>
        <Link to="/snack/edit">Edit Snack</Link>
        <Link to="/snack/delete">Delete Snack</Link>
        <Switch>
          <Route path="/snack/add">
            <SnackForm submit={handleSnackFormSubmit} />
          </Route>
          <Route path="/snack/edit">
            <SnackFormEdit submit={handleEditSnack} snack={snackEdit} />
          </Route>
          <Route path="/snack/delete">
            <SnackFormDelete submit={handleDeleteSnack} snack={snackDelete} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export { FunctionalSnackContainer };
