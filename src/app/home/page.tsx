"use client";

import ReduxProvider from "../redux-provider";
import HomePage from "./home-page";

const page = () => {
  return (
    <ReduxProvider>
      <HomePage />
    </ReduxProvider>
  );
};

export default page;
