import React, { useState, useEffect } from "react";
import { Button, Img, Text, SelectBox, Input, Heading } from "../../components";
import EduviShopMainCard from "../../components/ShopMainCard";
import EduviShopPopularsCard from "components/ShopPopularsCard";
import EduviShopNewArrivalCard from "components/ShopNewArrivalCard";
import Footer from "../../components/Footer";
import axios from "axios";

const dropDownOptions = [
  { label: "Sort by: Latest", value: "option1" },
  { label: "Sort by: Price", value: "option2" },
  { label: "Sort by: Ratings", value: "option3" },
];

export default function ShopPage() {
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
  const [bookdata, setBookdata] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const { data } = await axios.get(`${API_BASE_URL}/products`);
      setBookdata(data);
      console.log(bookdata);
    };
    fetchBooks();
  }, []);

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9; 
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Category
  const [selectedCategory, setSelectedCategory] = useState("");
  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  // Search
  const [searchBarValue, setSearchBarValue] = useState("");
  const handleSearch = (event) => {
    setSearchBarValue(event.target.value);
  };


  const filteredBooks = searchBarValue
  ? bookdata.filter((book) =>
      book.title.toLowerCase().includes(searchBarValue.toLowerCase())
    )
  : selectedCategory
  ? bookdata.filter((book) => book.category === selectedCategory)
  : bookdata;

  const totalpages = Math.ceil(filteredBooks.length / itemsPerPage);
  // Sorting
  const [sortBy, setSortBy] = React.useState("option1"); 
  const handleSort = (selectedOption) => {
    setSortBy(selectedOption.value);
  };

  let sortedBooks = [...filteredBooks]; 
  switch (sortBy) {
    case "option2":
      sortedBooks.sort((a, b) => a.price - b.price); // Sort by price
      break;
    case "option3":
      sortedBooks.sort((a, b) => b.totalrating - a.totalrating); // Sort by ratings
      break;
    default:
      sortedBooks.sort((a, b) => new Date(b.publication_date) - new Date(a.publication_date)); // Sort by latest
      break;
  }

  return (
    <>
      <div className="flex flex-col items-center justify-start w-full gap-[100px] md:gap-[30px] bg-gray-100">
        <div className="flex flex-col items-center justify-start w-full gap-12">
          <div className="flex flex-col items-start justify-start w-full gap-[5px] p-5 bg-red-50 max-w-7xl rounded-[20px]">
            <Text as="p" className="mt-[5px] ml-2.5 !text-black-900_02 !font-medium">
              Home | Shop
            </Text>
            <div className="flex flex-row md:flex-wrap justify-between items-center w-[99%] ml-2.5 gap-[492px] md:gap-[50px]">
              <Heading size="3xl" as="h1" className="w-[30%] !font-semibold">
                Learnopia Online
                <br />
                Book Shop
              </Heading>
              <Img src="images/img_kisspng_bookcas.png" alt="kisspngbookcas" className="w-[31%] object-cover md:w-[50%]" />
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-start items-start w-full pl-14 pr-14 gap-10">
          <div className="md:hidden flex flex-col w-[31%] gap-[39px]">
            <div className="flex flex-col items-start justify-start w-full pt-0.5 gap-3.5">
              <Heading size="xl" as="h2" className="!text-black-900_02">
                Popular Books
              </Heading>
              <div className="flex flex-col w-full gap-[15px]">
                {bookdata.slice(0, 4).map(book => (
                      <div key={book.isbn}>
                      <EduviShopPopularsCard className="flex flex-col items-center justify-start w-full" 
                        imgsrc={book.image.url}
                        title={book.title}
                        author={book.author}
                        ratings={book.totalrating}
                        price={book.price}
                      />
                      </div>
                ))}
              </div>
              <Text size="xl" as="p" className="!text-red-300_01">
                See More
              </Text>
            </div>
            <div className="flex flex-col items-start justify-start w-full gap-4">
              <Heading size="xl" as="h3" className="!text-black-900_02">
                New Arrivals
              </Heading>
              <div className="flex flex-col w-full gap-[15px]">
              {bookdata.slice(Math.max(bookdata.length - 3, 0)).map(book => (
                  <div key={book.isbn}>
                      <EduviShopNewArrivalCard className="flex flex-col items-center justify-start w-full" 
                          imgsrc={book.image.url}
                          title={book.title}
                          author={book.author}
                          ratings={book.totalrating}
                          price={book.price}
                      />
                  </div>
              ))}
              </div>
              <Text size="xl" as="p" className="!text-red-300_01">
                See More
              </Text>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start w-[65%] md:w-full gap-10">
            <div className="flex flex-col items-center justify-start w-full gap-[30px]">
              <div className="flex flex-row justify-start w-full gap-5 flex-wrap md:gap-2">
                <Button color={selectedCategory === "" ? "orange_200_01" : "white_A700"} className=" min-w-[120px] sm:text-sm md:w-[50px] rounded-[10px]" onClick={() => handleCategorySelect("")}>
                  All Books
                </Button>
                <Button color={selectedCategory === "Coding" ? "orange_200_01" : "white_A700"} className=" min-w-[120px] sm:text-sm md:w-[50px] rounded-[10px]" onClick={() => handleCategorySelect("Coding")}>
                  Coding
                </Button>
                <Button color={selectedCategory === "AI/ML/DS" ? "orange_200_01" : "white_A700"} className=" min-w-[120px] sm:text-sm md:w-[50px] rounded-[10px]" onClick={() => handleCategorySelect("AI/ML/DS")}>
                  AI/ML/DS
                </Button>
                <Button color={selectedCategory === "Design" ? "orange_200_01" : "white_A700"} className=" min-w-[120px] sm:text-sm md:w-[50px] rounded-[10px]" onClick={() => handleCategorySelect("Design")}>
                  Design
                </Button>
                <Button color={selectedCategory === "Finance" ? "orange_200_01" : "white_A700"} className=" min-w-[120px] sm:text-sm md:w-[50px] rounded-[10px]" onClick={() => handleCategorySelect("Finance")}>
                  Finance
                </Button>
                <Button color={selectedCategory === "Motivation" ? "orange_200_01" : "white_A700"} className=" min-w-[120px] sm:text-sm md:w-[50px] rounded-[10px]" onClick={() => handleCategorySelect("Motivation")}>
                  Motivation
                </Button>
              </div>
              <div className="flex flex-row justify-start w-full gap-[15px] md:flex-col md:gap-2">
                <form className="flex w-[77%] md:w-full" onSubmit={(e) => e.preventDefault()}>
                  <input
                    type="text"
                    placeholder="Search by Book Name"
                    value={searchBarValue}
                    onChange={handleSearch}
                    className="px-4 w-[80%] bg-white font-medium rounded-l-md border-orange-200 focus:ring-orange-300 sm:text-sm"
                  />
                  <button
                    type="submit"
                    className="w-[20%] md:w-[25%] bg-orange-200 font-medium text-white rounded-r-md hover:bg-orange-300 focus:outline-none sm:text-sm"
                  >
                    Search
                  </button>
                </form>

                <SelectBox
                  indicator={<Img src="images/img_arrowdown_red_300_01.svg" alt="arrow_down" />}
                  name="sortbylatest"
                  placeholder="Sort by: Latest"
                  options={dropDownOptions}
                  onChange={handleSort}
                  className="w-[33%] gap-px font-medium md:w-full sm:h-8 sm:text-sm"
                />
              </div>
              <div className="justify-center w-full gap-[15px] grid-cols-3 md:grid-cols-1 grid min-h-[auto]">
                {sortedBooks.slice(indexOfFirstItem, indexOfLastItem).map(book => (
                    <div key={book.isbn}>
                    <EduviShopMainCard className="flex flex-col items-center justify-start w-full" 
                      productId={book._id}
                      imgsrc={book.image.url}
                      title={book.title}
                      author={book.author}
                      ratings={book.totalrating}
                      price={book.price}
                    />
                    </div>
                ))}
              </div>
            </div>
            <div className="flex flex-row justify-between items-center w-[35%] md:w-full">
              <Button color="white_A700" size="lg" className="w-[15%] !rounded-md" onClick={() => paginate(currentPage - 1)}>
                <Img src="images/img_arrow_left.svg" />
              </Button>
              <Text as="p" className="!text-gray-900 !font-medium">
                Page
              </Text>
              <Button color="white_A700" size="sm" className="!text-gray-700_01 font-medium min-w-[42px] rounded-lg">
                {currentPage > totalpages ? totalpages : currentPage < 1 ? 1 : currentPage}
              </Button>
              <Text as="p" className="!text-gray-900 !font-medium">
                of {totalpages}
              </Text>
              <Button size="lg" className="w-[15%] !rounded-md" onClick={() => paginate(currentPage + 1)}>
                <Img src="images/img_arrow_right.svg" />
              </Button>
            </div>
          </div>
        </div>
        <Footer className="flex flex-col items-center justify-center w-full" />
      </div>
    </>
  );
}
