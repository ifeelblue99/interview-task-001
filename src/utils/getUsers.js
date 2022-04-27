import { ABI, CONTRACT_ADDRESS } from "../utils/contract.js";
import { ethers } from "ethers";
import getSigner from "./getSigner.js";

export default async function getUsers() {
  const signer = await getSigner();
  const contract = new ethers.Contract(CONTRACT_ADDRESS, ABI, signer);

  const users = await contract.getAllUsers();
  return users;
}
