import { useState } from 'react'
import { useParams } from "react-router-dom";

import Header from './../Header'
import ImagesTitle from './ImagesTitle'
import YearDescription from './YearDescription'
import Lightbox from './Lightbox'
import data from './../data.json'


const index = () => {

  const [lightbox, setLightbox] = useState<boolean>(false);

  const { name } = useParams<{ name: string }>();
  const artist = data.find((a) => a.slug === name);

  if (!artist) return <p>Painting not found: {name}</p>;


  const triggerLightbox = () => {
    setLightbox(prevState => !prevState);
  }


  return (
    <div className="h-screen pt-[2.5rem] pb-[1.5rem] pr-[2.5rem] pl-[2.5rem] flex flex-col gap-[2.56rem] font-libre-baskerville bg-white">
      <Header />
      <hr className="w-full h-[1rem] text-light-gray mb-[3.5rem]" />

      <div className='flex justify-between'>
        
        <ImagesTitle
          artist={artist}
          triggerLightbox={triggerLightbox}
        />

        <YearDescription
          artist={artist}
        />

      </div>

      <Lightbox
        artist={artist}
        triggerLightbox={triggerLightbox}
        lightbox={lightbox}
      />

    </div>
  )
}

export default index