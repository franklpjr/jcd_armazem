import "./Footer.css"

const Footer = () => {

    return (
        <div>
            <div className="Footer-wrapper">
                <div className="col-sm-6 info contato">
                    <b>Contato</b><br/><br/>
                    <b>Whatsapp:</b>  (92)99297-8550<br/>
                    <b>Email:</b>  jcdarmazemdotijolo@gmail.com<br/><br/>
                    <b>Endereço:</b>  Estrada Manoel Urbano,<br/>Km 3, Zona Rural, Iranduba-Am.
                </div>
                <div className="col-sm-6 info horario">Horário<br/>Pagamento</div>   
            </div>
            <div className="row Footer-sign">
                <p>Desenvolvido por FJR Software 2023. Todos os direitos reservados.</p>   
            </div>
        </div>
    )

}

export default Footer;