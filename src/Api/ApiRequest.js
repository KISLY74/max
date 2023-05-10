import axios from "axios"
const baseUrl = "https://localhost:5000";

export const regin = async (data) => {
	const res = await axios.post(baseUrl + '/account/registration', data);
	console.log(res);
	localStorage.setItem('token', res.data.token)
	return res.data;
}

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

export const order = async (numberTable, email, orders) => {
	const data = await axios.post(baseUrl + '/order/add', { numberTable, email, orders });
	console.log(data);
	return data;
}

export const getMenu = async () => {
	const data = await axios.get(baseUrl + '/menu/getMenu');
	console.log(data);
	return data;
}

//! Для check jwt
// const config = {
// 	headers: {
// 		'Authorization': `Bearer ${localStorage.getItem('token')}`
// 	}
// }