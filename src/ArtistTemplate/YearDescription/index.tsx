interface ArtistProps {
    currentPainting: any
}

const index: React.FC<ArtistProps> = ({ currentPainting }) => {
    return (
        <>
            <div className='w-[29.75rem] h-[35.125rem] relative'>
                <h1 className='z-10 text-very-light-gray text-preset-1 font-bold leading-lh-1 tracking-[-0.0125rem]'>
                    {currentPainting?.year}
                </h1>

                <div className='absolute top-[110px] z-90 w-[21.875rem] h-[28.4375rem] flex flex-col justify-between items-start'>
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