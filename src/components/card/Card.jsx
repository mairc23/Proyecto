import './card.css';

function Card(props) {
  return (
    <div className="card">
      <div className="coverCard"><img src={props.cover} alt="" className="imgCard" /></div>
      <h2 className="titleCard"><span>{props.title}</span></h2>
      <p className="descriptionCard"><span>{props.description}</span></p>
    </div>
  );
}

export default Card;