import { useContext } from "react"
import "./OrderFooter.scss"
import { Context } from "index"
import { observer } from "mobx-react-lite"
import { Button } from "react-bootstrap"
import { order } from "Api/ApiRequest"

const OrderFooter = () => {
  const { user } = useContext(Context)

  const orderAdd = async () => {
    await order(user.email, user.orders).then()//!
  }

  return <div className="order-footer">
    <p className="order-footer__price">Общая цена: {user.orders.reduce((acc, order) => acc + order.count * order.price, 0).toFixed(2)}</p>
    <Button variant="dark" onClick={orderAdd}>Заказать</Button>
  </div>
}

export default observer(OrderFooter)