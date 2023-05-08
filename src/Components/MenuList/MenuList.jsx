import CategoryList from "Components/CategoryList/CategoryList";
import { Container } from 'react-bootstrap';

const MenuList = () => {
  return <Container className="d-flex flex-column align-items-center mb-5">
    <CategoryList title="Супы" />
    <CategoryList title="Горячее" />
    <CategoryList title="Десерты" />
  </Container>
}

export default MenuList