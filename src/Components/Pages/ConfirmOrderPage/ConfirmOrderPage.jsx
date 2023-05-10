import { order } from "Api/ApiRequest"
import "./ConfirmOrderPage.scss"
import Navigation from "Components/Navigation/Navigation"
import { Context } from "index"
import { observer } from "mobx-react-lite"
import { useContext, useState } from "react"
import { Button, Form } from "react-bootstrap"

const ConfirmOrderPage = () => {
  const { user } = useContext(Context)
  const [numberTable, setNumberTable] = useState(1)

  async function confirmOrder() {
    await order(numberTable, user.email, user.orders).then((res) => console.log(res.data))
  }

  return <>
    <Navigation />
    <main className="main-confirm">
      <h2 className="fs-2">Список</h2>
      {user.orders.length !== 0 && <div className="order-list">
        {user.orders.map(order => {
          return <div className="item-order">
            <p className="item-order__name">{order.name}</p>
            <p className="item-order__price">{order.price} р.</p>
            <p className="item-order__count">{order.count} шт.</p>
          </div>
        })}
      </div>}
      <div className="container-select">
        <Form.Select
          onChange={(e) => setNumberTable(e.target.value)}
          defaultValue="Выбрать стол">
          <option style={{ display: 'none' }}>Выбрать стол</option>
          {new Array(10).fill(0).map((el, i) => <option>{i + 1}</option>)}
        </Form.Select>
        <Button
          variant="dark"
          onClick={confirmOrder}
          disabled={user.orders.length === 0}>Подтвердить</Button>
      </div >
    </main >
  </>
}

export default observer(ConfirmOrderPage)