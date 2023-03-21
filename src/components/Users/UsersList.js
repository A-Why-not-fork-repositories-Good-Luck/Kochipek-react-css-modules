import React from "react";
import Card from "../UI/Card";
import classes from "./Users.module.css";

const UserList = (props) => {
    return (
        <Card className={classes.users}>
    <ul>
        {props.users.map((user) => (
            <li key={user.id}>
                {/* // we use the user.name and user.age properties to display the name and age of each user */}
                {user.name} ({user.age} years old)
            </li>
        ))}
    </ul>
    </Card>
    )};

    export default UserList;