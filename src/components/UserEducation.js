const { Component } = require("react");

class UserEducation extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      title: "",
      date: "",
      savedName: [],
      savedTitle: [],
      savedDate: [],
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
    this.setState({
      savedName: this.state.savedName.concat(this.state.name),
      savedTitle: this.state.savedTitle.concat(this.state.title),
      savedDate: this.state.savedDate.concat(this.state.date),
    });
  };

  render() {
    let self = this;
    var items = this.state.savedName.map(function (item, key) {
      return (
        <div>
          <div>{self.state.savedName[key]}</div>
          <div>{self.state.savedTitle[key]}</div>
          <div>{self.state.savedDate[key]}</div>
        </div>
      );
    });

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
            {items}
          </div>
        </form>
      </div>
    );
  }
}

export default UserEducation;
