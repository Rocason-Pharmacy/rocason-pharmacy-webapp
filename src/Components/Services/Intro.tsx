import '../../styles/services/intro.css'
import HeroImg from '../../assets/services/serviceHeroImg.png'
const Intro = () => {
  return (
    <div>
       <div className="service-hero">
        <p className='service-hero-top-text'>Working Hours <br/> Mon - Sun : 08:00AM - 9:30PM</p>
        <div className='service-hero-container'>
          <h1>Our Services </h1>
          <img src={HeroImg} alt="" className='service-img' />
        </div>
      </div>
    </div>
  )
}

export default Intro
