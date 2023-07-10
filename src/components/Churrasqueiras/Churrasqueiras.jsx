import CardsCh from "../CardsCh/CardsCh";
import GalleryCh from "../MultiCarouselCh/MultiCarouselCh";
import "./Churrasqueiras.css"
import whatsapp from "../../assets/whatsapp-icon.png"

const Churrasqueiras = () => {

    return (
        <div id="churrasqueiras" className="churrasqueiras-wrapper">
            <div>
                <h1>Churrasqueiras <b>pré-moldadas</b></h1>
                <p>Diversas opções de revestimento à sua escolha:</p>    
                <GalleryCh />
                <CardsCh />
            </div>
            <div className="botao-zap-wrapper">
                <a href="https://wa.me/message/WRCA23A2C33DP1" class="botao-zap">
                    Compre agora
                    <img className="zap-icon" src={whatsapp} width="35px"/>
                </a>
            </div>
        </div>
    )

}

export default Churrasqueiras;