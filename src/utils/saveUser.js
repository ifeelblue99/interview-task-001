import { ABI, CONTRACT_ADDRESS } from "../utils/contract.js";
import { ethers } from "ethers";
import getSigner from "./getSigner.js";

export default async function saveUser(
  name,
  lastName,
  dateOfBirth,
  color,
  says,
  topics
) {
  const signer = await getSigner();
  const contract = new ethers.Contract(CONTRACT_ADDRESS, ABI, signer);

  try {
    await contract.saveUser(name, lastName, dateOfBirth, color, says, topics);
    return true;
  } catch (error) {
    return false;
  }
}
