import React from "react";
import classes from "./CampaignList.module.css";
import CampaignItem from "./CampaignItem";

function CampaignList(props) {
  return (
    <ul className={classes.list}>
      {props.campaigns.map((campaign) => (
        <CampaignItem
          key={campaign.id}
          id={campaign.id}
          image={campaign.image}
          title={campaign.title}
          address={campaign.address}
          description={campaign.description}
          town={campaign.town}
        />
      ))}
    </ul>
  );
}

export default CampaignList;
