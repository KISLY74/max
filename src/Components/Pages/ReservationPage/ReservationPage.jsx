import "./ReservationPage.css"
import Header from "Components/Header/Header"
import { Form } from "react-bootstrap"

const ReservationPage = () => {

  const getCount = (count) => <option>{count}</option>

  function getTimes() {
    const times = []

    for (let i = 10; i <= 20; i += 1) {
      for (let j = 0; j <= 30; j += 30) {
        times.push({ hour: i, min: j + j === 0 ? '00' : j })
      }
    }

    return times
  }

  return <>
    <Header
      title="Бронирование"
      subtitle="Забронировать столик онлайн несложно и занимает всего пару минут"
      imagePath="./img/contact-food.jpg" />
    <section className="section-reservation">
      <p className="section-reservation__title">онлайн бронирование</p>
      <Form className="form">
        <Form.Group className="form-group">
          <img className="icon" src="./img/date.svg" alt="icon" />
          <Form.Control type="date"></Form.Control>
        </Form.Group >
        <Form.Group className="form-group">
          <img className="icon" src="./img/time.svg" alt="icon" />
          <Form.Select>
            {getTimes().map(time => <option>{time.hour}:{time.min}</option>)}
          </Form.Select>
        </Form.Group >
        <Form.Group className="form-group">
          <img className="icon" src="./img/people.svg" alt="icon" />
          <Form.Select>
            {new Array(8).fill(0).map((e, i) => getCount(i + 1))}
          </Form.Select>
        </Form.Group >
      </Form >
    </section >
  </>
}

export default ReservationPage