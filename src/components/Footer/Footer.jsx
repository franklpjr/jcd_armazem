import Mapa from "../Mapa/Mapa";
import "./Footer.css"

const Footer = () => {

    return (
        <div>
            <div className="Footer-wrapper">
                <div className="col-sm-4 info mapa"> 
                    <Mapa />
                </div>
                <div className="col-sm-4 info contato">
                    <b>Contato</b><br/><br/>
                    <b>Whatsapp:</b>  (92)99297-8550<br/>
                    <b>Email:</b>  jcdarmazemdotijolo@gmail.com<br/><br/>
                    <b>Endereço:</b>  Estrada Manoel Urbano,<br/>Km 3, Zona Rural, Iranduba-Am.
                </div>
                <div className="col-sm-4 info horario">
                    <b>Horário</b><br/>
                    Segunda à sexta das 7h às 17h<br/>
                    Sábados, domingos e feriados das 7h30 às 11h30<br/><br/>

                    <b>Pagamento</b><br/>
                    Aceitamos todos os cartões de crédito, débito e pix<br/>
                    
                </div>   
            </div>
            <div className="row Footer-sign">
                <p>Desenvolvido por FJR Software 2023. Todos os direitos reservados.</p>   
            </div>
        </div>
    )

}

export default Footer;

//AIzaSyAG2HfX3CPZPeCtoNmSn1Yc4qogO88o9UU key=API_KEY

//AIzaSyBh7prLsV99429tnwBek-aVYA2-jCcRcc0 