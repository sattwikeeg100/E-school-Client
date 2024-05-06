import React, { useContext, useEffect, useState } from "react";
import { RatingBar, Heading, Img, Button } from "..";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Context } from "context";
import { useNavigate } from "react-router-dom";

export default function EduviShopMainCard({
  imgsrc,
  title,
  author,
  ratings,
  price,
  productId,
  ...props
}) {
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
  const {
    state: { user },
  } = useContext(Context);

  const [isaddedtobag, setIsAddedToBag] = useState(false);
  useEffect(() => {
    user && fetchUserCart();
  }, [user]);

  const fetchUserCart = async () => {
    try {
      const userCart = user.cart.products;
      setIsAddedToBag(userCart.includes(productId));
    } catch (error) {
      console.error("Error fetching user cart:", error);
    }
  };

  const role = localStorage.getItem("Role");
  const Navigate = useNavigate();

  const handleAddToCart = async () => {
    if (role === null) {
      Navigate("/login");
    } else {
      try {
        const response = await axios.post(
          `${API_BASE_URL}/products/addtocart`,
          { prodId: productId },
          { headers: { Authorization: `Bearer ${user.token}` } }
        );

        if (response.data.cart.products.includes(productId)) {
          // Product was successfully added to the cart
          setIsAddedToBag(true);
          toast.success("Product added to cart successfully!");
        } else {
          // Product was already in the cart
          setIsAddedToBag(false);
          toast.warning("Product is removed from the cart!");
        }
      } catch (error) {
        console.error("Error adding to cart:", error);

        toast.error("Failed to add product to cart.");
      }
    }
  };

  return (
    <div {...props}>
      <div className="flex flex-col items-center justify-start w-full p-5 bg-white-A700 rounded-[10px]  gap-[10px] shadow-md">
        <div className="flex flex-col items-center justify-start w-full max-w-[200px]">
          <Img
            src={imgsrc}
            alt="image"
            className="w-full object-cover rounded-[10px]"
          />
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <Heading as="h1" className="text-lg font-semibold text-gray-900">
            {title} <br /> <i> Author: {author} </i>
          </Heading>
          <Button
            color={isaddedtobag ? "red_300_01" : "red_50"}
            size="lg"
            className="w-11 !rounded-md"
            onClick={handleAddToCart}
          >
            <Img
              src={
                isaddedtobag
                  ? "images/img_shopping_bag_24_white_a700.svg"
                  : "images/img_shopping_bag_24.svg"
              }
            />
          </Button>
        </div>
        <div className="flex flex-row justify-between items-center w-full">
          <Heading as="h2" className="text-red-300_01">
            Rs. {price}
          </Heading>
          <RatingBar value={ratings} />
        </div>
      </div>
    </div>
  );
}
