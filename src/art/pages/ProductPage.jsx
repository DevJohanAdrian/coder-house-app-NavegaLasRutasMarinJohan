import { useMemo, useEffect, useState, useContext } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom'
// import { getProductById } from '../helpers' // se cambia d firebase
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import Swal from 'sweetalert2'
import 'animate.css';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase/config'
import { CartContext } from '../contexts/CartContext';

export const ProductPage = () => {



  const [artDetail, setArtDetail] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();


  const [cart, setCart] = useContext(CartContext)


  const addToCart = () => {
    setCart((currItems) => {
      const isItemsFound = currItems.find((item) => item.id === id);
      if (isItemsFound) {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item };
          } else {
            return item;
          }
        });
      } else {
        return [...currItems, { ...artDetail }];
      }


    });

    Swal.fire({
      title: 'Producto agregado!',
      icon: "success",
      allowEscapeKey: false,
      allowOutsideClick: false,
      confirmButtonColor: "#212529",
      confirmButtonText: "Okay"
    })
  };

  const removeItem = (id) => {
    setCart((currItems) => {
      if (currItems.find((item) => item.id === id)?.quantity === 1) {
        return currItems.filter((item) => item.id !== id);
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
    Swal.fire({
      title: 'Producto retirado con exito!',
      icon: "success",
      allowEscapeKey: false,
      allowOutsideClick: false,
      confirmButtonColor: "#212529",
      confirmButtonText: "Okay"
    })
  };

  // const getQuantityById = (id) => {
  //   return cart.find((item) => item.id === id)?.quantity || 0;
  // };

  // const quantityPerItem = getQuantityById(id);


  const onNavigateBack = () => {
    navigate(-1);
  }

  // const art = useMemo(() => getProductById(id), [id]);

  useEffect(() => {
    const artDetailRef = doc(db, "Art", id)
    getDoc(artDetailRef).then((response) => {
      setArtDetail(
        { ...response.data(), id: response.id }
      )
    })

  }, [id])


  if (!artDetail) {
    return <Navigate to="/home" />
  }

  return (
    <section className="py-5">
      <div className="container px-4 px-lg-5 my-5">
        <div className="row gx-4 gx-lg-5 align-items-center">
          <div className="col-md-6">
            <Zoom>
              <img src={`/assets/cards/${artDetail.imageId}`} alt={artDetail.title} className="img-thumbnail animate__animated animate__fadeInLeft" />
            </Zoom>
          </div>
          <div className="col-md-6 animate__animated animate__fadeInRight">
            <div className="small mb-1">SKU: {artDetail.sku}</div>
            <h1 className="display-5 fw-bolder">{artDetail.title}</h1>
            <div className="fs-5 mb-5">
              {/* <span className="text-decoration-line-through">${artDetail.value}</span> */}
              <span>${artDetail.value}</span></div>
            <p className="lead fw-bolder display-6">{artDetail.autor}</p>
            <p className="lead">{artDetail.description}</p>
            <p className="lead text-start">Dimensiones : {artDetail.dimensions}</p>
            <p className="lead text-start">Peso : {artDetail.weight}</p>

            {!artDetail.status && !artDetail.orderId
              ? <div className="d-flex col-md-7">
                <input disabled className="form-control text-center me-3" id="inputQuantity" type="num" value={artDetail.stock} />
                <button className="btn btn-outline-dark flex-shrink-0 me-3" onClick={() => addToCart()} type="button"><FontAwesomeIcon icon={faCartShopping} flip="horizontal" size="xs" style={{ color: "#000000", }} />Add to cart</button>
                <button className="btn btn-outline-dark flex-shrink-0" onClick={onNavigateBack}>Regresar</button>
              </div>
              : <div className="d-flex col-md-7">
                <span>Sin stock</span>
              </div>
            }

          </div>


        </div>
      </div>
    </section>




  )
}