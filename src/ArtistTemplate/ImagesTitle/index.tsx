import LightboxBtn from '../../../public/shared/icon-view-image.svg'

interface ArtistProps {
    currentPainting: any
    triggerLightbox: () => void
}

const index: React.FC<ArtistProps> = ({ currentPainting, triggerLightbox }) => {
    return (
        <>
            <div className='w-full xl:w-212 xl:h-156 flex flex-col md:flex-row xl:flex-row md:justify-between'>

                {/* div para a imagem e o botão do lightbox */}
                <div className='relative'>
                    <img
                        src={currentPainting?.images.hero.large}
                        alt={currentPainting?.description}
                        className='w-full xl:w-120 h-[280px] md:h-[560px] xl:h-140 object-cover relative z-10'
                    />
                    <button
                        type="button"
                        onClick={triggerLightbox}
                        className='flex gap-[1rem] items-center justify-center w-40 h-[2.5rem] p-[1rem] bg-black 
                        absolute z-20 left-[1rem] top-[1rem] md:bottom-4 xl:bottom-[5rem]
                        text-white text-preset-7 font-bold leading-mobile-lh-4 tracking-[0.125rem]
                        cursor-pointer transition-all duration-300 ease-in-out
                        hover:bg-translucent-white
                    '>
                        <img 
                        src={LightboxBtn} 
                        alt="four arrows pointing outwards in the diagonal" 
                        />
                       VIEW IMAGE
                    </button>
                </div>
                {/* div para a imagem e o botão do lightbox */}


                {/* div para o nome da pintura e a foto do artista */}
                <div className='flex flex-col justify-start -mt-12'>
                    <div className='flex flex-col gap-2 w-[90%]
                    xl:justify-between xl:gap-6 xl:w-95 xl:ml-[-4rem] xl:mt-0 xl:pl-[4rem] xl:pb-[4rem]
                    md:w-fit md:ml-[-5rem] md:mt-0 md:gap-6
                    pb-3 p-6 relative z-40 bg-white'>
                        <h1 className='text-black text-mobile-preset-2 md:text-preset-2 xl:text-preset-2 font-bold leading-lh-2 w-full xl:w-70'>
                            {currentPainting?.name}
                        </h1>
                        <p className='text-dark-gray text-mobile-preset-4 md:text-preset-4 xl:text-preset-4 font-normal leading-lh-4'>
                            {currentPainting?.artist.name}
                        </p>
                    </div>
                    <img
                        src={currentPainting?.artist.image}
                        className='w-32 h-32 md:ml-8 xl:ml-[2rem] ml-6'
                    />
                </div>
                {/* div para o nome da pintura e a foto do artista */}
            </div>
        </>
    )
}

export default index