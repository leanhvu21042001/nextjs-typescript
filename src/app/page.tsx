import HomePage from "./home/home-page";
import ReduxProvider from "./redux-provider";

export default function Page() {
  return (
    <ReduxProvider>
      <HomePage />
    </ReduxProvider>
  );
}
