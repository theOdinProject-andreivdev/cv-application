const { Component } = require("react");

class UserInfo extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      email: "",
      phone: "",
      savedName: "",
      savedEmail: "",
      savedPhone: "",
    };
  }

  changeName = (e) => {
    this.setState({ name: e.target.value });
  };

  changeEmail = (e) => {
    this.setState({ email: e.target.value });
  };

  changePhone = (e) => {
    this.setState({ phone: e.target.value });
  };

  save = (e) => {
    e.preventDefault();
    this.setState({
      savedName: this.state.name,
      savedEmail: this.state.email,
      savedPhone: this.state.phone,
    });
  };

  render() {
    return (
      <div>
        <div style={{ paddingTop: "10px" }}>Your info</div>
        <form onSubmit={this.save}>
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
              placeholder="Your name"
              onChange={this.changeName}
            ></input>
            <input
              style={{ margin: "20px" }}
              type="email"
              placeholder="Your email"
              onChange={this.changeEmail}
            ></input>
            <input
              style={{ margin: "20px" }}
              type="tel"
              pattern="[0-9]{10}"
              placeholder="Your phone number"
              onChange={this.changePhone}
            ></input>
            <input type="submit" value="Save"></input>
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
            <div>Name: {this.state.savedName}</div>
            <div>Email: {this.state.savedEmail}</div>
            <div>Phone Number: {this.state.savedPhone}</div>
          </div>
        </form>
      </div>
    );
  }
}

export default UserInfo;
