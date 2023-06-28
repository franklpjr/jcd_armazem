import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./CardsCh.css"
import  chmedia from "../../assets/1peixe.png"
import  chgrande from "../../assets/2peixes.png"
import  chegrande from "../../assets/3peixes.png"

function CardsCh() {
  return (
   <div className='cards-wrapper'>
    <Card style={{ width: '14rem' }} className='card-style'>
      <Card.Img variant="top" src={chmedia} className='card-icons'/>
      <Card.Body>
        <Card.Title>Média</Card.Title>
        <Card.Text>
          Altura: 230cm<br/>
          Largura: 62cm<br/>
          Fundo: 56cm<br/>
        </Card.Text>
        {/*<Button variant="primary">Go somewhere</Button>*/}
      </Card.Body>
    </Card>
    
    <Card style={{ width: '14rem' }} className='card-style'>
      <Card.Img variant="top"  src={chgrande} className='card-icons'/>
      <Card.Body>
        <Card.Title>Grande</Card.Title>
        <Card.Text>
          Altura: 230cm<br/>
          Largura: 77cm<br/>
          Fundo: 56cm<br/>
        </Card.Text>
      </Card.Body>
    </Card>

    <Card style={{ width: '14rem' }} className='card-style'>
      <Card.Img variant="top" src={chegrande} className='card-icons'/>
      <Card.Body>
        <Card.Title>Extra Grande</Card.Title>
        <Card.Text>
          Altura: 230cm<br/>
          Largura: 77cm<br/>
          Fundo: 56cm<br/>
        </Card.Text>
      </Card.Body>
    </Card>

    <Card style={{ width: '14rem' }} className='card-style'>
      <Card.Img variant="top" src={chgrande} className='card-icons' />
      <Card.Body>
        <Card.Title>Alto Relevo</Card.Title>
        <Card.Text>
          Altura: 230cm<br/>
          Largura: 77cm<br/>
          Fundo: 56cm<br/>
        </Card.Text>
      </Card.Body>
    </Card>

    </div>
  );
}

export default CardsCh;