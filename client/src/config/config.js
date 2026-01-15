import { io } from "socket.io-client";

// const URL = "http://localhost:4000";
const URL = "https://video-call-7ecm.onrender.com";

export const socket = io(URL);
export const navbarBrand = "YourVideoShare";
