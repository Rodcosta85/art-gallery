import { Link } from 'react-router-dom';

import Prev from '../../../public/shared/icon-back-button.svg'
import Next from '../../../public/shared/icon-next-button.svg'

interface FooterProps {
    currentPainting: any,
    prevSlug: string,
    nextSlug: string,
    currentIndex: number,
    totalPaintings: number
}

const index: React.FC<FooterProps> = ({ currentPainting,
    prevSlug,
    nextSlug,
    currentIndex,
    totalPaintings
}) => {

    const progressPercent = ((currentIndex + 1) / totalPaintings) * 100;

    return (
        <div className='flex flex-col gap-[1.5rem] pb-[1.5rem]'>
            <div
                className="progress-bar-container"
                style={{
                    width: '100%',
                    backgroundColor: '#E5E5E5', // A light gray background
                    height: '0.0625rem',
                }}
            >
                <div
                    className="progress-bar-fill"
                    style={{
                        width: `${progressPercent}%`, // The dynamic width
                        backgroundColor: '#000',     // A dark fill color
                        height: '100%',
                        transition: 'width 0.3s ease-in-out' // Smooth animation
                    }}
                />
            </div>
            <footer className="flex justify-between w-full">
                <div className="flex flex-col gap-spacing-100">
                    <h3 className='text-preset-3 font-bold'>
                        {currentPainting?.name}
                    </h3>
                    <p className='text-preset-5 opacity-75'>
                        {currentPainting?.artist.name}
                    </p>
                </div>

                <div className='flex gap-[2.5rem]'>
                    <Link to={`/painting/${prevSlug}`}>
                        <img
                            src={Prev}
                            alt="uma seta para voltar para o slide anterior"
                            className='transition-all duration-200 ease-in-out hover:opacity-30'
                        />
                    </Link>
                    <Link to={`/painting/${nextSlug}`}>
                        <img
                            src={Next}
                            alt="uma seta para ir para o slide seguinte"
                            className='transition-all duration-200 ease-in-out hover:opacity-30'
                        />
                    </Link>
                </div>
            </footer>
        </div>

    )
}

export default index