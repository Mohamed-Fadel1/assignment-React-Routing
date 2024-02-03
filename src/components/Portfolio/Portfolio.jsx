
// import React, { useEffect } from 'react';
// import style from "./Portfolio.module.css";
// import img1 from "../../assets/images/poert1.png";
// import img2 from "../../assets/images/port2.png";
// import img3 from "../../assets/images/port3.png";

// export default function Portfolio() {


 

//   return (
//     <>
//       <div className="portfolio text-center">
//         <h2 className={`h1 fw-bolder py-4 ${style.colorh1}`}>PORTFOLIO COMPONENT</h2>
//       </div>
//       <div className="container py-5">
//         <div className="row g-5">
//           {[
//             { src: img1, alt: 'Image 1' },
//             { src: img2, alt: 'Image 2' }, 
//             { src: img3, alt: 'Image 3' },
//             { src: img2, alt: 'Image 4' },
//             { src: img3, alt: 'Image 5' },
//             { src: img1, alt: 'Image 6' },
//           ].map((image, index) => (
//             <div key={index} className="col-md-4">
//               <img
//                 src={image.src}
//                 className={`w-100 rounded-4 ${style.portfolioImage} ${ style.cursorPointer } `}
//                 alt={image.alt}
//               />
//             </div>
            
//           ))}
//         </div>
//       </div>
//       <div className= { `lightBox d-none ${style.lightBox}`} >
//         <div className= { `boxData ${style.boxData}`} ></div>
//       </div>
      
//     </>
    
//   );
  
// }












// import React, { useEffect, useState } from 'react';
// import style from "./Portfolio.module.css";
// import img1 from "../../assets/images/poert1.png";
// import img2 from "../../assets/images/port2.png";
// import img3 from "../../assets/images/port3.png";

// export default function Portfolio() {
//   const [showLightBox, setShowLightBox] = useState(false);
//   const [selectedImage, setSelectedImage] = useState(null);

//   const openLightBox = (imageSrc) => {
//     setSelectedImage(imageSrc);
//     setShowLightBox(true);
//   };

//   useEffect(() => {
    
//   }, []);

//   return (
//     <>
//       <div className="portfolio text-center">
//         <h2 className={`h1 fw-bolder py-4 ${style.colorh1}`}>PORTFOLIO COMPONENT</h2>
//       </div>
//       <div className="container py-5">
//         <div className="row g-5">
//           {[
//             { src: img1, alt: 'Image 1' },
//             { src: img2, alt: 'Image 2' }, 
//             { src: img3, alt: 'Image 3' },
//             { src: img2, alt: 'Image 4' },
//             { src: img3, alt: 'Image 5' },
//             { src: img1, alt: 'Image 6' },
//           ].map((image, index) => (
//             <div key={index} className="col-md-4">
//               <img src={image.src} className={`w-100 rounded-4 ${style.portfolioImage} ${style.cursorPointer}`}alt={image.alt}
//                 onClick={() => openLightBox(image.src)}/>
//             </div>
//           ))}
//         </div>
//       </div>
//       {showLightBox && (
//         <div className={`lightBox ${style.lightBox}`}>
//           <div className={`boxData ${style.boxData}`} style={{ backgroundImage: `url(${selectedImage})` }}></div>
//         </div>
//       )}
//     </>
//   );
// }




import React, { useEffect, useState } from 'react';
import style from "./Portfolio.module.css";
import img1 from "../../assets/images/poert1.png";
import img2 from "../../assets/images/port2.png";
import img3 from "../../assets/images/port3.png";

const Portfolio = () => {
  const [showLightBox, setShowLightBox] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openLightBox = (imageSrc) => {
    setSelectedImage(imageSrc);
    setShowLightBox(true);
  };

  const closeLightBox = () => {
    setShowLightBox(false);
    setSelectedImage(null);
  };

  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  useEffect(() => {
    document.addEventListener('click', closeLightBox);

    return () => {
      document.removeEventListener('click', closeLightBox);
    };
  }, []);

  return (
    <>
      <div className="portfolio text-center">
        <h2 className={`h1 fw-bolder py-4 ${style.colorh1}`}>PORTFOLIO COMPONENT</h2>
      </div>
      <div className="container py-5">
        <div className="row g-5">
          {[
            { src: img1, alt: 'Image 1' },
            { src: img2, alt: 'Image 2' }, 
            { src: img3, alt: 'Image 3' },
            { src: img2, alt: 'Image 4' },
            { src: img3, alt: 'Image 5' },
            { src: img1, alt: 'Image 6' },
          ].map((image, index) => (
            <div key={index} className="col-md-4">
              <img
                src={image.src}
                className={`w-100 rounded-4 ${style.portfolioImage} ${style.cursorPointer}`}
                alt={image.alt}
                onClick={(e) => {
                  stopPropagation(e);
                  openLightBox(image.src);
                }}
              />
            </div>
          ))}
        </div>
      </div>
      {showLightBox && (
        <div className={`lightBox ${style.lightBox}`} onClick={closeLightBox}>
          <div className={`boxData ${style.boxData}`} style={{ backgroundImage: `url(${selectedImage})` }} onClick={stopPropagation}></div>
        </div>
      )}
    </>
  );
};

export default Portfolio;
