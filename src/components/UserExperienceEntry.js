const { Component } = require("react");

class UserExperienceEntry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      position: this.props.position,
      tasks: this.props.tasks,
      datestarted: this.props.datestarted,
      dateended: this.props.dateended,
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
            Worked at {this.state.name} as {this.state.position} doing{" "}
            {this.state.tasks} between {this.state.datestarted} and{" "}
            {this.state.dateended}
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
    } else return <div></div>;
  }
}

export default UserExperienceEntry;
