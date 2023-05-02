import { Context } from "index"
import { observer } from "mobx-react-lite"
import { useState, useEffect, useContext } from "react"
import { Form } from "react-bootstrap"

const ValidInput = observer(({ title, placeholder, type }) => {
  const { user } = useContext(Context)
  const [value, setValue] = useState('')
  const [error, setError] = useState(false)

  useEffect(() => {
    (function () {
      setError(false)

      switch (type) {
        case 'email':
          !/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu
            .test(value) && setError("Email не корректен")
          break;
        case 'password':
          value.length < 6 && setError("Длина должна быть 6 и более символов")
          !/[0-9]/.test(value) && setError("Пароль должен иметь хотя бы одну цифру")
          break;
        default:
          break;
      }

      value.trim() === '' && setError("Поле не должно быть пустым или состоять из одних пробелов")
      if (!error) {
        type === 'email' && user.setEmail(value)
        type === 'password' && user.setPassword(value)
      }

    }())
  }, [error, type, user, value])

  return <Form.Group className="mb-3">
    <Form.Label>{title}</Form.Label>
    <Form.Control type={type} placeholder={placeholder}
      onChange={(e) => setValue(e.target.value)} value={value} />
    {error && <p className="text-danger">{error}</p>}
  </Form.Group>
})

export default ValidInput