import { Routes, Route } from "react-router-dom";
import Home from './Home'
import ArtistTemplate from './ArtistTemplate'


const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/artist/:name' element={<ArtistTemplate />} />
        </Routes>

    )
}

export default AppRoutes;