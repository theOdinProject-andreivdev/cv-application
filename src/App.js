import logo from "./logo.svg";
import "./App.css";

import UserInfo from "./components/UserInfo";
import UserEducation from "./components/UserEducation";
import UserExperience from "./components/UserExperience";

const App = () => {
  return (
    <div className="App">
      <UserInfo />
      <UserEducation />
      <UserExperience />
    </div>
  );
};

export default App;
