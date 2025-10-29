import { useState } from "react"
import { useNavigate } from "react-router"

import data from './../data.json'

import HomeCard from "./../HomeCard"

import type { InfoProps } from './../typings'

function Index() {

  // estado/array que guarda as infos do json usando a tipificação como base
  const [artistInfo] = useState<InfoProps[]>(data);

  // estado para abrir o card da home e levar para a página single dele
  const [openPainting, setOpenPainting] = useState<string | null>(null);
  
  const navigate = useNavigate();

  const togglePaintingPage = (name: string, slug: string) => {
    setOpenPainting(prev => (prev === name ? null : name));
    navigate(`/artist/${slug}`);
  }

  return (
    <div className="flex flex-col gap-[2.5rem] pb-12">
      <hr className="w-full h-[1rem] text-light-gray"/>
      <div
        className="w-full grid grid-cols-5 grid-rows-4 gap-[2.5rem]"
      >
        <HomeCard
          artistInfo={artistInfo}
          togglePaintingPage={togglePaintingPage}
        />
      </div>
    </div>

  )
}

export default Index