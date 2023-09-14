import React, {useState} from 'react'
import './conferinta.css'



const Conferinta = () => {

  let data = [
    {
      id: 1,
      imgSrc: require('../../assets/conferinta/1.JPG'),
    },
    {
      id: 2,
      imgSrc: require('../../assets/conferinta/2.JPG'),
    },
    {
      id: 3,
      imgSrc: require('../../assets/conferinta/3.JPG'),
    },
    {
      id: 4,
      imgSrc: require('../../assets/conferinta/4.JPG'),
    },
    {
      id: 5,
      imgSrc: require('../../assets/conferinta/5.JPG'),
    },
    {
      id: 6,
      imgSrc: require('../../assets/conferinta/6.JPG'),
    },
    {
      id: 7,
      imgSrc: require('../../assets/conferinta/7.JPG'),
    },
    {
      id: 8,
      imgSrc: require('../../assets/conferinta/8.JPG'),
    },
    {
      id: 9,
      imgSrc: require('../../assets/conferinta/9.JPG'),
    },
    {
        id: 10,
        imgSrc: require('../../assets/conferinta/10.JPG'),
    },
    {
        id: 11,
        imgSrc: require('../../assets/conferinta/10.JPG'),
    },
    {
        id: 9,
        imgSrc: require('../../assets/conferinta/11.JPG'),
    },
    {
        id: 9,
        imgSrc: require('../../assets/conferinta/12.JPG'),
    },
    {
        id: 9,
        imgSrc: require('../../assets/conferinta/13.JPG'),
    },
    {
        id: 9,
        imgSrc: require('../../assets/conferinta/14.JPG'),
    },
    {
        id: 9,
        imgSrc: require('../../assets/conferinta/18.JPG'),
    },
    {
        id: 9,
        imgSrc: require('../../assets/conferinta/16.JPG'),
    },
    {
        id: 9,
        imgSrc: require('../../assets/conferinta/17.JPG'),
    },
    {
        id: 9,
        imgSrc: require('../../assets/conferinta/15.JPG'),
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
    <div className="container" id="conferinta">
      <h1 className="betel__conferinta_heading">Conferinta 2023</h1>
      <div className="betel__gallery" >
        {data.map((item, index) => (
          <div className="pics" key={index} onClick={() => openModal(item.imgSrc)}>
            <img src={item.imgSrc} style={{ width: '100%' }} alt={`Image ${index}`} />
          </div>
        ))}
      </div>
      {!isResponsive && modalOpen && (
        <div className="modal-overlay-conferinta">
          <div className="modal-conferinta">
            <img src={tempImgSrc} alt="Modal" style={calculateImageDimensions(tempImgSrc)}/>
            <button className="close-button" onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Conferinta