import React, {useState} from 'react'
import './botez.css'



const Botez = () => {

  let data = [
    {
      id: 1,
      imgSrc: require('../../assets/botez/1.jpeg'),
    },
    {
      id: 2,
      imgSrc: require('../../assets/botez/2.jpeg'),
    },
    {
      id: 3,
      imgSrc: require('../../assets/botez/3.jpeg'),
    },
    {
      id: 4,
      imgSrc: require('../../assets/botez/8.jpeg'),
    },
    {
      id: 5,
      imgSrc: require('../../assets/botez/5.jpeg'),
    },
    {
      id: 6,
      imgSrc: require('../../assets/botez/6.jpeg'),
    },
    {
      id: 7,
      imgSrc: require('../../assets/botez/7.jpeg'),
    },
    {
      id: 8,
      imgSrc: require('../../assets/botez/10.jpeg'),
    },
    {
      id: 9,
      imgSrc: require('../../assets/botez/9.jpeg'),
    },
    
    
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
    <div className="container" id="botez">
      <h1 className="betel__botez_heading">Botez 2022</h1>
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

export default Botez