import Navigation from "Components/Navigation/Navigation";
import { Button, Form } from "react-bootstrap";
import "./RegistrationPage.css"
import ValidInput from "Components/ValidInput/ValidInput";
import FirstLastNameControl from "Components/FirstLastNameControl/FirstLastNameControl"
import { useContext } from "react";
import { Context } from "index";
import { observer } from "mobx-react-lite";
import { regin } from "Api/ApiRequest";

function RegistrationPage() {
	const { user } = useContext(Context)

	async function submitRegin(e) {
		e.preventDefault()
		console.log("fields: ", user.reginFields)
		await regin(user.reginFields).then((data) => console.log(data)).catch((e) => console.log(e))
	}

	return <>
		<Navigation />
		<div className="back-grey">
			<div className="block-center">
				<Form>
					<Form.Group className="mb-3">
						<h3 className="text-center">Регистрация</h3>
					</Form.Group>
					<FirstLastNameControl />
					<ValidInput
						title="Email адрес"
						placeholder="Введите email"
						type="email" />
					<ValidInput
						title="Введите пароль"
						placeholder="Введите пароль"
						type="password" />
					<ValidInput
						title="Повторите пароль"
						placeholder="Введите пароль еще раз"
						type="password"
						isRepeat={true} />
					<ValidInput
						title="Номер телефона"
						placeholder="+375(xx)xxx-xx-xx"
						type="tel" />
					<Form.Group className="d-grid">
						<Button variant="primary" type="submit" onClick={(e) => submitRegin(e)}>Зарегистрироваться</Button>
					</Form.Group>
				</Form>
			</div>
		</div>
	</>
}

export default observer(RegistrationPage);