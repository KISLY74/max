import "./CategoryItem.css"

const CategoryItem = ({ item }) => {

  return <div className={`category-item ${item.discount && "discount"}`}>
    <div className="block-name-price">
      <p className="block-name-price__name">{item.name}</p>
      <p className="block-name-price__price">{item.price}</p>
    </div>
    <p className="category-item__desc">{item.description}</p>
  </div>
}

export default CategoryItem