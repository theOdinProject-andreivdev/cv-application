const { Component } = require("react");

class UserEducationEntry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      title: this.props.title,
      date: this.props.date,
      visible: true,
    };
  }

  delete = (e) => {
    this.setState({
      visible: false,
    });
  };

  render() {
    if (this.state.visible) {
      return (
        <div>
          <div class="float-left">
            Graduated {this.state.title} at {this.state.name} in{" "}
            {this.state.date}
          </div>
          <button
            onClick={this.delete}
            type="button"
            class="btn btn-danger float-right mr-3 mt-1"
          >
            Delete
          </button>
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}

export default UserEducationEntry;