import axios from "axios"
const baseUrl = "https://localhost:5000";

export const login = async (email, password) => {
	const data = await axios.post(baseUrl + '/account/login', { email, password });
	console.log(data);
	return data;
}

export const reservation = async (email, date, people) => {
	const data = await axios.post(baseUrl + '/reservation/add', { email, date, people });
	console.log(data);
	return data;
}

//! Для check jwt
// const config = {
// 	headers: {
// 		'Authorization': `Bearer ${localStorage.getItem('token')}`
// 	}
// }