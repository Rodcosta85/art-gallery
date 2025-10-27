import type { InfoProps } from './../typings'

interface CardProps {
    artistInfo: InfoProps[],
    togglePaintingPage: (name: string, slug: string) => void
}

const index: React.FC<CardProps> = ({ artistInfo, togglePaintingPage }) => {
    return (
        <>
            {artistInfo.map((painting, index: number) => (
                <button
                    key={index}
                    onClick={() => togglePaintingPage(painting.name, painting.slug)}
                    className="relative w-full h-full cursor-pointer rounded-[3px] "
                >
                    <img
                        // source da pintura
                        src={painting.images.thumbnail}
                        // texto alternativo caso a imagem não apareça e para screenreaders
                        alt={painting.description}
                        className="w-full h-full object-cover rounded-[3px]"
                    />
                    <div className="absolute bottom-0 left-0 w-full p-[2rem] flex flex-col gap-2 items-start bg-linear-to-b from-black/0 to-black/84 rounded-b-[3px]">
                        <h1 className="text-white text-mobile-preset-2 text-left font-bold">
                            {/* nome da pintura */}
                            {painting.name}
                        </h1>
                        <p className="text-white text-preset-5 font-normal text-left opacity-75">
                            {/* nome do artista */}
                            {painting.artist.name}
                        </p>
                    </div>

                </button>
            ))}
        </>
    )
}

export default index