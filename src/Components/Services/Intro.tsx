import '../../styles/services/intro.css'
import HeroImg from '../../assets/services/serviceHeroImg.png'
const Intro = () => {
  return (
    <div>
       <div className="service-hero">
        <p className='service-hero-top-text'>Working Hours <br/> Mon - Sun : 08:AM - 9:30PM</p>
        <h1>Our Services </h1>
        <img src={HeroImg} alt="" className='service-img' />
      </div>
    </div>
  )
}

export default Intro
