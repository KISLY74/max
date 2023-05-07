import { observer } from "mobx-react-lite"
import "./CategoryItem.scss"
import { useContext, useState } from "react"
import { Context } from "index"
import { Button, Form } from "react-bootstrap"

const CategoryItem = ({ item, pathname }) => {
  const { user } = useContext(Context)
  const [count, setCount] = useState(0)

  function addToOrder() {

  }

  return <div className={`category-item ${pathname === '/order' && 'category-item-order'} ${item.discount && "discount"}`}>
    <div className="item-title">
      <p className="item-title__name">{item.name}</p>
      <p className="item-title__price">{item.price} руб.</p>
    </div>
    {pathname === '/order' ? <div className="item-add">
      <Form.Control
        type="number"
        className="item-add__count"
        value={count}
        min={0}
        onChange={(e) => setCount(e.target.value)} />
      <Button
        variant="dark"
        onClick={addToOrder}>+</Button>
    </div> : <p className="category-item__desc">{item.description}</p>}
  </div>
}

export default observer(CategoryItem)