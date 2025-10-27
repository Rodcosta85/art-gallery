import { Routes, Route } from "react-router-dom";
import Header from './Header'
import Home from './Home'
import ArtistTemplate from './ArtistTemplate'


const AppRoutes = () => {
    return (
        <div className="h-screen pt-[2.5rem] pb-[1.5rem] pr-[2.5rem] pl-[2.5rem] flex flex-col gap-[2.56rem] font-libre-baskerville bg-white">
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path='/artist/:slug' element={<ArtistTemplate />} />
            </Routes>
        </div>


    )
}

export default AppRoutes;