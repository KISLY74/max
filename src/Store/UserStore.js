import { makeAutoObservable } from "mobx"

class UserStore {
	constructor() {
		this._isAuth = false;
		this._email = ''
		this._password = ''
		this._reginFields = {}
		makeAutoObservable(this);
	}

	setIsAuth(value) {
		this._isAuth = value;
	}

	setReginFields(key, val) {
		this._reginFields[key] = val;
	}

	setUserAuth(key, val) {
		this._userAuth[key] = val;
	}

	setEmail(val) {
		this._email = val;
	}

	setPassword(val) {
		this._password = val;
	}

	get email() {
		return this._email
	}

	get password() {
		return this._password
	}

	get isAuth() {
		return this._isAuth;
	}

	get reginFields() {
		return this._reginFields;
	}
}

export default UserStore;