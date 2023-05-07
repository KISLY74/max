import "./SectionHeader.scss"

function SectionHeader({ title, imagePath }) {

	return <section className="section-header"
		style={{ backgroundImage: `url("${imagePath}")` }} >
		<h2 className="fs-2 fw-bold" style={{ letterSpacing: '8px' }}>{title}</h2>
	</section >
}


export default SectionHeader;