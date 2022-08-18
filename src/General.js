import React, { useState, useEffect } from "react";
import { site_data, cart, discounted_sales } from "./site_data";

const General = function () {
  
  const [sellingproducts, setSellingproducts] = useState(site_data);
  const [mycart, setMycart] = useState(cart);
  const [discounted_product, setDiscounted_product] =
    useState(discounted_sales);

  


  function favourite(id) {
    setSellingproducts((sellingproducts) => {
      return sellingproducts.map((product) => {
        if (product.id === id) {
          if (product.liked == require("./images/favourite1.png")) {
            return { ...product, liked: require("./images/favourite2.png") };
          } else if (product.liked == require("./images/favourite2.png")) {
            return { ...product, liked: require("./images/favourite1.png" )};
          }
        }
        return product;
      });
    });
  }

  function favourite_discount(id) {
    setDiscounted_product((discounted_product) => {
      return discounted_product.map((product) => {
        if (product.id === id) {
          if (product.liked == require("./images/favourite1.png")) {
            return { ...product, liked:require( "./images/favourite2.png" )};
          } else if (product.liked == require("./images/favourite2.png")) {
            return { ...product, liked: require("./images/favourite1.png" )};
          }
        }
        return product;
      });
    });
  }

  function increament(id) {
    setTimeout(() => {
      setSellingproducts((sellingproducts) => {
        return sellingproducts.map((product) => {
          if (product.id == id) {
            return { ...product, quantity: product.quantity + 1 };
          }
          return product;
        });
      });
    }, 1);
  }

  function increament_discount(id) {
    setTimeout(() => {
      setDiscounted_product((discounted_product) => {
        return discounted_product.map((product) => {
          if (product.id == id) {
            return { ...product, quantity: product.quantity + 1 };
          }
          return product;
        });
      });
    }, 1);
  }

  function reset(id) {
    setSellingproducts((sellingproducts) => {
      return sellingproducts.map((product) => {
        console.log(product);
        if (product.id == id) {
          return { ...product, quantity: 0 };
        }
        console.log(product);
        return product;
      });
    });
  }

  function reset_discount(id) {
    setDiscounted_product((discounted_product) => {
      return discounted_product.map((product) => {
        console.log(product);
        if (product.id == id) {
          return { ...product, quantity: 0 };
        }
        console.log(product);
        return product;
      });
    });
  }

  function decreament(id) {
    setTimeout(() => {
      setSellingproducts(() => {
        return sellingproducts.map((product) => {
          if (product.id == id) {
            if (product.quantity > 0) {
              return { ...product, quantity: product.quantity - 1 };
            } else if ((product.quantity = 0)) {
              return { ...product, quantity: 0 };
            }
          }
          return product;
        });
      });
    }, 1);
  }

  function decreament_discount(id) {
    setTimeout(() => {
      setDiscounted_product(() => {
        return discounted_product.map((product) => {
          if (product.id == id) {
            if (product.quantity > 0) {
              return { ...product, quantity: product.quantity - 1 };
            } else if ((product.quantity = 0)) {
              return { ...product, quantity: 0 };
            }
          }
          return product;
        });
      });
    }, 1);
  }

  function add_to_cart(id) {
    let product = sellingproducts.find((product) => product.id === id);
    if (product.quantity > 0) {
      setMycart(() => {
        return [...mycart, product];
      });
      setSellingproducts(() => {
        return sellingproducts.map((product) => {
          return { ...product, quantity: 0 };
        });
      });
    }
  }

  function add_to_cart_discount(id) {
    let product = discounted_product.find((product) => product.id === id);
    if (product.quantity > 0) {
      setMycart(() => {
        return [
          ...mycart,
          {
            ...product,
            price: ((100 - product.discount) * product.price) / 100,
          },
        ];
      });
      setDiscounted_product(() => {
        return discounted_product.map((product) => {
          return { ...product, quantity: 0 };
        });
      });
    }

  }

  const General_display = () => {
    return sellingproducts.map((item) => {
      const { category, brand, img, price, quantity, id, liked } = item;

      return (
        <div className="selling_item" key={id}>
          <button
            type="button"
            onClick={() => {
              favourite(id);
            }}
            className="favourite_button"
          >
            <img src={liked} alt="favourites" />
          </button>
          <img src={img} alt={category} className="selling_item_image" />
          <h2>{brand}</h2>
          <h4>Price(each):&#36;{price}</h4>
          <h4>Quantity:{quantity}</h4>
          <div className="button_functions">
            <button
              type="button"
              onClick={() => {
                decreament(id);
              }}
            >
              -1
            </button>
            <button
              type="button"
              onClick={() => {
                reset(id);
              }}
            >
              reset
            </button>
            <button
              type="button"
              onClick={() => {
                increament(id);
              }}
            >
              +1
            </button>
          </div>
          <button
            type="button"
            className="add_to_cart"
            onClick={() => {
              add_to_cart(id);
            }}
          >
            Add to cart
          </button>
        </div>
      );
    });
  };

  const Discounted_products = () => {
    return discounted_product.map((item) => {
      const { category, brand, img, price, quantity, id, liked, discount } =
        item;

      return (
        <div className="selling_item" key={id}>
          <button
            type="button"
            onClick={() => {
              favourite_discount(id);
            }}
            className="favourite_button"
          >
            <img src={liked} alt="favourites" />
          </button>
          <p className="discount">{discount}%</p>

          <img src={img} alt={category} className="selling_item_image" />
          <h2>{brand}</h2>
          <h4>
            Price(each):{" "}
            <span
              style={{
                textDecoration: "line-through",
                color: "rgb(172, 172, 172)",
                fontWeight: "200",
              }}
            >
              &#36;{price}
            </span>{" "}
            &#36;{((100 - discount) * price) / 100}
          </h4>
          <h4>Quantity:{quantity}</h4>
          <div className="button_functions">
            <button
              type="button"
              onClick={() => {
                decreament_discount(id);
              }}
            >
              -1
            </button>
            <button
              type="button"
              onClick={() => {
                reset_discount(id);
              }}
            >
              reset
            </button>
            <button
              type="button"
              onClick={() => {
                increament_discount(id);
              }}
            >
              +1
            </button>
          </div>
          <button
            type="button"
            className="add_to_cart"
            onClick={() => {
              add_to_cart_discount(id);
            }}
          >
            Add to cart
          </button>
        </div>
      );
    });
  };

  const Cart_basket = () => {
    return mycart.map((item) => {
      const { category, brand, img, price, quantity, id, liked, discount } =
        item;

      return (
        <div className="selling_item" key={id}>
          <button
            type="button"
            onClick={() => {
              favourite(id);
            }}
            className="favourite_button"
          >
            <img src={liked} alt="favourites" />
          </button>
          <img src={img} alt={category} className="selling_item_image" />
          <h2>{brand}</h2>
          <h4>Price(each): &#36;{price}</h4>
          <h4>Quantity:{quantity}</h4>
          <hr></hr>
          <h4>Total:&#36;{quantity * price}</h4>
        </div>
      );
    });
  };

  return (
    <React.Fragment>
      <div>
        <div>
          <div className="General_wallpaper">
            <div>
              <h2>WELCOME TO KEENEST STORES</h2>
              <h4 style={{ color: "rgb(131 239 255)" }}>
                Get your amazing products at affordable prizes...
              </h4>
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
            See All <img src={require("./images/arrow_right.png")} alt="arrow_right" />
          </div>
        </div>
        <h1>Discounted products</h1>
        <div className="showglass">
          <Discounted_products />
        </div>
        <h1>Normal sales</h1>
        <div className="showglass">
          <General_display />
        </div>
        <h1>Cart</h1>
        <div className="showglass">
          <Cart_basket />
        </div>
      </div>
    </React.Fragment>
  );
};

export default General;
