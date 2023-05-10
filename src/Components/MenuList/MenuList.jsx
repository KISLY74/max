import CategoryList from "Components/CategoryList/CategoryList";
import { Container } from 'react-bootstrap';
import { useEffect, useState } from "react";
import { getMenu } from "Api/ApiRequest";

const MenuList = () => {
  const [menu, setMenu] = useState([])

  function group() {
    let groupMenu = {}
    menu.map(el => groupMenu[el.categoryName].push(el))

    return groupMenu
  }

  useEffect(() => {
    (async function () {
      await getMenu().then((res) => setMenu(group(res.data)))
    }())
  }, [])

  return <Container className="d-flex flex-column align-items-center mb-5">
    {Object.entries(menu).map(({ categoryName, items }) => {
      return <CategoryList title={categoryName} items={items} />
    })}
  </Container>
}

export default MenuList