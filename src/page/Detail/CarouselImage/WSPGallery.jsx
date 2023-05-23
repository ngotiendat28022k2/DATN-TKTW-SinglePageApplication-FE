import { useState } from 'react'
import './styles.css'
import { Button } from '@mui/material'

const WSPGallery = ({galleryImages}) => {
  const [slideNumber, setSlideNumber] = useState(0)
  const [openModal, setOpenModal] = useState(false)
  const maxVisibleImages = 3; 
  const handleOpenModal = (index) => {
    setSlideNumber(index)
    setOpenModal(true)
  }
  // Close Modal
  const handleCloseModal = () => {
    setOpenModal(false)
  }

  // Previous Image
  const prevSlide = () => {
    slideNumber === 0 
    ? setSlideNumber( galleryImages.length -1 ) 
    : setSlideNumber( slideNumber - 1 )
  }

  // Next Image  
  const nextSlide = () => {
    slideNumber + 1 === galleryImages.length 
    ? setSlideNumber(0) 
    : setSlideNumber(slideNumber + 1)
  }

  let visibleImages = [];
  let remainingImages = [];

  if (galleryImages && galleryImages.length > 0) {
    visibleImages = galleryImages.slice(0, maxVisibleImages);
    remainingImages = galleryImages.slice(maxVisibleImages);
  }

  return (
    <div>

      {openModal && 
        <div className='sliderWrap'>
          <Button className='btnClose' onClick={handleCloseModal}><i className="fa-solid fa-xmark"></i></Button>
          <Button className='btnPrev' onClick={prevSlide}><i className="fa-solid fa-arrow-left"></i></Button>
          <Button className='btnNext' onClick={nextSlide}><i class="fa-solid fa-arrow-right"></i></Button>
          <div className='fullScreenImage'>
            <img src={galleryImages[slideNumber]} alt='' />
          </div>
        </div>
      }
      <div className='galleryWrap'>
        {
          galleryImages && visibleImages.map((slide, index) => {
            return(
              <div 
                className='single' 
                key={index}
                onClick={ () => handleOpenModal(index) }
              >
                <img className='w-full max-w-[76px]' src={slide} alt='' />
              </div>
            )
          })
        }
        {remainingImages.length > 0 && (
          <>
            <div className="text-[12] text-[#fff] bg-[#3d3e3f] py-[23px] px-[3px] rounded-[10px]" onClick={() => handleOpenModal(maxVisibleImages)}>
              +{remainingImages.length} more
            </div>
          </>
        )}
       
      </div>
    </div>
  )
}

export default WSPGallery