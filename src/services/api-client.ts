import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "9830bc3908f8491dab2dcb7d25e87b43",
  },
});
