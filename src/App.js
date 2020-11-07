import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";

import UserInfo from "./components/UserInfo";
import UserEducation from "./components/UserEducation";
import UserExperience from "./components/UserExperience";

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="App">
        <UserInfo />
        <UserEducation />
        <UserExperience />
      </div>
    );
  }
}

export default App;
