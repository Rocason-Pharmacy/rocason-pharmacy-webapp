import paracetamol from '../assets/analgesics/paracetamol.png';
import emcapExtra from '../assets/analgesics/emcap.png';
import panadolExtra from '../assets/analgesics/panadol.png';
import nurofen from '../assets/analgesics/nurofen.png';
import calprofen from '../assets/analgesics/calprofen.png';
// import emcap from '../assets/analgesics/emcap.png';
import lofnac from '../assets/analgesics/voltfast-_diclofenac-sodium_-50mg-powder-sachets-x3-1_xcgisv_1-removebg-preview.png';
import clofenac from '../assets/analgesics/clofenac.png';
import clofenacBg from '../assets/analgesics/CLOFENAC-SR-100MG.png';
import cataflam from '../assets/analgesics/cataflam-_diclofenac_-50g-tabs-blister-x10-1_qvnxuf_1-removebg-preview.png';
import lokmal from '../assets/antimalaria/lokmal.png';
import coartem from '../assets/antimalaria/COARTEM.png';
import artequin from '../assets/antimalaria/Artequin.png';
// import lynsunate from '../assets/antimalaria/LYNSUNATE.png';
import pAlaxinTs from '../assets/antimalaria/P-Alaxin.png';
import swidar from '../assets/antimalaria/swidar.png';
import amatem from '../assets/antimalaria/amatem.png';
import lonart from '../assets/antimalaria/lonart.png';
import pAlaxinx2 from '../assets/antimalaria/P-Alaxin-x12.png';
import ciprotab from '../assets/antibiotics/ciprotab.png';
import augmentin from '../assets/antibiotics/augumentin.png';
import zinnat from '../assets/antibiotics/zinnat.png';
import zithromax from '../assets/antibiotics/zithro.png';
import ciprotabTn from '../assets/antibiotics/ciprotab-tn.png';
import fleming from '../assets/antibiotics/FLEMING.png';
import primpex from '../assets/antibiotics/primpex.png';
import doxycap from '../assets/antibiotics/doxycap.png';
import ampiclox from '../assets/antibiotics/ampiclox.png';
import loxagyl from '../assets/antibiotics/loxagyl.png';
import amoksiklav from '../assets/antibiotics/Amoksiklav.png';
import amoxil from '../assets/antibiotics/amoxil.png';
import tuxilN from '../assets/products/cough/tuxilN.png';
import strepsils from '../assets/products/cough/strepsils.png';
import loratyn from '../assets/products/cough/loratyn.png';
import clarityn from '../assets/products/cough/clarityn.png';
import dayNight from '../assets/products/cough/dayNight.png';
import benilyn from '../assets/products/cough/benylin.png';
import inhaler from '../assets/products/cough/inhaler.png';
import procold from '../assets/products/cough/procold.png';
import dopatab from '../assets/products/antidiabetic/dapatab.png';
import amaryl from '../assets/products/antidiabetic/amarly.png';
import diovan from '../assets/products/antidiabetic/diovan.png';
import glucophage from '../assets/products/antidiabetic/glycophage.png';
import atacand from '../assets/products/antidiabetic/atacand.png';
import daonil from '../assets/products/antidiabetic/daonil.png';
import galvusmet from '../assets/products/antidiabetic/galvusmet.png';
import micardis from '../assets/products/antidiabetic/micardis.png';
import alphabetic from '../assets/products/antidiabetic/alphabetic.png';
import exforgeW from '../assets/products/antihypertensive/exforgeW.png';
import exforgeR from '../assets/products/antihypertensive/exforgeR.png';
import normoretic from '../assets/products/antihypertensive/normoretic.png';
import norvasc from '../assets/products/antihypertensive/norvasc.png';
import esidrex from '../assets/products/antihypertensive/esidrex.png';
import amplodipine from '../assets/products/antihypertensive/amplodipine.png';
import natrilix from '../assets/products/antihypertensive/natrilix.png';
import vasoprin from '../assets/products/antihypertensive/vasoprin.png';
import wellwomanPlus from '../assets/products/multivit/wellwomanPlus.png';
import wellmanOriginal from '../assets/products/multivit/wellmanOriginal.png';
import wellmanMax from '../assets/products/multivit/wellmanMax.png';
import menopace from '../assets/products/multivit/menopace.png';
import wellwomanMax from '../assets/products/multivit/wellwomanMax.png';
import wellmanProtein from '../assets/products/multivit/wellmanProtein.png';
import perfectil from '../assets/products/multivit/perfectil.png';
import pregnacareOriginal from '../assets/products/multivit/pregnacareOriginal.png';
import pregnacarePlus from '../assets/products/multivit/pregnacarePlus.png';

const productData = {
  antibiotic: [
    {
      id: 1,
      img: ciprotab,
      title: 'Ciprotab 500mg x14',
      price: 2500,
      desc: 'Order and purchase your drugs online, Rocason is Always Available to Serve You, Regardless of Distance',
    },
    {
      id: 2,
      img: augmentin,
      title: 'Augmentin 625mg x14',
      price: 25000,
      desc: 'Order and purchase your drugs online, Rocason is Always Available to Serve You, Regardless of Distance',
    },
    {
      id: 3,
      img: zinnat,
      title: 'Zinnat 500mg x10',
      price: 8500,
      desc: 'Order and purchase your drugs online, Rocason is Always Available to Serve You, Regardless of Distance',
    },
    {
      id: 4,
      img: zithromax,
      price: 7500,
      title: ' Zithromax 250mg x6',
      desc: 'Order and purchase your drugs online, Rocason is Always Available to Serve You, Regardless of Distance',
    },
    {
      id: 5,
      img: ciprotabTn,
      price: 2500,
      title: 'Ciprotab-TN x14',
      desc: 'Order and purchase your drugs online, Rocason is Always Available to Serve You, Regardless of Distance',
    },
    {
      id: 6,
      img: fleming,
      title: 'Fleming 625mg x14',
      price: 6000,
      desc: 'Order and purchase your drugs online, Rocason is Always Available to Serve You, Regardless of Distance',
    },
    {
      id: 7,
      img: primpex,
      title: 'Primpex x100',
      price: 2500,
      desc: 'Order and purchase your drugs online, Rocason is Always Available to Serve You, Regardless of Distance',
    },
    {
      id: 8,
      img: doxycap,
      title: 'Doxycap x100',
      price: 5500,
      desc: 'Order and purchase your drugs online, Rocason is Always Available to Serve You, Regardless of Distance',
    },
    {
      id: 9,
      img: ampiclox,
      title: 'Ampiclox 500mg Beecham x100',
      price: 75000,
      desc: 'Order and purchase your drugs online, Rocason is Always Available to Serve You, Regardless of Distance',
    },
    {
      id: 10,
      img: loxagyl,
      title: 'Loxagyl 200mg x100',
      price: 950,
      desc: 'Order and purchase your drugs online, Rocason is Always Available to Serve You, Regardless of Distance',
    },
    {
      id: 11,
      img: amoksiklav,
      title: 'Amoksiklav 1000MG x15',
      price: 7000,
      desc: 'Order and purchase your drugs online, Rocason is Always Available to Serve You, Regardless of Distance',
    },
    {
      id: 12,
      img: amoxil,
      title: 'Amoxil 500mg x100',
      price: 19800,
      desc: 'Order and purchase your drugs online, Rocason is Always Available to Serve You, Regardless of Distance',
    },
  ],

  analgesics: [
    {
      id: 1,
      img: paracetamol,
      title: 'Emzor Paracetamol x96',
      price: 1400,
      desc: 'Order and purchase your drugs online, Rocason is Always Available to Serve You, Regardless of Distance',
    },
    {
      id: 2,
      img: emcapExtra,
      title: 'Emcap Extra x100',
      price: 2500,
      desc: 'Order and purchase your drugs online, Rocason is Always Available to Serve You, Regardless of Distance',
    },
    {
      id: 3,
      img: panadolExtra,
      title: 'Panadol Extra x100',
      price: 2800,
      desc: 'Order and purchase your drugs online, Rocason is Always Available to Serve You, Regardless of Distance',
    },
    {
      id: 4,
      img: nurofen,
      title: 'Nurofen Express 200mg',
      price: 3000,
      desc: 'Order and purchase your drugs online, Rocason is Always Available to Serve You, Regardless of Distance',
    },
    {
      id: 5,
      img: calprofen,
      title: 'Calprofen syrup',
      price: 5400,
      desc: 'Order and purchase your drugs online, Rocason is Always Available to Serve You, Regardless of Distance',
    },
    {
      id: 6,
      img: clofenac,
      title: 'Clofenac 50mg x100',
      price: 2800,
      desc: 'Order and purchase your drugs online, Rocason is Always Available to Serve You, Regardless of Distance',
    },
    {
      id: 7,
      img: lofnac,
      title: 'Lofnac Gel',
      price: 500,
      desc: 'Order and purchase your drugs online, Rocason is Always Available to Serve You, Regardless of Distance',
    },
    {
      id: 8,
      img: clofenacBg,
      title: 'Clofenac SR 100mg x100',
      price: 5800,
      desc: 'Order and purchase your drugs online, Rocason is Always Available to Serve You, Regardless of Distance',
    },
    {
      id: 9,
      img: cataflam,
      title: 'Cataflam x100',
      price: 18000,
      desc: 'Order and purchase your drugs online, Rocason is Always Available to Serve You, Regardless of Distance',
    },
  ],
  antidiabetic: [
    {
      id: 1,
      img: dopatab,
      price: 2000,
      title: 'Dopatab',
      desc: 'Order and purchase your drugs online, Rocason is Always Available to Serve You, Regardless of Distance',
    },
    {
      id: 2,
      img: amaryl,
      price: 1000,
      title: 'Amatyl',
      desc: 'Order and purchase your drugs online, Rocason is Always Available to Serve You, Regardless of Distance',
    },
    {
      id: 3,
      img: diovan,
      price: 2100,
      title: 'Diovan',
      desc: 'Order and purchase your drugs online, Rocason is Always Available to Serve You, Regardless of Distance',
    },
    {
      id: 4,
      img: glucophage,
      price: 2500,
      title: 'Glucophage',
      desc: 'Order and purchase your drugs online, Rocason is Always Available to Serve You, Regardless of Distance',
    },
    {
      id: 5,
      img: atacand,
      price: 4000,
      title: 'Atacand',
      desc: 'Order and purchase your drugs online, Rocason is Always Available to Serve You, Regardless of Distance',
    },
    {
      id: 6,
      img: daonil,
      price: 5200,
      title: 'Daonil',
      desc: 'Order and purchase your drugs online, Rocason is Always Available to Serve You, Regardless of Distance',
    },
    {
      id: 7,
      img: galvusmet,
      price: 4000,
      title: 'Galvusmet',
      desc: 'Order and purchase your drugs online, Rocason is Always Available to Serve You, Regardless of Distance',
    },
    {
      id: 8,
      img: micardis,
      price: 1000,
      title: 'Micardis',
      desc: 'Order and purchase your drugs online, Rocason is Always Available to Serve You, Regardless of Distance',
    },
    {
      id: 9,
      img: alphabetic,
      price: 2300,
      title: 'Alphabetic',
      desc: 'Order and purchase your drugs online, Rocason is Always Available to Serve You, Regardless of Distance',
    },
  ],
  antihypertensive: [
    {
      id: 1,
      img: exforgeW,
      title: 'Exforgew',
      price: 3000,
      desc: 'Order and purchase your drugs online, Rocason is Always Available to Serve You, Regardless of Distance',
    },
    {
      id: 2,
      img: exforgeR,
      title: 'Exforger',
      price: 5000,
      desc: 'Order and purchase your drugs online, Rocason is Always Available to Serve You, Regardless of Distance',
    },
    {
      id: 3,
      img: normoretic,
      title: 'Normoretic',
      price: 1250,
      desc: 'Order and purchase your drugs online, Rocason is Always Available to Serve You, Regardless of Distance',
    },
    {
      id: 4,
      img: norvasc,
      title: 'Norvasc',
      price: 3100,
      desc: 'Order and purchase your drugs online, Rocason is Always Available to Serve You, Regardless of Distance',
    },
    {
      id: 5,
      img: esidrex,
      title: 'Esidrex',
      price: 2200,
      desc: 'Order and purchase your drugs online, Rocason is Always Available to Serve You, Regardless of Distance',
    },
    {
      id: 6,
      img: amplodipine,
      title: 'Amplodipine',
      price: 1200,
      desc: 'Order and purchase your drugs online, Rocason is Always Available to Serve You, Regardless of Distance',
    },
    {
      id: 7,
      img: natrilix,
      title: 'Natrilix',
      price: 2000,
      desc: 'Order and purchase your drugs online, Rocason is Always Available to Serve You, Regardless of Distance',
    },
    {
      id: 8,
      img: vasoprin,
      title: 'Vasoprin',
      price: 3000,
      desc: 'Order and purchase your drugs online, Rocason is Always Available to Serve You, Regardless of Distance',
    },
  ],

  antimalaria: [
    {
      id: 1,
      price: 950,
      img: lokmal,
      title: 'Lokmal QS x6',
      desc: 'Order and purchase your drugs online, Rocason is Always Available to Serve You, Regardless of Distance',
    },
    {
      id: 2,
      img: coartem,
      price: 2500,
      title: 'Coartem 80/480 x6',
      desc: 'Order and purchase your drugs online, Rocason is Always Available to Serve You, Regardless of Distance',
    },
    {
      id: 3,
      img: artequin,
      price: 1900,
      title: 'Artequick',
      desc: 'Order and purchase your drugs online, Rocason is Always Available to Serve You, Regardless of Distance',
    },
    {
      id: 4,
      img: amatem,
      price: 900,
      title: 'Amatem softgel 20/240 x18',
      desc: 'Order and purchase your drugs online, Rocason is Always Available to Serve You, Regardless of Distance',
    },
    {
      id: 5,
      img: pAlaxinTs,
      price: 1500,
      title: 'P-Alaxin TS',
      desc: 'Order and purchase your drugs online, Rocason is Always Available to Serve You, Regardless of Distance',
    },
    {
      id: 6,
      img: swidar,
      price: 500,
      title: 'Swidar x3',
      desc: 'Order and purchase your drugs online, Rocason is Always Available to Serve You, Regardless of Distance',
    },
    {
      id: 7,
      img: amatem,
      price: 2000,
      title: 'Amatem softgel 80/480 x6',
      desc: 'Order and purchase your drugs online, Rocason is Always Available to Serve You, Regardless of Distance',
    },
    {
      id: 8,
      img: lonart,
      price: 5400,
      title: 'Lonart DS x6',
      desc: 'Order and purchase your drugs online, Rocason is Always Available to Serve You, Regardless of Distance',
    },
    {
      id: 9,
      img: pAlaxinx2,
      price: 1500,
      title: 'P-Alaxin x12',
      desc: 'Order and purchase your drugs online, Rocason is Always Available to Serve You, Regardless of Distance',
    },
  ],
  cough: [
    // {
    //   id: 1,
    //   img: tuxilD,
    //   title: 'Tuxild',
    //   price: 3000,
    //   desc: 'Order and purchase your drugs online, Rocason is Always Available to Serve You, Regardless of Distance',
    // },
    {
      id: 2,
      img: tuxilN,
      title: 'Tuxiln',
      price: 700,
      desc: 'Order and purchase your drugs online, Rocason is Always Available to Serve You, Regardless of Distance',
    },
    {
      id: 3,
      img: strepsils,
      price: 1000,
      title: 'Strepsils',
      desc: 'Order and purchase your drugs online, Rocason is Always Available to Serve You, Regardless of Distance',
    },
    {
      id: 4,
      img: loratyn,
      title: 'Loratyn',
      price: 1500,
      desc: 'Order and purchase your drugs online, Rocason is Always Available to Serve You, Regardless of Distance',
    },
    {
      id: 5,
      img: clarityn,
      title: 'Clarityn',
      price: 2000,
      desc: 'Order and purchase your drugs online, Rocason is Always Available to Serve You, Regardless of Distance',
    },
    {
      id: 6,
      img: dayNight,
      price: 2400,
      title: 'Day Night',
      desc: 'Order and purchase your drugs online, Rocason is Always Available to Serve You, Regardless of Distance',
    },
    {
      id: 7,
      img: benilyn,
      price: 1000,
      title: 'Benilyn',
      desc: 'Order and purchase your drugs online, Rocason is Always Available to Serve You, Regardless of Distance',
    },
    {
      id: 8,
      img: inhaler,
      price: 400,
      title: 'Inhaler',
      desc: 'Order and purchase your drugs online, Rocason is Always Available to Serve You, Regardless of Distance',
    },
    {
      id: 9,
      img: procold,
      price: 200,
      title: 'Procold',
      desc: 'Order and purchase your drugs online, Rocason is Always Available to Serve You, Regardless of Distance',
    },
  ],
  multivitamin: [
    {
      id: 1,
      img: wellwomanPlus,
      title: 'Wellwoman Plus',
      price: 4000,
      desc: 'Order and purchase your drugs online, Rocason is Always Available to Serve You, Regardless of Distance',
    },
    {
      id: 2,
      img: wellmanOriginal,
      title: 'Wellman Original',
      price: 7000,
      desc: 'Order and purchase your drugs online, Rocason is Always Available to Serve You, Regardless of Distance',
    },
    {
      id: 3,
      img: wellmanMax,
      title: 'Wellman Max',
      price: 5000,
      desc: 'Order and purchase your drugs online, Rocason is Always Available to Serve You, Regardless of Distance',
    },
    {
      id: 4,
      img: menopace,
      title: 'Menopace',
      price: 1500,
      desc: 'Order and purchase your drugs online, Rocason is Always Available to Serve You, Regardless of Distance',
    },
    {
      id: 5,
      img: wellwomanMax,
      title: 'Wellwoman Max',
      price: 4000,
      desc: 'Order and purchase your drugs online, Rocason is Always Available to Serve You, Regardless of Distance',
    },
    {
      id: 6,
      img: wellmanProtein,
      title: 'Wellman Protein',
      price: 4500,
      desc: 'Order and purchase your drugs online, Rocason is Always Available to Serve You, Regardless of Distance',
    },
    {
      id: 7,
      img: perfectil,
      title: 'Perfectil',
      price: 2000,
      desc: 'Order and purchase your drugs online, Rocason is Always Available to Serve You, Regardless of Distance',
    },
    {
      id: 8,
      img: pregnacareOriginal,
      title: 'pregnacare Original',
      price: 6500,
      desc: 'Order and purchase your drugs online, Rocason is Always Available to Serve You, Regardless of Distance',
    },
    {
      id: 9,
      img: pregnacarePlus,
      title: 'pregnacare Plus',
      price: 6000,
      desc: 'Order and purchase your drugs online, Rocason is Always Available to Serve You, Regardless of Distance',
    },
  ],
};

export default productData;
