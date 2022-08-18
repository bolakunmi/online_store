import React, { useState, useEffect } from "react";
import { site_data } from "./site_data";

const General_display = ({ sellingproducts, setSellingproducts }) => {
  function favourite(id) {
    setSellingproducts((prevState) => {
      return prevState.map((product) => {
        if (product.id === id) {
          if (product.liked == "./favourite1.png") {
            return { ...product, liked: "./favourite2.png" };
          } else if (product.liked == "./favourite2.png") {
            return { ...product, liked: "./favourite1.png" };
          }
        }
        return product;
      });
    });
  }

  return sellingproducts.map((item) => {
    // Mumu you was looping over site_data here that was why it was not reflecting cos the state doesn't edit your JSON file
    // Fix your link errors, pass / instead of # into the href
    // Also you used class instead of className in some places
    // You used General_display instead of GeneralDisplay
    // Lastly, separate all these images into folders and all your components like GeneralDisplay into their own files.
    const { category, brand, img, price, quantity, id, liked } = item;

    //   function celebrated(index) {
    //     function get_each(person) {
    //       return data.indexOf(person) !== index;
    //     }
    //     setData(data.filter(get_each));
    //   }

    //   function fav(id) {
    //     function get_each(product) {
    //       if (product.id == id) {
    //         return { ...product, liked: "./favourite2.png" };
    //       } else {
    //         return product;
    //       }
    //     }
    //     setSellingproducts(sellingproducts.filter(get_each));
    //     console.log(sellingproducts)
    //   }

    return (
      <div className="selling_item" key={id}>
        <button
          type="button"
          onClick={() => {
            favourite(id);
          }}
        >
          <img src={liked} alt="favourites" />
        </button>
        <img src={img} alt={category} className="selling_item_image" />
        <h2>{brand}</h2>
        <h4>Price(each):&#36;{price}</h4>
        <h4>Quantity:{quantity}</h4>
        <div className="button_functions">
          <button type="button" onCLick={() => {}}>
            -1
          </button>
          <button type="button" onCLick={() => {}}>
            reset
          </button>
          <button type="button" onCLick={() => {}}>
            +1
          </button>
        </div>
        <button typo="button" className="Add_to_cart">
          Add to cart
        </button>
      </div>
    );
  });
};
//   WORKING FUNCTIONS

// WORK-IN PROGRESS
//   function increament() {
//     setTimeout(() => {
//       setNumber_of_items((previousNumber) => {
//         return previousNumber + 1;
//       });
//     }, 1);
//   }
//   function decreament() {
//     setTimeout(() => {
//       setNumber_of_items((previousNumber) => {
//         return previousNumber - 1;
//       });
//     }, 1);
//   }
//   function reset() {
//     setNumber_of_items(0);
//   }
// const index = sellingproducts.indexOf(person);
const General = function () {
  const [sellingproducts, setSellingproducts] = useState(site_data);

  return (
    <React.Fragment>
      <div>
        <div>
          <div className="General_wallpaper">
            <div>
              <h2>WELCOME TO KEENEST STORES</h2>
              <h4>Get your amazing products at affordable prizes...</h4>
            </div>
          </div>
        </div>
        <br />
        <div
          style={{
            background: "#00a4bd",
            color: "white",
            marginTop: "10px",
            padding: "20px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div>Our Products</div>
          <div
            style={{
              cursor: "pointer",
              display: "flex",
              alignContent: "center",
              alignItems: "center",
            }}
          >
            See All <img src="arrow_right.png" alt="arrow_right" />
          </div>
        </div>
        <div className="showglass">
          <General_display
            sellingproducts={sellingproducts}
            setSellingproducts={setSellingproducts}
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default General;
