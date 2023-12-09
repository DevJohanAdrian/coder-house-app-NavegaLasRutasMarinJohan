import 'animate.css';
import Swal from 'sweetalert2'
import { useContext } from "react";
import { CartContext } from '../../art/contexts/CartContext';



export const CardCart = ({
    id,
    title,
    autor,
    value,
    desription,
    dimensions,
    category,
    imageId

}) => {
    const [cart, setCart] = useContext(CartContext)
    const removeItem = (id) => {
        setCart(cart.filter(item => item.id !== id))
        // setCart((currItems) => {
        // //   if (currItems.find((item) => item.id === id)?.quantity === 1) {
        // //     return currItems.filter((item) => item.id !== id);
        // //   } else 

        // // currItems.map((item) => {
        // //     if (item.id === id) {
        // //       return { ...item, quantity: item.quantity - 1 };
        // //     } else {
        // //       return item;
        // //     }
        // //   });
        //     return 
        // //   }
        // });

        // Swal.fire({
        //     title: 'Producto retirado con exito!',
        //     icon: "success",
        //     allowEscapeKey: false,
        //     allowOutsideClick: false,
        //     confirmButtonColor: "#212529",
        //     confirmButtonText: "Okay"
        // })
    };

    const pictureImage = `/assets/cards/${imageId}`


    return (

        <div className="col-12">
            <div className="animate__animated animate__fadeIn">

                <div className="row no-gutters">

                    <div className="col-4">
                        <img src={pictureImage} className="card-img" alt={title} />
                    </div>

                    <div className="col-8">

                        <div className="card-body">

                            <h5 className="card-title">{autor}</h5>
                            <p className="card-text">{title}</p>

                            <p className="card-text">
                                <small className="text-muted">${value}</small>
                            </p>

                        </div>
                        <button className="btn btn-outline-danger flex-shrink-0 me-3" onClick={() => removeItem(id)} type="button">Remove to cart</button>

                    </div>


                </div>

            </div>
        </div>
    )
}
