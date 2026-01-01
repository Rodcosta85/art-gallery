import { useState } from "react"
import { useNavigate } from "react-router"

import data from '../data.json'

import HomeCard from "../HomeCard"

import type { InfoProps } from '../typings'

function Index() {

  // estado/array que guarda as infos do json usando a tipificação como base
  const [artistInfo] = useState<InfoProps[]>(data);
  
  const navigate = useNavigate();

  const togglePaintingPage = (slug: string) => {
    navigate(`/painting/${slug}`);
  }

  return (
    <div className="flex flex-col gap-[2.5rem] pb-12">
      <hr className="w-full h-[1rem] text-light-gray"/>
      <div
        className="w-full grid grid-cols-2 grid-rows-10 gap-[2.5rem]
        lg:grid-cols-4 lg:grid-rows-10
        xl:grid-cols-5 xl:grid-rows-4
        "
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