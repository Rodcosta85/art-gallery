import { useState, useEffect } from 'react'
import { useParams, useNavigate } from "react-router-dom";
import { useSlideshow } from '../Context';

import ImagesTitle from './ImagesTitle'
import YearDescription from './YearDescription'
import PseudoFooter from './PseudoFooter'
import Lightbox from './Lightbox'
import data from '../data.json'


const index = () => {

  const [lightbox, setLightbox] = useState<boolean>(false);

  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { isSlideshowActive } = useSlideshow();

  const currentIndex = data.findIndex(a => a.slug === slug)

  // se você clicar e não encontrar, mostra essa mensagem
  if (currentIndex === -1) {
    return <p>Painting not found: {slug}</p>;
  }

  // usa "data" para pegar o item atual
  const currentPainting = data[currentIndex]


  // encontra o artista e os index de anterior/proximo
  const totalPaintings = data.length;
  const prevIndex = (currentIndex - 1 + totalPaintings) % totalPaintings;
  const nextIndex = (currentIndex + 1) % totalPaintings;

  // pega as slugs de data
  const nextPainterSlug = data[nextIndex].slug;
  const prevPainterSlug = data[prevIndex].slug;

  // slideshow automático
  useEffect(() => {
    if (isSlideshowActive) {
      const timer = setTimeout(() => {
        // Navigate to the next artist
        navigate(`/painting/${nextPainterSlug}`);
      }, 5000); // 5-second delay

      // Clean up the timer
      return () => clearTimeout(timer);
    }
  }, [slug, nextPainterSlug, navigate, isSlideshowActive])



  const triggerLightbox = () => {
    setLightbox(prevState => !prevState);
  }


  return (
    <>
      <hr className="w-full h-[1rem] text-light-gray mb-[3.5rem]" />
      <div className='h-full flex flex-col justify-between gap-[5rem]'>
        <div className='flex flex-col justify-between xl:flex-row gap-16 xl:gap-0'>
          <ImagesTitle
            currentPainting={currentPainting}
            triggerLightbox={triggerLightbox}
          />

          <YearDescription
            currentPainting={currentPainting}
          />
        </div>
        <PseudoFooter
          currentPainting={currentPainting}
          prevSlug={prevPainterSlug}
          nextSlug={nextPainterSlug}
          currentIndex={currentIndex}
          totalPaintings={totalPaintings}
        />
      </div>

      <Lightbox
        currentPainting={currentPainting}
        triggerLightbox={triggerLightbox}
        lightbox={lightbox}
      />
    </>
  )
}

export default index