import LightboxBtn from '../../../public/shared/icon-view-image.svg'

interface ArtistProps {
    currentPainting: any
    triggerLightbox: () => void
}

const index: React.FC<ArtistProps> = ({ currentPainting, triggerLightbox }) => {
    return (
        <>
            <div className='w-212 h-156 flex'>

                {/* div para a imagem e o botão do lightbox */}
                <div className='relative'>
                    <img
                        src={currentPainting?.images.hero.large}
                        alt={currentPainting?.description}
                        className='w-120 h-140 object-cover relative z-10'
                    />
                    <button
                        type="button"
                        onClick={triggerLightbox}
                        className='flex gap-[1rem] items-center justify-center w-40 h-[2.5rem] p-[1rem] bg-black 
                        absolute z-20 left-[1rem] bottom-[5rem]
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
                <div className='flex flex-col justify-between'>
                    <div className='flex flex-col gap-[1.5rem] w-95 ml-[-4rem] pl-[4rem] pb-[4rem] relative z-40 bg-white'>
                        <h1 className='text-black text-preset-2 font-bold leading-lh-2 w-52'>
                            {currentPainting?.name}
                        </h1>
                        <p className='text-dark-gray text-preset-4 font-normal leading-lh-4'>
                            {currentPainting?.artist.name}
                        </p>
                    </div>

                    <img
                        src={currentPainting?.artist.image}
                        className='w-32 h-32 ml-[2rem]'
                    />
                </div>
                {/* div para o nome da pintura e a foto do artista */}
            </div>
        </>
    )
}

export default index