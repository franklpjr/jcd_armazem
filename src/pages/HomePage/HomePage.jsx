
import AquiVoceEncontra from "../../components/AquiVoceEncontra/AquiVoceEncontra";
import CarouselHome from "../../components/CarouselHome/CarouselHome";
import Churrasqueiras from "../../components/Churrasqueiras/Churrasqueiras";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import PorqueNos from "../../components/PorqueNos/PorqueNos";
import QuemSomos from "../../components/QuemSomos/QuemSomos";
import "./HomePage.css"

const HomePage = () => {


    return (
        <div>
            <Navbar /> {/* Para criar o navbar, rodei o comando npm install styled-components@latest e segui os passos do site https://levelup.gitconnected.com/how-to-create-a-responsive-hamburger-navigation-menu-reactjs-and-styled-components-59ce167ed543 . */}
            <CarouselHome />
            <QuemSomos />
            <PorqueNos />
            <AquiVoceEncontra />
            <Churrasqueiras />
            <Footer />
        </div>
    )

}

export default HomePage;