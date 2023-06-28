import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./Cards.css"
import whatsapp from "../../assets/whatsapp-icon.png"
import palet from "../../assets/palet-icon.png"
import delivery from "../../assets/delivery-icon.png"
import years from "../../assets/32-icon.png"

function Cards() {
  return (
   <div className='cards-wrapper'>
   <Card style={{ width: '14rem' }} className='card-style'>
      <Card.Img variant="top" src={years} className='card-icons'/>
      <Card.Body>
        <Card.Title>32 anos no mercado</Card.Title>
        <Card.Text>
          Desde 1991, nossa empresa está localizada no mesmo endereço há 32 anos como fábrica e <br/>há 3 anos como loja.
        </Card.Text>
        {/*<Button variant="primary">Go somewhere</Button>*/}
      </Card.Body>
    </Card>
    
    <Card style={{ width: '14rem' }} className='card-style'>
      <Card.Img variant="top"  src={delivery} className='card-icons'/>
      <Card.Body>
        <Card.Title>Rapidez na entrega</Card.Title>
        <Card.Text>
          Receba suas compras em <b>até 3 dias úteis</b> <br/> após a confirmação do pagamento, podendo ser no mesmo dia.
        </Card.Text>
      </Card.Body>
    </Card>

    <Card style={{ width: '14rem' }} className='card-style'>
      <Card.Img variant="top" src={whatsapp} className='card-icons'/>
      <Card.Body>
        <Card.Title>Compre via Whatsapp</Card.Title>
        <Card.Text>
          Faça suas compras sem precisar sair de casa, negociando via whatsapp e pagando via PIX.
        </Card.Text>
      </Card.Body>
    </Card>

    <Card style={{ width: '14rem' }} className='card-style'>
      <Card.Img variant="top" src={palet} className='card-icons' />
      <Card.Body>
        <Card.Title>Produtos paletizados</Card.Title>
        <Card.Text>
          Tijolos, telhas e blocos 100% paletizados, diminuindo perdas e tempo de desembarque.
        </Card.Text>
      </Card.Body>
    </Card>

    </div>
  );
}

export default Cards;