import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Layout from "./components/layout/Layout";
import NewCampaign from "./pages/NewCampaign";
import AllCampaigns from "./pages/AllCampaigns";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <AllCampaigns />
        </Route>
        <Route path="/new-campaign">
          <NewCampaign />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
