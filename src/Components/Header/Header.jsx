import "./Header.css"
import Navigation from "Components/Navigation/Navigation"

const Header = ({ title, subtitle, imagePath }) => {
  return <header className="header" style={{
    backgroundImage: `url("${imagePath}")`,
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: 350
  }}>
    <div className="header-container">
      <Navigation />
      <div className="title-block">
        <h1 className="title-block__title">{title}</h1>
        <div className="separator">
          <div className="separator__line-left" />
          <div className="separator__flower">✻</div>
          <div className="separator__line-right" />
        </div>
        <p className="title-block__desc">{subtitle}</p>
      </div>
    </div>
  </header >
}

export default Header