import React, { useState } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const [Username, setUsername] = useState("");
  const [Age, setAge] = useState("");
  const [Error, setError] = useState();
  const addUserHandler = (event) => {
    event.preventDefault();
    if (Username.trim().length === 0 || Age.trim().length === 0) {
        setError({
          title: "Invalid input",
          message: "Please enter a valid name and age (non-empty values)",
        });
        return;
      }

     if(+Age < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (> 0)",
      });
        return;
        }
    // we pass the entered values to the addUserHandler function in the App.js file.
    props.onAddUser(Username, Age);
    // console.log(Username, Age);
    setUsername("");
    setAge("");
  };

  const UsernameChangeHandler = (event) => {
    setUsername(event.target.value);
  };

  const AgeChangeHandler = (event) => {
    setAge(event.target.value);
  };

  const errorHandler = () => {
    setError(null);
    };

  return (
    <div>
       {/* we use the ErrorModal component to display an error message if the user enters invalid input */}
     {Error && <ErrorModal title={Error.title} message={Error.message} onConfirm={errorHandler} />}
      {/* // here we used 2 classes, one from the Card component and one from the AddUser component */}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            onChange={UsernameChangeHandler}
            value={Username}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            onChange={AgeChangeHandler}
            value={Age}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};
export default AddUser;
