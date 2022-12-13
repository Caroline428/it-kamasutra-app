import {Route, Routes} from "react-router-dom";
import Dialogs from "./pages/Dialogs/Dialogs";
import Profile from "./pages/Profile/Profile";
import News from "./pages/News/News";
import Settings from "./pages/Settings/Settings";
import Music from "./pages/Music/Music";

const AllRoutes = () => (
    <Routes>
        <Route path='/dialogs' element={<Dialogs/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/news' element={<News/>}/>
        <Route path='/settings' element={<Settings/>}/>
        <Route path='/music' element={<Music/>}/>
    </Routes>
)

export default AllRoutes