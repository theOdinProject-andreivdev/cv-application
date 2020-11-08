const { useState } = require("react");

const UserExperienceEntry = (props) => {
  const [name, changeName] = useState(props.name);
  const [position, changePosition] = useState(props.position);
  const [tasks, changeTasks] = useState(props.tasks);
  const [datestarted, changeDateStarted] = useState(props.datestarted);
  const [dateended, changeDateEnded] = useState(props.dateended);
  const [visible, changeVisible] = useState(true);

  const deleteEntry = () => {
    changeVisible(false);
  };

  if (visible) {
    return (
      <div>
        <div class="float-left">
          Worked at {name} as {position} doing {tasks} between {datestarted} and{" "}
          {dateended}
        </div>
        <button
          onClick={deleteEntry}
          type="button"
          class="btn btn-danger float-right mr-3 mt-1"
        >
          Delete
        </button>
      </div>
    );
  } else return <div></div>;
};

export default UserExperienceEntry;
