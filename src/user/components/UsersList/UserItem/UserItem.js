import React from "react";
import { Link } from "react-router-dom";

import classes from "./UserItem.module.css";
import Card from "../../../../shared/components/UI/Card";
import Avatar from "../../../../shared/components/UI/Avatar";

const UserItem = (props) => {
  return (
    <li className={classes.UserItem}>
      <Card className={classes.UserItem__content}>
        <Link to={`/${props.id}/places`}>
          <div className={classes.UserItem__image}>
            <Avatar image={props.image} alt={props.name} />
          </div>
          <div className={classes.UserItem__info}>
            <h2>{props.name}</h2>
            <h3>
              {props.placeCount} {props.placeCount === 1 ? "Place" : "Places"}
            </h3>
          </div>
        </Link>
      </Card>
    </li>
  );
};

export default UserItem;
