import React, {useState} from 'react'
import './gallery.css'



const Gallery = () => {

  let data = [
    {
      id: 1,
      imgSrc: require('../../assets/aaron-burden-cmIqkMPfpMQ-unsplash.jpg'),
    },
    {
      id: 2,
      imgSrc: require('../../assets/andrew-seaman-Y3WEhjQivTI-unsplash.jpg'),
    },
    {
      id: 3,
      imgSrc: require('../../assets/cross-6703536__340.jpg'),
    },
    {
      id: 4,
      imgSrc: require('../..//assets/rod-long-DRgrzQQsJDA-unsplash.jpg'),
    },
    {
      id: 5,
      imgSrc: require('../..//assets/1.jpg'),
    },
    {
      id: 6,
      imgSrc: require('../..//assets/2.jpg'),
    },
    {
      id: 7,
      imgSrc: require('../..//assets/3.jpg'),
    },
    {
      id: 8,
      imgSrc: require('../..//assets/4.jpg'),
    },
    {
      id: 9,
      imgSrc: require('../..//assets/5.jpg'),
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
  return (
    <div className="container" id="gallery">
      <h1 className="heading">Conferinta</h1>
      <div className="betel__gallery" >
        {data.map((item, index) => (
          <div className="pics" key={index} onClick={() => openModal(item.imgSrc)}>
            <img src={item.imgSrc} style={{ width: '100%' }} alt={`Image ${index}`} />
          </div>
        ))}
      </div>
      {modalOpen && (
        <div className="modal-overlay">
          <div className="modal">
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

export default Gallery