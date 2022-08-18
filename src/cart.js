import React from "react";
import { Link } from "react-router-dom";
import general from "./General.js";

const Cart = function () {

  const Cart_basket = () => {
    console.log(general.mycart)
    return <div>{general.mycart}</div>
    
    // return mycart.map((item) => {
    //   const { category, brand, img, price, quantity, id, liked, discount } =
    //     item;

    //   return (
    //     <div className="selling_item" key={id}>
    //       {/* <button
    //         type="button"
    //         onClick={() => {
    //           favourite(id);
    //         }}
    //         className="favourite_button"
    //       >
    //         <img src={liked} alt="favourites" />
    //       </button> */}
    //       <img src={img} alt={category} className="selling_item_image" />
    //       <h2>{brand}</h2>
    //       <h4>Price(each): &#36;{price}</h4>
    //       <h4>Quantity:{quantity}</h4>
    //       <hr></hr>
    //       <h4>Total:&#36;{quantity * price}</h4>
    //     </div>
    //   );
    // });
  };

  console.log(general.mycart)
  return (
    <div>
      <Link to={`/`}>
        <h1>here is my cart</h1>
        <Cart_basket />
      </Link>
    </div>
  );
};

export default Cart;
