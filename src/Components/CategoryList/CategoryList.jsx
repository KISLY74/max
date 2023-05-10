import "./CategoryList.scss"
import CategoryItem from "Components/CategoryItem/CategoryItem"
import { useLocation } from "react-router-dom"

// const items = [
//   {
//     name: 'Суп гороховый ujhjwirhgfiowr',
//     price: 14.29,
//     description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni possimus eligendi impedit ullam at, placeat architecto ab animi'
//   },
//   {
//     name: 'Борщ',
//     price: 14.29,
//     description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni possimus eligendi impedit ullam at, placeat architecto ab animi',
//     discount: true
//   },
//   {
//     name: 'Холодник',
//     price: 14.29,
//     description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni possimus eligendi impedit ullam at, placeat architecto ab animi'
//   },
//   {
//     name: 'Щавель',
//     price: 14.29,
//     description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni possimus eligendi impedit ullam at, placeat architecto ab animi',
//     discount: true
//   },
// ]

const CategoryList = ({ title, items }) => {
  const location = useLocation()

  return <div className={`category-list ${location.pathname === '/order' && 'category-list-order'} `}>
    <h3 className="category-list__title fs-2">{title}</h3>
    <div className="category-list-items">
      {items && items.map(item => <CategoryItem pathname={location.pathname} item={item} />)}
    </div>
  </div>
}

export default CategoryList