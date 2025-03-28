import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "edd977c7e185419e9199c368466097c3",
  },
});
