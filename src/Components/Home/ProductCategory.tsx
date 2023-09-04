import Pills from '../../assets/home/pills.png'
import PCM from '../../assets/home/pcm.png'
const ProductCategory = () => {
  return (
    <div>
        <div className='product-header'>
            <h2>Product Category</h2>
            <hr/>
        </div>
        <div className='product-container'>
            <div className='medic-section'>
              <h2>Prescription Medicines</h2>
              <p>Your Choice For Quality and <br/>Affordable Drugs.</p>
              <button className='buynow-btn'>Buy Now</button>
              <div className='img-container'>
              <img src={Pills} alt='' />
              </div>
            </div>
            <div className='medic-section-b'>
            </div>
            <div className='medic-section-c'>
            </div>
            <div className='medic-section-d'>
            </div>
        </div>
    </div>
  )
}

export default ProductCategory