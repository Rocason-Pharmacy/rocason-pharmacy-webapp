import CustomServiceCards from '../CustomCards/CustomServiceCards'
import Phone from '../../assets/services/smartphone 1.png'
import Delivery from '../../assets/services/delivery-bike 1.png'
import Hospital from '../../assets/services/hospital-bed 1.png'
import Lotion from '../../assets/services/lotion 1.png'
import Prescription from '../../assets/services/medical-prescription 1.png'
import Therapy from '../../assets/services/pharmacist 1.png'
import '../../styles/services/serviceCard.css'
const ServiceCards = () => {
   
  return (
    <div>
      <div className='service-cards-container'>
        <h2>Our services include:</h2>
        <hr/>
     
        <CustomServiceCards img={Phone} title={'Online Pharmacy'} desc={'Order and purchase your drugs online, Rocason is Always Available to Serve You, Regardless of Distance'}/>
        <CustomServiceCards img={Delivery} title={'Prescription Refill'} desc={'Our Dedicated Professionals Are Always Available to Assess Your Medications'}/>
        <CustomServiceCards img={Hospital} title={'Skincare products'} desc={'We also provide Skincare products, cosmetics and toiletries.'}/>
        <CustomServiceCards img={Lotion} title={'Medical & Surgical Equipment Supplies '} desc={'We Provide access to Ethical, Rare, Orphan Medications including Health Supplements, and other selected items.'}/>
        <CustomServiceCards img={Prescription} title={'Quick Delivery Nationwide'} desc={'Swift delivery to your door. Convenience and care, anytime, anywhere'}/>
        <CustomServiceCards img={Therapy} title={'Counseling'} desc={'We provide professional information and counselling and drugs and medication, ensuring proper use of medication.'}/>
       
      </div>
    </div>
  )
}

export default ServiceCards
