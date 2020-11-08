import UserEducationEntry from "./UserEducationEntry";
import UserExperienceEntry from "./UserExperienceEntry";

const { Component, useState } = require("react");

const UserExperience = () => {
  const [name, changeName] = useState("");
  const [position, changePosition] = useState("");
  const [tasks, changeTasks] = useState("");
  const [datestarted, changeDateStarted] = useState("");
  const [dateended, changeDateEnded] = useState("");
  const [entries, changeEntries] = useState([
    {
      name: "SOMEcompany",
      position: "bestSWNerd",
      tasks: "awesome stuff and more",
      datestarted: "21/12/2012",
      dateended: "21/12/2015",
    },
  ]);

  const add = (e) => {
    e.preventDefault();
    changeEntries(
      entries.concat({
        name: name,
        position: position,
        tasks: tasks,
        datestarted: datestarted,
        dateended: dateended,
      })
    );
  };

  return (
    <div>
      <div style={{ paddingTop: "10px" }}>Your work experience</div>
      <form onSubmit={add}>
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
            onChange={(e) => changeName(e.target.value)}
          ></input>
          <input
            style={{ margin: "20px" }}
            type="text"
            placeholder="Position"
            onChange={(e) => changePosition(e.target.value)}
          ></input>
          <input
            style={{ margin: "20px" }}
            type="text"
            placeholder="Main tasks"
            onChange={(e) => changeTasks(e.target.value)}
          ></input>
          <input
            style={{ margin: "20px" }}
            type="date"
            placeholder="Date start"
            onChange={(e) => changeDateStarted(e.target.value)}
          ></input>
          <input
            style={{ margin: "20px" }}
            type="date"
            placeholder="Date end"
            onChange={(e) => changeDateEnded(e.target.value)}
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
          {entries.map((entry) => {
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
};

export default UserExperience;
