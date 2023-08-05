import axios, {CanceledError} from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "f76e4f8ff37742d199734894120e1cb0"
  }
})

export {CanceledError}