import PropTypes from "prop-types";
import { Link } from 'react-router-dom';
export const CardArt = ({
  id,
  title,
  autor,
  description,
  dimensiones,
  category,


}) => {

  // CardSculture.propTypes = {
  //   title: PropTypes.string.isRequired,
  //   text: PropTypes.string,
  //   url: PropTypes.string,
  //   imageSource: PropTypes.string
  // };

  const pictureImage = `/assets/cards/${id}.jpg`

  return (

    <div className="col-md-4 col-lg-4 col-xs-4 col-xl-4 mb-4" key={id}>

      <div className="card text-center bg-dark animate__animated animate__fadeInUp">
        <div className="overflow">
          <img src={pictureImage} alt="a wallpaper" className="card-img-top" />
        </div>
        <div className="card-body text-light">
          <h4 className="card-title">{title}</h4>
          <p className="card-text text-secondary">
            {description
              ? description
              : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. "}
          </p>
                      {/* <a
             
              target="_blank"
              className="btn btn-outline-secondary border-0"
              rel="noreferrer"
            >
              ..mas
               
            </a> */}
            <Link to={`/product/${id}`}>Mas..</Link>
          {/* link que vaya a prudcutpage para mostrar los detalles  */}
       

        </div>
      </div>

    </div>
  )
}
