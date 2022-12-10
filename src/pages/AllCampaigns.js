import React from "react";
import CampaignList from "../components/campaigns/CampaignList";
import { useState, useEffect } from "react";

function AllCampaigns() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedCampaigns, setLoadedCampaigns] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://campaignsappdemo-default-rtdb.europe-west1.firebasedatabase.app/campaigns.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const campaigns = [];
        for (const key in data) {
          const campaign = {
            id: key,
            ...data[key],
          };
          campaigns.push(campaign);
        }

        setIsLoading(false);
        setLoadedCampaigns(campaigns);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }
  const style = {
    textAlign: "center",
  };
  return (
    <section>
      <h1 style={style}>
        {loadedCampaigns ? "All Campaigns" : "No Campaigns Found"}
      </h1>
      <CampaignList campaigns={loadedCampaigns} />
    </section>
  );
}

export default AllCampaigns;
