import Logo from './../../public/shared/logo.svg'

const index = () => {
  return (
    <div className="flex justify-between w-full">
        <a href="/"><img src={Logo} alt="the company name: 'Galleria.'" /></a>
        <button className="font-libre-baskerville text-preset-6 leading-lh-5 tracking-ls-6 text-dark-gray cursor-pointer">
            START SLIDESHOW
        </button>
      </div>
  )
}

export default index