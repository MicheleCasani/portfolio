import Navbar from "../components/Navbar"
import Video from "../components/Video"
import AboutMe from "../components/AboutMe"
import Technologies from "../components/Technologies"
import Myproject from "../components/Myproject"
import Footer from "../components/footer"
import Signature from "../components/Signature"

const MainPage = () => {
    return (
        <>
            {/* Video Background */}
            <Video />
            <Navbar />
            <AboutMe />
            <Technologies />
            <Myproject />
            <Signature />
            <Footer />
        </>
    )
}

export default MainPage
