import { Link } from 'react-router-dom'
import '../../styles/home/intro.css'

const Intro = () => {
  return (
    <div>
      <div className="hero">
        <p className='hero-top-text'>Working Hours <br/> Mon - Sun : 08:AM - 9:30PM</p>
        <h1>Welcome to <br/><span className='hero-rich-text'>Rocason Pharmacy</span></h1>
        <p className='hero-bottom-text'>Your Choice For Quality<br/> and Affordable Drugs.</p>
      </div>
      <div className='overview-container'>
        <h2 className='overview-header'>
            At <span className='hero-rich-text'>Rocason Pharmacy</span>, we supply all range of medications 
            & we bring health & wellness to your doorstep.
        </h2>
        <p className='overview-text'>Rocason Pharmacy is a Pharmaceutical company which specialises in providing access to Orphan drugs, 
            Ethical Products, rare medications in various therapeutic areas. Also, we offer high quality 
            food supplements for overall well-being meeting the highest standard for safety, potency and efficacy. 
            Additionally, We offer quick delivery service to your doorstep nationwide.
        </p>
        <Link to='/contact'><button className='overview-btn'>Contact Us</button></Link>
      </div>
    </div>
  )
}

export default Intro
