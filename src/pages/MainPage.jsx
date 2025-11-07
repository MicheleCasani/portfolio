import Navbar from "../components/Navbar"
import Video from "../components/Video"
import AboutMe from "../components/AboutMe"
import Technologies from "../components/Technologies"

const MainPage = () => {
    return (
        <>
            {/* Video Background */}
            <Video />
            <Navbar />
            <AboutMe />
            <Technologies />
        </>
    )
}

export default MainPage
