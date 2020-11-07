import UserEducationEntry from "./UserEducationEntry";

const { Component } = require("react");

class UserEducation extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      title: "",
      date: "",
      entries: [
        {
          name: "SomeUniv",
          title: "nerdProgrammer",
          date: "21/12/2012",
        },
      ],
    };
  }

  changeName = (e) => {
    this.setState({
      name: e.target.value,
    });
  };
  changeTitle = (e) => {
    this.setState({
      title: e.target.value,
    });
  };
  changeDate = (e) => {
    this.setState({
      date: e.target.value,
    });
  };

  add = (e) => {
    e.preventDefault();
    let obj = new Object();
    obj = {
      name: this.state.name,
      title: this.state.title,
      date: this.state.date,
    };
    this.setState({
      entries: this.state.entries.concat(obj),
    });
  };

  render() {
    return (
      <div>
        <div style={{ paddingTop: "10px" }}>Your education</div>
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
              placeholder="School name"
              onChange={this.changeName}
            ></input>
            <input
              style={{ margin: "20px" }}
              type="text"
              placeholder="Your title"
              onChange={this.changeTitle}
            ></input>
            <input
              style={{ margin: "20px" }}
              type="date"
              placeholder="Graduation date"
              onChange={this.changeDate}
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
                  <UserEducationEntry
                    name={entry.name}
                    title={entry.title}
                    date={entry.date}
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

export default UserEducation;
