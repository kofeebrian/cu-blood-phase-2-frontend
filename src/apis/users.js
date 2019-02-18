import Axios from "axios";

export default Axios.create({
	baseURL: "https://api-dev.fives.cloud/v0",
	headers: { Authorization: "keyboard cat" }
});
