export const CONTRACT_ADDRESS = "0xa16e6E73b040780044B07F19049b7D30FE823453";
export const ABI = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "Max7UsersCanBeSaved",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "user_id",
        type: "uint256",
      },
    ],
    name: "NewUserSaved",
    type: "event",
  },
  {
    inputs: [],
    name: "getAllUsers",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "userID",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "string",
            name: "lastName",
            type: "string",
          },
          {
            internalType: "string",
            name: "dateOfBirth",
            type: "string",
          },
          {
            internalType: "string",
            name: "color",
            type: "string",
          },
          {
            internalType: "string",
            name: "says",
            type: "string",
          },
          {
            internalType: "string[3]",
            name: "topics",
            type: "string[3]",
          },
        ],
        internalType: "struct UserDB.User[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "last_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "date_of_birth",
        type: "string",
      },
      {
        internalType: "string",
        name: "_color",
        type: "string",
      },
      {
        internalType: "string",
        name: "_says",
        type: "string",
      },
      {
        internalType: "string[3]",
        name: "_topics",
        type: "string[3]",
      },
    ],
    name: "saveUser",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "users",
    outputs: [
      {
        internalType: "uint256",
        name: "userID",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "lastName",
        type: "string",
      },
      {
        internalType: "string",
        name: "dateOfBirth",
        type: "string",
      },
      {
        internalType: "string",
        name: "color",
        type: "string",
      },
      {
        internalType: "string",
        name: "says",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];
