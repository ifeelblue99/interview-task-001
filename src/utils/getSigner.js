import { ethers } from "ethers";
export default async function connectWallet() {
  if (!window.ethereum) return alert("You need metamask!");
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  try {
    await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();
    return signer;
  } catch (error) {
    alert("You need metamask!");
    return "error";
  }
}
