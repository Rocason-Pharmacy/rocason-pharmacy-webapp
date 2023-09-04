import Order from '../Components/Home/Order';
import ProRec from '../Components/Home/ProRec';
import ProductCategory from '../Components/Home/ProductCategory';
import Footer from '../Components/Layout/Footer';
import Header from '../Components/Layout/Header';

const HomePage = () => {
  return (
    <div>
          <Header/>
          <ProductCategory/>
          <Order />
          <ProRec/>
          <Footer/>
    </div>
  );
}

export default HomePage;
