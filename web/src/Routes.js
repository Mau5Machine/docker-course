import React from "react";
import { Switch } from "react-router-dom";
import { RouteWithLayout } from "./components/RoutewithLayout";
import MainLayout from "./layouts/Main";
import { Home as HomeView, Settings as SettingsView } from "./views";

const Routes = () => {
  return (
    <Switch>
      <RouteWithLayout
        component={HomeView}
        exact
        layout={MainLayout}
        path="/"
      />
      <RouteWithLayout
        component={SettingsView}
        exact
        layout={MainLayout}
        path="/settings"
      />
    </Switch>
  );
};

export default Routes;
