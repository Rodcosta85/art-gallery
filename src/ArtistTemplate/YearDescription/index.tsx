interface ArtistProps {
    currentPainting: any
}

const index: React.FC<ArtistProps> = ({ currentPainting }) => {
    return (
        <>
            <div className='w-full xl:w-[29.75rem] xl:h-[35.125rem] relative md:justify-center'>
                <h1 className='z-10 text-very-light-gray text-mobile-preset-1 md:text-preset-1 xl:text-preset-1 font-bold leading-lh-1 tracking-[-0.0125rem]'>
                    {currentPainting?.year}
                </h1>

                <div className='md:absolute xl:absolute top-[110px] z-90 xl:w-[21.875rem] xl:h-[28.4375rem] gap-16 flex flex-col justify-between items-start'>
                    <p className='text-dark-gray text-mobile-preset-3 font-bold leading-mobile-lh-3 tracking-[-0.01563rem]'>
                        {currentPainting?.description}
                    </p>
                    <a href={currentPainting?.source}>
                        <button className='text-mobile-preset-5 text-dark-gray font-bold leading-mobile-lh-5 tracking-[0.125rem] cursor-pointer
                        hover:text-black
                        '>
                            GO TO SOURCE
                        </button>
                    </a>

                </div> 
            </div>
        </>
    )
}

export default index