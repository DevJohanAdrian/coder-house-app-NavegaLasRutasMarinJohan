
import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string'

import { useForm } from '../../hooks/useForm';
import { CardArt } from '../components';
import { getProductByName } from '../helpers';

export const SearchPage = () => {

  const navigate = useNavigate(); //para navegar
  const location = useLocation(); // para ver el ojeto de la ruta en donde estoy

  const query = queryString.parse( location.search ); // paquete de mpm
  const { q = '' } = queryString.parse( location.search ); // paquete de mpm si la q no viene es un string vacio (q proviene de location.search )
  const products = getProductByName(q);

  // Para mostrar  las alerts
  const showSearch = (q.length === 0);
  const showError  = (q.length > 0) && products.length === 0;


  const { searchText, onInputChange } = useForm({
    searchText: q
  });



  const onSearchSubmit = (event) =>{
    event.preventDefault();
    // if ( searchText.trim().length <= 1 ) return; // para buscar con minimo 2 letras

    navigate(`?q=${ searchText }`); //query partameter  con lo que la persona busco en esta misma ruta
  }


  return (
    <>
      <h1>Search</h1> 
      <hr />

      <div className="row">

          <div className="col-5">
            <h4>Searching</h4>
            <hr />
            <form onSubmit={ onSearchSubmit }>
              <input 
                type="text"
                placeholder="Search a hero"
                className="form-control"
                name="searchText"
                autoComplete="off"
                value={ searchText }
                onChange={ onInputChange }
              />

              <button className="btn btn-outline-primary mt-1">
                Search
              </button>
            </form>
          </div>

          <div className="col-7">
            <h4>Results</h4>
            <hr />

            {/* {
              ( q === '' )
                ? <div className="alert alert-primary">Search a hero</div>
                : ( heroes.length === 0 ) 
                  && <div className="alert alert-danger">No hero with <b>{ q }</b></div>
            } */}
            
            <div className="alert alert-primary animate__animated animate__fadeIn" 
                style={{ display: showSearch ? '' : 'none' }}>
              Search a hero
            </div>

            <div className="alert alert-danger animate__animated animate__fadeIn" 
                style={{ display: showError ? '' : 'none' }}>
              No hero with <b>{ q }</b>
            </div>


            {
              products.map( art => (
                <CardArt key={ art.id } {...art } />
              ))
            }

          </div>
      </div>
      

    </>
  )
}