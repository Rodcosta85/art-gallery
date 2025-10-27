import { useNavigate, useParams } from 'react-router-dom';
import { useSlideshow } from '../Context';

import data from './../data.json'
import Logo from './../../public/shared/logo.svg'

const index = () => {
  const navigate = useNavigate();
  const params = useParams(); // Gets current artist ID if on an artist page
  const { isSlideshowActive, startSlideshow, stopSlideshow } = useSlideshow();

  const handleSlideshowToggle = () => {
    if (isSlideshowActive) {
      stopSlideshow();
    } else {
      startSlideshow();
      
      // When we start, we need to navigate to an artist page
      // to "kick off" the slideshow loop.
      
      // Check if we are *already* on an artist page
      const currentArtistId = params.id;
      
      if (currentArtistId) {
        // If yes, just start the loop (the page will handle the rest)
        // We don't even need to navigate.
      } else {
        // If no (e.g., we're on the homepage), 
        // navigate to the *first* artist to begin.
        const firstPainterId = data[0].name;
        navigate(`/artist/${firstPainterId}`);
      }
    }
  };

  return (
    <div className="flex justify-between w-full">
      <a href="/"><img src={Logo} alt="the company name: 'Galleria.'" /></a>
      <button
        onClick={handleSlideshowToggle}
        type="button"
        className="font-libre-baskerville text-preset-6 leading-lh-5 tracking-ls-6 text-dark-gray cursor-pointer">
        {isSlideshowActive ? 'STOP SLIDESHOW' : 'START SLIDESHOW'}
      </button>
    </div>
  )
}

export default index