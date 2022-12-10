import React from "react";
import NewCampaignForm from "../components/campaigns/NewCampaignForm";
//import { useNavigate } from "react-router-dom";

function NewCampaign() {
  //const navigate = useNavigate();
  function onAddCampaignHandler(campaignData) {
    fetch(
      "https://campaignsappdemo-default-rtdb.europe-west1.firebasedatabase.app/campaigns.json",
      {
        method: "POST",
        body: JSON.stringify(campaignData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
      //navigate("/");
    });
  }

  const style = {
    textAlign: "center",
  };
  return (
    <section>
      <h1 style={style}>Add New Campaign</h1>
      <NewCampaignForm onAddCampaign={onAddCampaignHandler} />
    </section>
  );
}

export default NewCampaign;
