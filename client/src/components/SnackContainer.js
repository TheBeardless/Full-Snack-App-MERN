import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import { SnackForm } from "./SnackForm";
import { SnackFormEdit } from "./SnackFormEdit";
import { SnackList } from "./SnackList";
import { SnackFormDelete } from "./SnackFormDelete";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SnackContainer = () => {
  const [snackList, setSnackList] = useState([]);
  const [snackEdit, setSnackEdit] = useState({
    rating: "",
    name: "",
    description: "",
  });
  const [snackDelete, setSnackDelete] = useState({
    rating: "",
    name: "",
    description: "",
  });

  // This function runs when you click a snack from the snack list
  const handleSnackClick = (snackIndex) => {
    console.log("index", snackIndex);
    const snack = snackList[snackIndex];
    console.log(snack);

    setSnackEdit(snack);
    setSnackDelete(snack);
  };

  const handleEditSnack = (snack) => {
    console.log("snack to edit", snack);
    const foundSnack = snackList.findIndex((snackEle) => {
      return snackEle._id === snack._id;
    });
    const newSnacks = [...snackList];
    newSnacks[foundSnack] = snack;
    console.log("newSnacks: ", newSnacks);
    setSnackList(newSnacks);

    // Update snack list by calling the setSnacksList function
    fetch(`http://localhost:9000/snacks/${snack._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(snack),
    });
  };

  const handleDeleteSnack = (snack) => {
    console.log("snack to delete", snack);
    const foundSnack = snackList.findIndex((snackEle) => {
      return snackEle._id === snack._id;
    });

    const newSnacks = [...snackList];
    newSnacks[foundSnack] = snack;
    console.log("newSnacks: ", newSnacks);
    setSnackList(newSnacks);

    // Update snack list by calling the setSnacksList function
    fetch(`http://localhost:9000/snacks/${snack._id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(snack),
    }).then((response) => {});
  };

  const handleSnackFormSubmit = (name, rating, description) => {
    // Read name and rating state and put in a temp variable which is Obj literal
    const newSnack = { name: name, rating: rating, description: description };

    const newSnacks = [...snackList];
    newSnacks.push(newSnack);

    // Update snack list by calling the setSnacksList function
    setSnackList(newSnacks);

    fetch("http://localhost:9000/snacks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newSnack),
    }).then((response) => {});
  };

  useEffect(() => {
    fetch("http://localhost:9000/snacks", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        // call to set state
        setSnackList(response.data);
      });
  }, []);

  return (
    <Router>
      <div className="container">
        <h1 className="heading text-center">
          <strong>
            <FontAwesomeIcon icon="hamburger" /> FULL S
            <span style={{ textDecorationLine: "line-through" }}>t</span>NACK
            APP <FontAwesomeIcon icon="pizza-slice" />
          </strong>
        </h1>
        <SnackList snacks={snackList} handleSnackClick={handleSnackClick} />
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

export { SnackContainer };
