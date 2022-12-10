import React, { useEffect } from "react";
import classes from "./CampaignItem.module.css";
import Card from "../ui/Card";

function CampaignItem(props) {
  async function removeCampaignHandler() {
    fetch(
      "https://campaignsappdemo-default-rtdb.europe-west1.firebasedatabase.app/campaigns/" +
        props.id +
        ".json",
      {
        method: "DELETE",
      }
    ).then(() => {
      props.onRemoveCampaign(props.id);
    });
  }

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.town}</address>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={removeCampaignHandler}>Remove</button>
          <button onClick={props.onEdit}>Edit</button>
        </div>
      </Card>
    </li>
  );
}
export default CampaignItem;
