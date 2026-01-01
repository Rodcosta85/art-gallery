interface ArtistProps {
    currentPainting: any
    triggerLightbox: () => void,
    lightbox: boolean
}

const index:React.FC<ArtistProps> = ({ currentPainting, triggerLightbox, lightbox }) => {
    return (
        <>
            <div className={lightbox ? 'relative z-99 flex justify-center items-center w-full h-full' : 'hidden'}>
                <div className='bg-black fixed top-0 left-0 opacity-80 w-full h-full'></div>
                <div className='w-[60%] xl:w-[57.31rem] fixed top-20 left-[5%] xl:left-[30%] flex flex-col gap-[2rem]'>
                    <button
                        className='self-end cursor-pointer text-white text-mobile-preset-3 font-bold leading-mobile-lh-3 tracking-[-0.01563rem]'
                        onClick={triggerLightbox}>
                        CLOSE
                    </button>
                    <img
                        src={currentPainting?.images.gallery}
                        className='w-[57.31rem] h-178 object-cover' />
                </div>
            </div>
        </>
    )
}

export default index