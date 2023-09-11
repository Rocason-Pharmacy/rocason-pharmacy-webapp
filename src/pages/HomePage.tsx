import Intro from '../Components/Home/Intro';
import Order from '../Components/Home/Order';
import OurProducts from '../Components/Home/OurProducts';
import ProRec from '../Components/Home/ProRec';

const HomePage = () => {
  return (
    <div>
      <Intro />
      {/* <ProductCategory /> */}
      <OurProducts />
      <Order />
      <ProRec />
    </div>
  );
};

export default HomePage;
