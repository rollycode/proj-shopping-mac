import React, { useEffect, useState } from "react";
import { Button, Chip, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { sizeSelect } from "../redux/slice/cartSlice";
import ProductCartImages from "../Utils/Images/ProductCartImages";
import { cartSection } from "./../styles/sharedStyles";

const Cart = () => {
  const productSize = ["XS", "S", "M", "L", "XXL"];
  const [selectedSize, setSelectedSize] = useState("M");

  const size = useSelector((store) => store.cart?.size);

  const dispatch = useDispatch();

  useEffect(() => {
    setSelectedSize(size);
  }, [size]);

  const handleChipClick = (chip) => {
    setSelectedSize(chip);
    dispatch(sizeSelect(chip));
  };

  return (
    <div className={cartSection}>
      <div className="cart-section">
        <div className="name">JONATHAN SIMKHAI</div>
        <div className="description">
          Lurex Linen Viscose Jacket in Conchiglia
        </div>
        <div className="price">$225</div>
        <div className="color">
          Color <Typography>Conchiglia</Typography>{" "}
        </div>
        <div className="image">
          <ProductCartImages />
        </div>
        <div className="size">
          <div className="commonStyle">
            Size <div className="sizeType">L</div>
          </div>
          <div className="sizeGuide">Size Guide</div>
        </div>
        <div style={{ display: "flex" }}>
          {productSize.map((data, index) => (
            <div
              style={{
                marginRight: 12,
                display: "flex",
                marginBottom: "14px",
                marginTop: "11px",
                flexWrap: "wrap",
              }}
              key={index}
            >
              <Chip
                label={data}
                onClick={() => handleChipClick(data)}
                className={selectedSize === data ? "selectedSize" : "chipStyle"}
              />
            </div>
          ))}
        </div>
        <Button fullWidth className="addToBagStyle">
          Add to bag
        </Button>

        <div className="learnMore">
          Get 4 interest-free payments of $196.25 with Klarna LEARN MORE
        </div>
        <div className="learnMore">Speak to a Personal Stylist CHAT NOW</div>
      </div>
    </div>
  );
};

export default Cart;
