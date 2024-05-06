import React, { useEffect, useState } from "react";
import { Heading, Text, Img, SelectBox} from "../../components";
import EduviCoursesDetailsMaincard from "../../components/CoursesDetailsMaincard";
import EduviSubjectMainCard from "../../components/SubjectMainCard";
import EduviCoursesMore from "../../components/CoursesMore";
import { oursubjectdata } from "./oursubjectdata";
import Footer from "components/Footer";
import { ourcoursedata } from "./ourcoursedata";
import axios from "axios";
import EduviShopMainCard from "components/ShopMainCard";

const dropDownOptions = [
  { label: "Sort by: Latest", value: "option1" },
  { label: "Sort by: Price", value: "option2" },
  { label: "Sort by: Level", value: "option3" },
];

export default function LeranopiaMainPage() {
  const [searchBarValue7, setSearchBarValue7] = useState("");
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
      <div className="flex flex-col items-center justify-start w-full gap-[100px] sm:gap-[70px] bg-gray-100 ">
          
  <div className="flex flex-row md:flex-col items-center justify-around w-full h-[300px] gap-5 sm:gap-2 p-5 sm:p-4
  bg-yellow-100 max-w-7xl rounded-20 mt-12 sm:mt-1   sm:h-[300px] font-serif">
      <h1 className="!font-semibold text-4xl sm:text-2xl whitespace-normal tracking-wide italic">
      Welcome to Learnopia ,<br/> Where Knowledge Blossoms and Futures Flourish!
      </h1>
      {/* <div className="h-3.5 bottom-1% right-0 left-0 backdrop-opacity-50 blur-20px absolute rounded-full" /> */}
      <img
      src="images/img_image_210x374.png"
      alt="image_one"
      className="justify-center h-[350px] w-[50%] left-[-1] bottom-0 right-0 top-0 mt-22 sm:mt-2 object-fit sm:w-[98%] "
      />
</div>

        <div className="flex flex-col items-center justify-start w-full gap-[47px]">
          <div className="flex flex-row justify-center w-full">
            <div className="flex flex-col items-start justify-start w-full gap-[23px] max-w-7xl">
              <h2 className="text-4xl font-bold sm:p-2">
                Discover Our Top Free Courses!
              </h2>
              <div className="flex flex-row justify-start sm:justify-center w-full">
                <div className=" w-full sm:w-72 gap-10 grid-cols-4 grid min-h-[auto] sm:grid-cols-1 sm:gap-4">
                  {oursubjectdata.map((carddata , index) => (
                    <div key={index}>
                    <EduviSubjectMainCard className="flex flex-col items-center justify-start w-full" 
                      imgsrc={carddata.image}
                      domain={carddata.subject}
                      description={carddata.description}
                    />
                    </div>
                  ))}
                  <EduviCoursesMore className="flex flex-col items-center justify-start w-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-center w-full sm:px-8">
          <div className="flex flex-col items-center justify-start w-full gap-[50px] max-w-7xl">
            <div className="flex flex-col items-center justify-start w-full gap-10">
              <div className="flex flex-col items-start justify-start w-full pt-0.5 gap-2.5">
              <h1 className="text-4xl font-bold sm:text-3xl sm:p-4 mb-4">
                  Explore Our Other Popular Courses
                </h1>
                <div className="flex flex-row justify-start w-[75%] sm:w-full gap-[42px] sm:flex-col sm:mx-4 sm:gap-[8px]">
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
              </div>
              <div className="justify-center w-full gap-[15px] grid-cols-3 md:grid-cols-1 grid min-h-[auto]">
              {sortedBooks.slice(indexOfFirstItem, indexOfLastItem).map((book, index) => (
                    <div key={index} className="w-96 sm:w-full">
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
          </div>
        </div>
        <Footer/>
      </div>
    </>

    
  );
}
