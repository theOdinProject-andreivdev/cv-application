import UserEducationEntry from "./UserEducationEntry";
import UserExperienceEntry from "./UserExperienceEntry";

const { Component } = require("react");

class UserExperience extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      position: "",
      tasks: "",
      datestarted: "",
      dateended: "",
      entries: [
        {
          name: "SOMEcompany",
          position: "bestSWNerd",
          tasks: "awesome stuff and more",
          datestarted: "21/12/2012",
          dateended: "21/12/2015",
        },
      ],
    };
  }

  changeName = (e) => {
    this.setState({
      name: e.target.value,
    });
  };
  changePosition = (e) => {
    this.setState({
      position: e.target.value,
    });
  };
  changeTasks = (e) => {
    this.setState({
      tasks: e.target.value,
    });
  };
  changeDateStarted = (e) => {
    this.setState({
      datestarted: e.target.value,
    });
  };
  changeDateEnded = (e) => {
    this.setState({
      dateended: e.target.value,
    });
  };

  add = (e) => {
    e.preventDefault();
    let obj = new Object();
    obj = {
      name: this.state.name,
      position: this.state.position,
      tasks: this.state.tasks,
      datestarted: this.state.datestarted,
      dateended: this.state.dateended,
    };
    this.setState({
      entries: this.state.entries.concat(obj),
    });
  };

  render() {
    return (
      <div>
        <div style={{ paddingTop: "10px" }}>Your work experience</div>
        <form onSubmit={this.add}>
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <input
              style={{ margin: "20px" }}
              type="text"
              placeholder="Company name"
              onChange={this.changeName}
            ></input>
            <input
              style={{ margin: "20px" }}
              type="text"
              placeholder="Position"
              onChange={this.changePosition}
            ></input>
            <input
              style={{ margin: "20px" }}
              type="text"
              placeholder="Main tasks"
              onChange={this.changeTasks}
            ></input>
            <input
              style={{ margin: "20px" }}
              type="date"
              placeholder="Date start"
              onChange={this.changeDateStarted}
            ></input>
            <input
              style={{ margin: "20px" }}
              type="date"
              placeholder="Date end"
              onChange={this.changeDateEnded}
            ></input>
            <input type="submit" value="Add"></input>
          </div>

          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
              marginLeft: "10px",
            }}
          >
            {this.state.entries.map((entry) => {
              return (
                <div style={{ width: "100%" }}>
                  <UserExperienceEntry
                    name={entry.name}
                    position={entry.position}
                    tasks={entry.tasks}
                    datestarted={entry.datestarted}
                    dateended={entry.dateended}
                  />
                </div>
              );
            })}
          </div>
        </form>
      </div>
    );
  }
}

export default UserExperience;
