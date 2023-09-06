import Intro from '../Components/Home/Intro';
import Order from '../Components/Home/Order';
import ProRec from '../Components/Home/ProRec';
import ProductCategory from '../Components/Home/ProductCategory';

const HomePage = () => {
  return (
    <div>
          
          <Intro/>
          <ProductCategory/>
          <Order />
          <ProRec/>
         
    </div>
  );
}

export default HomePage;
