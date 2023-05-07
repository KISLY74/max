import Header from "Components/Header/Header"
import MenuList from "Components/MenuList/MenuList"

const OrderPage = () => {


  return <>
    <Header
      title={"Заказ"}
      imagePath={"./img/header-order.jpg"}
      isNotLines={true} />
    <MenuList isOrder={true} />
  </>
}

export default OrderPage