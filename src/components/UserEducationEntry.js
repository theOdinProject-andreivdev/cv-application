const { useState } = require("react");

const UserEducationEntry = (props) => {
  const [name, changeName] = useState(props.name);
  const [title, changeTitle] = useState(props.title);
  const [date, changeDate] = useState(props.date);
  const [visible, changeVisible] = useState(true);

  const deleteEntry = (e) => {
    changeVisible(false);
  };
  if (visible) {
    return (
      <div>
        <div class="float-left">
          Graduated {title} at {name} in {date}
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
  }
  return <div></div>;
};

export default UserEducationEntry;
