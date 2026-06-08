import axios from "axios";

const BASE_URL = "http://4.224.186.213/evaluation-service";

export async function getDepots() {
    const response = await axios.get(`${BASE_URL}/depots`);
    return response.data;
}