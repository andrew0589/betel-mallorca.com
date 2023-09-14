import React, {useState} from 'react'
import './sarbatoareamultumirii.css'



const SarbatoareaMultumirii = () => {

  let data = [
    {
      id: 1,
      imgSrc: require('../../assets/sarbatoarea_multumirii/sarbatoarea_multumirii_2022_1.jpg'),
    },
    {
      id: 2,
      imgSrc: require('../../assets/sarbatoarea_multumirii/sarbatoarea_multumirii_2022_2.jpg'),
    },
    {
      id: 3,
      imgSrc: require('../../assets/sarbatoarea_multumirii/sarbatoarea_multumirii_2022_3.jpg'),
    },
    {
      id: 4,
      imgSrc: require('../../assets/sarbatoarea_multumirii/sarbatoarea_multumirii_2022_4.jpg'),
    },
    {
      id: 5,
      imgSrc: require('../../assets/sarbatoarea_multumirii/sarbatoarea_multumirii_2022_5.jpg'),
    },
    {
      id: 6,
      imgSrc: require('../../assets/sarbatoarea_multumirii/sarbatoarea_multumirii_2022_6.jpg'),
    },
    {
      id: 7,
      imgSrc: require('../../assets/sarbatoarea_multumirii/sarbatoarea_multumirii_2022_7.jpg'),
    },
    {
      id: 8,
      imgSrc: require('../../assets/sarbatoarea_multumirii/sarbatoarea_multumirii_2022_8.jpg'),
    },
    {
      id: 9,
      imgSrc: require('../../assets/sarbatoarea_multumirii/sarbatoarea_multumirii_2022_9.jpg'),
    }
  ]

  
  const [modalOpen, setModalOpen] = useState(false);
  const [tempImgSrc, setTempImgSrc] = useState('');
  const openModal = (imgSrc) => {
    setTempImgSrc(imgSrc);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setTempImgSrc('');
  };

  const calculateImageDimensions = (imgSrc) => {
    const img = new Image();
    img.src = imgSrc;

    const maxWidth = '80%';
    const maxHeight = '80vh';

    let width, height;

    if (img.width / img.height > window.innerWidth / window.innerHeight) {
      width = maxWidth;
      height = (maxWidth * img.height) / img.width;
    } else {
      height = maxHeight;
      width = (maxHeight * img.width) / img.height;
    }

    return {
      width: width,
      height: height,
    };
  };

  const isResponsive = window.innerWidth <= 991; // Define the breakpoint for responsiveness


  return (
    <div className="container" id="sarbatoarea">
      <h1 className="betel__sarbatoarea_heading">Sărbătoarea mulțumirii 2022</h1>
      <div className="betel__gallery" >
        
        {data.map((item, index) => (
          <div className="pics" key={index} onClick={() => openModal(item.imgSrc)}>
            <img src={item.imgSrc} style={{ width: '100%' }} alt={`Image ${index}`} />
          </div>
        ))}
      </div>
      {!isResponsive && modalOpen && (
        <div className="modal-overlay-sarbatoarea">
          <div className="modal-sarbatoarea">
            <img src={tempImgSrc} alt="Modal" style={calculateImageDimensions(tempImgSrc)}/>
            <button className="close-button-sarbatoarea" onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SarbatoareaMultumirii