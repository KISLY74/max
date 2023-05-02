import Navigation from "Components/Navigation/Navigation"
import CategoryList from "Components/CategoryList/CategoryList";
import { Container } from 'react-bootstrap';

function MenuPage() {
	return <>
		<Navigation />
		{/* цикл */}
		<Container className="d-flex flex-column align-items-center">
			<CategoryList title="Супы" />
			<CategoryList title="Горячее" />
			<CategoryList title="Десерты" />
		</Container>
		{/* <MenuSection title="drink" /> */}
	</>
}

export default MenuPage;