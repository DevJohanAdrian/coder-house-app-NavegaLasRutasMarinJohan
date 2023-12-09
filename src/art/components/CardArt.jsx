import "../css/card.css";
// import "../css/card-details.scss"
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';
export const CardArt = ({
  id,
  title,
  autor,
  value,
  description,
  dimensions,
  category,
  imageId


}) => {

  // CardSculture.propTypes = {
  //   title: PropTypes.string.isRequired,
  //   text: PropTypes.string,
  //   url: PropTypes.string,
  //   imageSource: PropTypes.string
  // };

  // const pictureImage = `/assets/cards/${id}.jpg` // se cambia d firebase
  const pictureImage = `/assets/cards/${imageId}`

  return (


    <div className="col-md-4 d-flex justify-content-center" key={id}>
      <div className="card p-2">
        <div className="text-center"> <img src={pictureImage} className="card-img-top" alt={title} /></div>
        <div className="content">
          <div className="d-flex justify-content-between align-items-center"> <span className="category">{autor}</span>
            <span className="price">${value}</span> </div>
          <Link to={`/product/${id}`}>
          
            <p className="card-details hover">{title}</p>
            <p className="card-details">{dimensions}</p>
          
        
          </Link>
          {/* <div className="buttons d-flex justify-content-center">
            <button className="btn btn-outline-dark mr-1">Mas..</button>
            <button className="btn btn-primary">Add to cart</button> 
          </div> */}

        </div>
      </div>
    </div>


  )
}
