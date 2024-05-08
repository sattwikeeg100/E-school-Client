import React, { useState, useEffect, useContext } from "react";
import { Button, Img, Text, Heading } from "../../components";
import EduviCartProductCard from "components/CartProductCard";
import Footer from "../../components/Footer";
import axios from "axios";
import { Context } from "context";

export default function MyCart() {
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
  const {
    state: { user },
  } = useContext(Context);

  const [bookdata, setBookdata] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    {
      user && fetchBooks(user.token);
    }
  }, [user]);

  const fetchBooks = async () => {
    const { data } = await axios.get(`${API_BASE_URL}/user/mycart`);
    setBookdata(data.products);
    console.log("Book fetched");

    setCartTotal(data.cartTotal);
  };

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const totalpages = Math.ceil(bookdata.length / itemsPerPage);

  return (
    <>
      <div className="flex flex-col items-center justify-start w-full gap-[100px] md:gap-[30px] bg-gray-100">
        {/* Header */}
        <div className="flex flex-col items-center justify-start w-full gap-12">
          <div className="flex flex-col items-start justify-start w-full gap-[5px] p-5 bg-red-50 max-w-7xl rounded-[20px]">
            <Text
              as="p"
              className="mt-[5px] ml-2.5 !text-black-900_02 !font-medium"
            >
              Home | My Cart
            </Text>
            <div className="flex flex-row md:flex-wrap justify-between items-center w-[99%] ml-2.5 gap-[492px] md:gap-[50px]">
              <Heading size="3xl" as="h1" className="w-[30%] !font-semibold">
                Your Cart at
                <br />
                Learnopia
              </Heading>
              <Img
                src="images/img_kisspng_bookcas.png"
                alt="kisspngbookcas"
                className="w-[31%] object-cover md:w-[50%]"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-start w-[68%] md:w-full md:px-8 gap-10">
          {/* Cart Summary Section */}
          <div className="flex flex-row md:flex-col items-center justify-between md:w-[70%] w-full">
            <Heading size="xl" as="h1" className="text-lg font-semibold">
              Your Cart Total: Rs. {cartTotal.toFixed(2)}
            </Heading>
            {bookdata.length !== 0 && (
              <Button
                className="mt-2 bg-orange-400 font-semibold"
                onClick={() => {
                  // Handle proceed to checkout
                }}
              >
                Proceed to Checkout
              </Button>
            )}
          </div>

          {/* Books Section  */}
          <div className="flex flex-col items-center justify-start w-full gap-[30px]">
            <div className="justify-center w-full gap-[15px] grid-cols-3 md:grid-cols-1 grid min-h-[auto]">
              {bookdata
                ?.slice(indexOfFirstItem, indexOfLastItem)
                .map((book) => (
                  <div key={book.isbn}>
                    <EduviCartProductCard
                      className="flex flex-col items-center justify-start w-full"
                      productId={book._id}
                      imgsrc={book.image.url}
                      title={book.title}
                      author={book.author}
                      publisher={book.publisher}
                      isbn={book.isbn}
                      format={book.format}
                      ratings={book.totalrating}
                      price={book.price}
                    />
                  </div>
                ))}
            </div>
          </div>

          {/* Page Number Section */}
          <div className="flex flex-row justify-between items-center w-[35%] md:w-full">
            <Button
              color="white_A700"
              size="lg"
              className="w-[15%] !rounded-md"
              onClick={() =>
                paginate(currentPage > 1 ? currentPage - 1 : currentPage)
              }
            >
              <Img src="images/img_arrow_left.svg" />
            </Button>
            <Text as="p" className="!text-gray-900 !font-medium">
              Page
            </Text>
            <Button
              color="white_A700"
              size="sm"
              className="!text-gray-700_01 font-medium min-w-[42px] rounded-lg"
            >
              {currentPage > totalpages
                ? totalpages
                : currentPage < 1
                ? 1
                : currentPage}
            </Button>
            <Text as="p" className="!text-gray-900 !font-medium">
              of {totalpages}
            </Text>
            <Button
              size="lg"
              className="w-[15%] !rounded-md"
              onClick={() =>
                paginate(
                  currentPage < totalpages ? currentPage + 1 : currentPage
                )
              }
            >
              <Img src="images/img_arrow_right.svg" />
            </Button>
          </div>
        </div>
        <Footer className="flex flex-col items-center justify-center w-full" />
      </div>
    </>
  );
}
