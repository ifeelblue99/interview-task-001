import { ABI, CONTRACT_ADDRESS } from "../utils/contract.js";
import { ethers } from "ethers";
import getSigner from "./getSigner.js";

export default async function getContract() {
  try {
    const signer = await getSigner();
    const contract = new ethers.Contract(CONTRACT_ADDRESS, ABI, signer);
    return contract;
  } catch (error) {
    console.log(error);
  }
}
