import ProductCard from "./ProductCard";
import advil from '../../assets/products/analgesics/advil.png';
import emcapExtra from "../../assets/products/analgesics/emcapExtra.png";
import panadolExtra from "../../assets/products/analgesics/panadolExtra.png";
import nurofen from "../../assets/products/analgesics/nurofen.png";
import panadol from "../../assets/products/analgesics/panadol.png";
import emcap from "../../assets/products/analgesics/emcap.png";
import volfast from "../../assets/products/analgesics/volfast.png";
import clofenac from "../../assets/products/analgesics/clofenac.png";
import cataflam from "../../assets/products/analgesics/cataflam.png";
import artequinAdult from "../../assets/products/antimalaria/artequinAdult.png";
import coartem from "../../assets/products/antimalaria/coartem.png";
import artequinChild from "../../assets/products/antimalaria/artequinChild.png";
import lynsunate from "../../assets/products/antimalaria/lynsunate.png";
import pAlaxinTs from "../../assets/products/antimalaria/p-alaxin-ts.png";
import swidar from "../../assets/products/antimalaria/swidar.png";
import amatem from "../../assets/products/antimalaria/amatem.png";
import lonart from "../../assets/products/antimalaria/lonart.png";
import pAlaxin from "../../assets/products/antimalaria/p-alaxin.png";
import ciprotab from "../../assets/products/antibiotics/ciprotab.png";
import augmentin from "../../assets/products/antibiotics/augmentin.png";
import zinnat from "../../assets/products/antibiotics/zinnat.png";
import zithromax from "../../assets/products/antibiotics/zithromax.png";
import ciprotabTn from "../../assets/products/antibiotics/ciprotabTn.png";
import fleming from "../../assets/products/antibiotics/fleming.png";
import primpex from "../../assets/products/antibiotics/primpex.png";
import tuxilD from "../../assets/products/cough/tuxilD.png";
import tuxilN from "../../assets/products/cough/tuxilN.png";
import strepsils from "../../assets/products/cough/strepsils.png";
import loratyn from "../../assets/products/cough/loratyn.png";
import clarityn from "../../assets/products/cough/clarityn.png";
import dayNight from "../../assets/products/cough/dayNight.png";
import benilyn from "../../assets/products/cough/benilyn.png";
import inhaler from "../../assets/products/cough/inhaler.png";
import procold from "../../assets/products/cough/procold.png";
import dopatab from "../../assets/products/antidiabetic/dopatab.png";
import amaryl from "../../assets/products/antidiabetic/amaryl.png";
import diovan from "../../assets/products/antidiabetic/diovan.png";
import glucophage from "../../assets/products/antidiabetic/glucophage.png";
import atacand from "../../assets/products/antidiabetic/atacand.png";
import daonil from "../../assets/products/antidiabetic/daonil.png";
import galvusmet from "../../assets/products/antidiabetic/galvusmet.png";
import micardis from "../../assets/products/antidiabetic/micardis.png";
import alphabetic from "../../assets/products/antidiabetic/alphabetic.png";
import exforgeW from "../../assets/products/antihypertensive/exforgeW.png";
import exforgeR from "../../assets/products/antihypertensive/exforgeR.png";
import normoretic from "../../assets/products/antihypertensive/normoretic.png";
import norvasc from "../../assets/products/antihypertensive/norvasc.png";
import esidrex from "../../assets/products/antihypertensive/esidrex.png";
import amplodipine from "../../assets/products/antihypertensive/amplodipine.png";
import natrilix from "../../assets/products/antihypertensive/natrilix.png";
import vasoprin from "../../assets/products/antihypertensive/vasoprin.png";
import wellwomanPlus from "../../assets/products/multivit/wellwomanPlus.png";
import wellmanOriginal from "../../assets/products/multivit/wellmanOriginal.png";
import wellmanMax from "../../assets/products/multivit/wellmanMax.png";
import menopace from "../../assets/products/multivit/menopace.png";
import wellwomanMax from "../../assets/products/multivit/wellwomanMax.png";
import wellmanProtein from "../../assets/products/multivit/wellmanProtein.png";
import perfectil from "../../assets/products/multivit/perfectil.png";
import pregnacareOriginal from "../../assets/products/multivit/pregnacareOriginal.png";
import pregnacarePlus from "../../assets/products/multivit/pregnacarePlus.png";

const AllProducts = () => {
  return (
    <div className="all-products">
      <div className="empty"></div>
      <h1 className="all-products-title">All Products</h1>
      <div>
        <h1 className="products-title">ANALGESICS</h1>
        <div className="products-cards-div">
          <ProductCard
            productImg={advil}
            productTitle={"gdkkk"}
            productPrice={5400}
          />
          <ProductCard
            productImg={emcapExtra}
            productTitle={"gdkkk"}
            productPrice={5400}
          />
          <ProductCard
            productImg={panadolExtra}
            productTitle={"gdkkk"}
            productPrice={5400}
          />
          <ProductCard
            productImg={nurofen}
            productTitle={"gdkkk"}
            productPrice={5400}
          />
          <ProductCard
            productImg={panadol}
            productTitle={"gdkkk"}
            productPrice={5400}
          />
          <ProductCard
            productImg={emcap}
            productTitle={"gdkkk"}
            productPrice={5400}
          />
          <ProductCard
            productImg={volfast}
            productTitle={"gdkkk"}
            productPrice={5400}
          />
          <ProductCard
            productImg={clofenac}
            productTitle={"gdkkk"}
            productPrice={5400}
          />
          <ProductCard
            productImg={cataflam}
            productTitle={"gdkkk"}
            productPrice={5400}
          />
        </div>
      </div>
      <hr />
      <div>
        <h1 className="products-title">ANTIMALARIA</h1>
        <div className="products-cards-div">
          <ProductCard
            productImg={artequinAdult}
            productTitle={"gdkkk"}
            productPrice={5400}
          />
          <ProductCard
            productImg={coartem}
            productTitle={"gdkkk"}
            productPrice={5400}
          />
          <ProductCard
            productImg={artequinChild}
            productTitle={"gdkkk"}
            productPrice={5400}
          />
          <ProductCard
            productImg={lynsunate}
            productTitle={"gdkkk"}
            productPrice={5400}
          />
          <ProductCard
            productImg={pAlaxinTs}
            productTitle={"gdkkk"}
            productPrice={5400}
          />
          <ProductCard
            productImg={swidar}
            productTitle={"gdkkk"}
            productPrice={5400}
          />
          <ProductCard
            productImg={amatem}
            productTitle={"gdkkk"}
            productPrice={5400}
          />
          <ProductCard
            productImg={lonart}
            productTitle={"gdkkk"}
            productPrice={5400}
          />
          <ProductCard
            productImg={pAlaxin}
            productTitle={"gdkkk"}
            productPrice={5400}
          />
        </div>
      </div>
      <hr />
      <div>
        <h1 className="products-title">ANTIBIOTICS</h1>
        <div className="products-cards-div">
          <ProductCard
            productImg={ciprotab}
            productTitle={"gdkkk"}
            productPrice={5400}
          />
          <ProductCard
            productImg={augmentin}
            productTitle={"gdkkk"}
            productPrice={5400}
          />
          <ProductCard
            productImg={zinnat}
            productTitle={"gdkkk"}
            productPrice={5400}
          />
          <ProductCard
            productImg={zithromax}
            productTitle={"gdkkk"}
            productPrice={5400}
          />
          <ProductCard
            productImg={ciprotabTn}
            productTitle={"gdkkk"}
            productPrice={5400}
          />
          <ProductCard
            productImg={fleming}
            productTitle={"gdkkk"}
            productPrice={5400}
          />
          <ProductCard
            productImg={primpex}
            productTitle={"gdkkk"}
            productPrice={5400}
          />
          <ProductCard
            productImg={ciprotabTn}
            productTitle={"gdkkk"}
            productPrice={5400}
          />
          <ProductCard
            productImg={fleming}
            productTitle={"gdkkk"}
            productPrice={5400}
          />
        </div>
      </div>
      <hr />
      <div>
        <h1 className="products-title">COUGH & COLD</h1>
        <div className="products-cards-div">
          <ProductCard
            productImg={tuxilD}
            productTitle={"gdkkk"}
            productPrice={5400}
          />
          <ProductCard
            productImg={tuxilN}
            productTitle={"gdkkk"}
            productPrice={5400}
          />
          <ProductCard
            productImg={strepsils}
            productTitle={"gdkkk"}
            productPrice={5400}
          />
          <ProductCard
            productImg={loratyn}
            productTitle={"gdkkk"}
            productPrice={5400}
          />
          <ProductCard
            productImg={clarityn}
            productTitle={"gdkkk"}
            productPrice={5400}
          />
          <ProductCard
            productImg={dayNight}
            productTitle={"gdkkk"}
            productPrice={5400}
          />
          <ProductCard
            productImg={benilyn}
            productTitle={"gdkkk"}
            productPrice={5400}
          />
          <ProductCard
            productImg={inhaler}
            productTitle={"gdkkk"}
            productPrice={5400}
          />
          <ProductCard
            productImg={procold}
            productTitle={"gdkkk"}
            productPrice={5400}
          />
        </div>
      </div>
      <hr />
      <div>
        <h1 className="products-title">ANTIDIABETIC</h1>
        <div className="products-cards-div">
          <ProductCard
            productImg={dopatab}
            productTitle={"gdkkk"}
            productPrice={5400}
          />
          <ProductCard
            productImg={amaryl}
            productTitle={"gdkkk"}
            productPrice={5400}
          />
          <ProductCard
            productImg={diovan}
            productTitle={"gdkkk"}
            productPrice={5400}
          />
          <ProductCard
            productImg={glucophage}
            productTitle={"gdkkk"}
            productPrice={5400}
          />
          <ProductCard
            productImg={atacand}
            productTitle={"gdkkk"}
            productPrice={5400}
          />
          <ProductCard
            productImg={daonil}
            productTitle={"gdkkk"}
            productPrice={5400}
          />
          <ProductCard
            productImg={galvusmet}
            productTitle={"gdkkk"}
            productPrice={5400}
          />
          <ProductCard
            productImg={micardis}
            productTitle={"gdkkk"}
            productPrice={5400}
          />
          <ProductCard
            productImg={alphabetic}
            productTitle={"gdkkk"}
            productPrice={5400}
          />
        </div>
      </div>
      <hr />
      <div>
        <h1 className="products-title">ANTIHYPERTENSIVE</h1>
        <div className="products-cards-div">
          <ProductCard
            productImg={exforgeW}
            productTitle={"gdkkk"}
            productPrice={5400}
          />
          <ProductCard
            productImg={exforgeR}
            productTitle={"gdkkk"}
            productPrice={5400}
          />
          <ProductCard
            productImg={normoretic}
            productTitle={"gdkkk"}
            productPrice={5400}
          />
          <ProductCard
            productImg={norvasc}
            productTitle={"gdkkk"}
            productPrice={5400}
          />
          <ProductCard
            productImg={esidrex}
            productTitle={"gdkkk"}
            productPrice={5400}
          />
          <ProductCard
            productImg={amplodipine}
            productTitle={"gdkkk"}
            productPrice={5400}
          />
          <ProductCard
            productImg={natrilix}
            productTitle={"gdkkk"}
            productPrice={5400}
          />
          <ProductCard
            productImg={diovan}
            productTitle={"gdkkk"}
            productPrice={5400}
          />
          <ProductCard
            productImg={vasoprin}
            productTitle={"gdkkk"}
            productPrice={5400}
          />
        </div>
      </div>
      <hr />
      <div>
        <h1 className="products-title">MULTIVITAMIN & SUPPLEMENT</h1>
        <div className="products-cards-div">
          <ProductCard
            productImg={wellwomanPlus}
            productTitle={"gdkkk"}
            productPrice={5400}
          />
          <ProductCard
            productImg={wellmanOriginal}
            productTitle={"gdkkk"}
            productPrice={5400}
          />
          <ProductCard
            productImg={wellmanMax}
            productTitle={"gdkkk"}
            productPrice={5400}
          />
          <ProductCard
            productImg={menopace}
            productTitle={"gdkkk"}
            productPrice={5400}
          />
          <ProductCard
            productImg={wellwomanMax}
            productTitle={"gdkkk"}
            productPrice={5400}
          />
          <ProductCard
            productImg={wellmanProtein}
            productTitle={"gdkkk"}
            productPrice={5400}
          />
          <ProductCard
            productImg={perfectil}
            productTitle={"gdkkk"}
            productPrice={5400}
          />
          <ProductCard
            productImg={pregnacareOriginal}
            productTitle={"gdkkk"}
            productPrice={5400}
          />
          <ProductCard
            productImg={pregnacarePlus}
            productTitle={"gdkkk"}
            productPrice={5400}
          />
        </div>
      </div>
    </div>
  );
}

export default AllProducts;
