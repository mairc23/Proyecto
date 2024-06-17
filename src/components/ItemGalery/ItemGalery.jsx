import './itemGalery.css'

function ItemGalery(props) {
  return (
    <div className="itemGalery">
      <a href="" className="buttonItemGalery">
        <div className="tag">
          <div className="name"><span>{props.tenis.name}</span></div>
          <div className="type"><span>{props.tenis.type}</span></div>
          <div className="price"><span>$ {props.tenis.price}</span></div>
        </div>
        <div className="cover">
          <img src={props.tenis.cover} alt="cover" className="coverImg" />
        </div>
      </a>
    </div>
  )
}

export default ItemGalery;