const { Component, useState } = require("react");

const UserInfo = () => {
  const [name, changeName] = useState("");
  const [email, changeEmail] = useState("");
  const [phone, changePhone] = useState("");
  const [savedName, changeSavedName] = useState("");
  const [savedEmail, changeSavedEmail] = useState("");
  const [savedPhone, changeSavedPhone] = useState("");

  const save = (e) => {
    e.preventDefault();
    changeSavedName(name);
    changeSavedEmail(email);
    changeSavedPhone(phone);
  };

  return (
    <div>
      <div style={{ paddingTop: "10px" }}>Your info</div>
      <form onSubmit={save}>
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
            onChange={(e) => changeName(e.target.value)}
          ></input>
          <input
            style={{ margin: "20px" }}
            type="email"
            placeholder="Your email"
            onChange={(e) => changeEmail(e.target.value)}
          ></input>
          <input
            style={{ margin: "20px" }}
            type="tel"
            pattern="[0-9]{10}"
            placeholder="Your phone number"
            onChange={(e) => changePhone(e.target.value)}
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
          <div>Name: {savedName}</div>
          <div>Email: {savedEmail}</div>
          <div>Phone Number: {savedPhone}</div>
        </div>
      </form>
    </div>
  );
};

export default UserInfo;
