import { useMemo } from 'react';
import {Navigate, useNavigate, useParams} from 'react-router-dom'
import {getProductById} from '../helpers'

export const ProductPage = () => {

  const { id } = useParams();
  const navigate = useNavigate();


  const onNavigateBack = () => {
    navigate(-1);
  }

  const art = getProductById(id); 

  if (!art){
    return <Navigate to="/home" />
  }
  
  return (
    <div className="row mt-5">
      <div className="col-4">
        <img 
          src={ `/assets/cards/${ id }.jpg` } 
          alt={ art.title }
          className="img-thumbnail animate__animated animate__fadeInLeft"
        />
      </div>

      <div className="col-8">
        <h3>{ art.title }</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item"> <b>Autor:</b> { art.autor } </li>
          <li className="list-group-item"> <b>Description:</b> { art.description } </li>
          <li className="list-group-item"> <b>Dimensiones:</b> { art.dimensiones } </li>
        </ul>

        {/* <h5 className="mt-3"> Characters </h5>
        <p>{ hero.characters }</p> */}

        <button 
          className="btn btn-outline-primary"
          onClick={ onNavigateBack }
        >
          Regresar
        </button>

      </div>

    </div>
  )
}