import axios from "axios";

const baseUrl = "http://loaclhost:3001/";

const getAll = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

export default { getAll };