import mongoose from "mongoose";

const userIds = [
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
];

export const users = [
  {
    _id: userIds[0],
    F_name: "Om",
    L_name: "Hinge",
    email: "omhinge@gmail.com",
    password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    picture_path: "p11.jpeg",
    friends: [],
    location: "San Fran, CA",
    occupation: "Software Engineer",
    profile_views: 14561,
    impressions: 888822,
    createdAt: 1115211422,
    updatedAt: 1115211422,
    __v: 0,
  },
  {
    _id: userIds[1],
    F_name: "Jay",
    L_name: "Gupte",
    email: "jaygupte@gmail.com",
    password: "$!FEAS@!O)_IDJda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    _p: "p3.jpeg",
    friends: [],
    location: "New York, CA",
    occupation: "Degenerate",
    profile_views: 12351,
    impressions: 55555,
    createdAt: 1595589072,
    updatedAt: 1595589072,
    __v: 0,
  },
  {
    _id: userIds[2],
    F_name: "Rishika",
    L_name: "Jain",
    email: "rishikajain@gmail.com",
    password: "da39a3ee5e6b4b0d3255bfef95601890afd80709",
    _p: "p4.jpeg",
    friends: [],
    location: "Canada, CA",
    occupation: "Data Scientist Hacker",
    profile_views: 45468,
    impressions: 19986,
    createdAt: 1288090662,
    updatedAt: 1288090662,
    __v: 0,
  },
];

export const posts = [
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[1],
    F_name: "Jay",
    L_name: "Gupte",
    location: "New York, CA",
    description: "Some really long random description",
    _p: "post1.jpeg",
    user_p: "p3.jpeg",
    likes: new Map([
      [userIds[0], true],
      [userIds[2], true],
    ]),
    comments: [
      "random comment",
      "another random comment",
      "yet another random comment",
    ],
  },
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[2],
    F_name: "Rishika",
    L_name: "Jain",
    location: "Canada, CA",
    description:
      "Another really long random description. This one is longer than the previous one.",
    _p: "post2.jpeg",
    user_p: "p4.jpeg",
    likes: new Map([
      [userIds[1], true],
    ]),
    comments: [
      "one more random comment",
      "and another random comment",
      "no more random comments",
    ],
  },
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[0],
    F_name: "Om",
    L_name: "Hinge",
    location: "San Fran, CA",
    description:
      "This is the last really long random description. This one is longer than the previous one.",
    _p: "post3.jpeg",
    user_p: "p11.jpeg",
    likes: new Map([
      [userIds[1], true],
    ]),
    comments: [
      "one more random comment",
      "I lied, one more random comment",
      "I lied again, one more random comment",
      "Why am I doing this?",
    ],
  },
];

