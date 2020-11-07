const { Component } = require("react");

class UserEducationEntry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      title: this.props.title,
      date: this.props.date,
    };
  }

  render() {
    return <div>something</div>;
  }
}

export default UserEducationEntry;
