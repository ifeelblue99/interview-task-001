import "./header.css";
export default function Header({ connect, connected }) {
  return (
    <header>
      <h3>UserDB</h3>
      <button id="header-connect-btn" onClick={connect}>
        {connected ? "Connected" : "Connect Wallet"}
      </button>
    </header>
  );
}
