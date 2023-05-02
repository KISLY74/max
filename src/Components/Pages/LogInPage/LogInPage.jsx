import Navigation from "Components/Navigation/Navigation";
import { useState, useContext, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { login } from "Api/ApiRequest";
import { observer } from "mobx-react-lite";
import { Context } from "index";
import "./LogInPage.css";
import ValidInput from "Components/ValidInput/ValidInput";

const LogInPage = observer(() => {
	const { user } = useContext(Context);
	const history = useNavigate();

	async function auth(e) {
		e.preventDefault();

		await login(user.userAuth.email, user.userAuth.password)
			.then(x => {
				user.setIsAuth(true);
				localStorage.setItem("token", x.data.token);
				localStorage.setItem("email", x.data.email);
				localStorage.setItem('userStore', JSON.stringify(user));
				history("/");
			})
			.catch(x => console.log(x));
		//todo сделай нормально
	}

	return <>
		<Navigation />
		<div className="back-grey">
			<div className="block-center ">
				<Form>
					<Form.Group className="mb-3">
						<h3 className="text-center">Вход</h3>
					</Form.Group>
					<ValidInput
						title="Email адрес"
						placeholder="Введите email"
						type="email" />
					<ValidInput
						title="Введите пароль"
						placeholder="Введите пароль" type="password" />
					<Form.Group className="d-grid">
						<Button variant="primary" type="submit" onClick={(e) => auth(e)}>Войти</Button>
					</Form.Group>
				</Form>
			</div>
		</div>
	</>
})

export default LogInPage;