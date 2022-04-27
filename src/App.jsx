import "./App.css";
import UserHolder from "./pages/user_holder/UserHolder";
import UserForm from "./pages/user_form/UserForm";
import Header from "./components/header/Header";
import getUsers from "./utils/getUsers.js";
import getContract from "./utils/getContract";
import { useEffect, useState } from "react";
import saveUser from "./utils/saveUser";
import Loader from "./components/loader/Loader";

function App() {
  const [contract, setContract] = useState(null);
  const [isConnected, setIsConnected] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSavingUser, setIsSavingUser] = useState(false);
  const [data, setData] = useState(null);
  const [controller, setController] = useState(0);

  useEffect(() => {
    getContract().then((res) => {
      if (res) {
        setContract(res);
      }
    });
    setIsLoading(true);
    getUsers()
      .then((dt) => {
        setData(dt);
        setIsLoading(false);
        setIsConnected(true);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [controller]);

  function connectWallet() {
    if (data) return;
    setController((prev) => prev + 1);
  }

  function saveNewUser(event, data) {
    event.preventDefault();
    if (data.topics.length !== 3) return alert("Select just 3 topics!");
    setIsSavingUser(true);
    const { name, lastName, dateOfBirth, color, says, topics } = data;
    saveUser(name, lastName, dateOfBirth, color, says, topics).then((res) => {
      if (res && contract) {
        contract.on("NewUserSaved", (id) => {
          setController((prev) => prev + 1);
        });
      }
      setIsSavingUser(false);
    });
  }

  return (
    <div className="app">
      <Header connect={connectWallet} connected={isConnected} />
      <main>
        {!window.ethereum && (
          <div style={{ padding: "2rem" }}>
            You need to download metamask first!
          </div>
        )}
        {isSavingUser && (
          <div
            style={{
              padding: "1.5rem",
              position: "absolute",
              borderRadius: "5px",
              backgroundColor: "#000",
              marginTop: "1rem",
              marginLeft: "1rem",
              fontWeight: "bold",
              color: "steelblue",
            }}
          >
            Please confirm the transaction
          </div>
        )}

        {data && <UserHolder users={data} />}
        {isLoading && <Loader />}
        <UserForm handleClick={saveNewUser} />
      </main>
    </div>
  );
}
export default App;
