import UserEducationEntry from "./UserEducationEntry";

const { useState } = require("react");

const UserEducation = () => {
  const [name, changeName] = useState("");
  const [title, changeTitle] = useState("");
  const [date, changeDate] = useState("");
  const [entries, changeEntries] = useState([
    {
      name: "SomeUniv",
      title: "nerdProgrammer",
      date: "21/12/2012",
    },
  ]);

  const add = (e) => {
    e.preventDefault();
    changeEntries(entries.concat({ name: name, title: title, date: date }));
  };

  return (
    <div>
      <div style={{ paddingTop: "10px" }}>Your education</div>
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
            placeholder="School name"
            onChange={(e) => changeName(e.target.value)}
          ></input>
          <input
            style={{ margin: "20px" }}
            type="text"
            placeholder="Your title"
            onChange={(e) => changeTitle(e.target.value)}
          ></input>
          <input
            style={{ margin: "20px" }}
            type="date"
            placeholder="Graduation date"
            onChange={(e) => changeDate(e.target.value)}
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
};

export default UserEducation;
