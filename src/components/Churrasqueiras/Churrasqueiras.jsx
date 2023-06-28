import CardsCh from "../CardsCh/CardsCh";
import GalleryCh from "../MultiCarouselCh/MultiCarouselCh";
import "./Churrasqueiras.css"

const Churrasqueiras = () => {

    return (
        <div className="churrasqueiras-wrapper">
            <h1>Churrasqueiras <b>pré-moldadas</b></h1>
            <p>Diversas opções de revestimento à sua escolha:</p>    
            <GalleryCh />
            <CardsCh />
        </div>
    )

}

export default Churrasqueiras;