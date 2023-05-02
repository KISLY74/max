import "./CategoryList.css"
import CategoryItem from "Components/CategoryItem/CategoryItem"

const items = [
  {
    name: 'Суп гороховый',
    price: 14.29,
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni possimus eligendi impedit ullam at, placeat architecto ab animi',
  },
  {
    name: 'Борщ',
    price: 14.29,
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni possimus eligendi impedit ullam at, placeat architecto ab animi',
    discount: true
  },
  {
    name: 'Холодник',
    price: 14.29,
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni possimus eligendi impedit ullam at, placeat architecto ab animi',
  },
  {
    name: 'Щавель',
    price: 14.29,
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni possimus eligendi impedit ullam at, placeat architecto ab animi',
    discount: true
  },
]

const CategoryList = ({ title }) => {
  return <div className="category-list">
    <h3 className="category-list__title fs-2">{title}</h3>
    <div className="category-list-items">
      {items && items.map(item => <CategoryItem item={item} />)}
    </div>
  </div>
}

export default CategoryList