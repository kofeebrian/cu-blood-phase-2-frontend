import Axios from "axios";

export default Axios.create({
	baseURL: "https://cublood.clubs.chula.ac.th/api-v0",
	headers: { Authorization: "keyboard cat" }
});
