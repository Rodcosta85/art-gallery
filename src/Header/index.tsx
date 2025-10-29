import { useSlideshow } from '../Context';
import Logo from '../../public/shared/logo.svg'

const index = () => {
  const { isSlideshowActive, startSlideshow, stopSlideshow } = useSlideshow();

  const handleSlideshowToggle = () => {
    if (isSlideshowActive) {
      stopSlideshow();
    } else {
      startSlideshow();
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