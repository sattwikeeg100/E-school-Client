import React, { useEffect, useState } from "react";
import { Img,} from "../../components";
import Footer from "../../components/Footer";
import { IoSearchSharp } from "react-icons/io5";
import BooksCard from "components/BooksCard";
import Loading from "Loading/loading";
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";


export default function ShopPage() {
  const [input, setInput] = useState("");
  const [searchValues, setSearchValues] = useState("");
  const [errorDiv, setErrorDiv] = useState(false);
  const [books, setBooks] = useState();
  const [demoData, setDemoData]= useState()
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1)
  console.log(books)
 
  useEffect(() => {
    const searchUrl =
      searchValues === ""
        ? "https://api.itbook.store/1.0/new"
        : `https://api.itbook.store/1.0/search/${searchValues}`;

    if (searchValues !== "") {
      setLoading(true);
      setPage(1)
      fetch(searchUrl)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          setBooks(data);
          if (data.books.length === 0) {
            setErrorDiv(true);
            setBooks(demoData);
          } else {
            setErrorDiv(false);
          }
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      fetch(searchUrl)
      .then((response) => response.json())
      .then((data) => {
        setBooks(data);
        setDemoData(data)
        setErrorDiv(false); // Reset errorDiv if searchValues is empty
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }
  }, [searchValues]);


  const handleSearch = () => {
    setSearchValues(input);
  };

  const totalPages = Math.ceil(books?.books.length / 6);

  const pageHandleler = (e)=>{
    if(
      e >= 1 &&
      e <= totalPages &&
      e !== page
    )
    setPage(e)
  }
  return (
    <>
      <div className="flex flex-col items-center justify-start w-full gap-[100px] bg-gray-100">
      <div className="flex flex-row md:flex-col items-center justify-between w-[85%] h-[300px] gap-6 sm:gap-1 px-12 sm:px-0 bg-yellow-100 rounded-md mt-12 sm:mt-1 sm:py-2  sm:h-[250px]">
              <h1 className="text-3xl w-[40%] !font-semibold sm:text-xl sm:w-[85%]">
              Welcome to Learnopia shop
                <br />
               buy online Books 
               <br />
               and Courses
              </h1>
              <Img src="images/img_kisspng_bookcas.png" alt="kisspngbookcas" className="w-[31%] object-cover sm:w-[90%]" />
        </div>
        </div>
        <div className="w-full bg-gray-100 py-12 px-20 sm:px-2">
         <div className="px-10 sm:px-0" >
          <h1 className="text-4xl !font-bold sm:text-2xl"
          >Popular Books</h1>
         </div>
         <div>
          <div 
          className="flex flex-row mt-4 justify-center"
          >
         <input
                  id="searchValues"
                  name="searchValues"
                  type="text"
                  required
                  placeholder="Search books..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="block w-[600px] sm:w-full rounded-l-md border-0 py-1.5 px-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-200 sm:text-sm sm:leading-6"
                />
          <button
                type="button"
                onClick={handleSearch}
                className="text-orange-700 flex w-20 justify-center rounded-r-md bg-orange-500 px-3 py-1.5 text-2xl leading-6 text-white shadow-sm hover:bg-orange-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
              >
              <IoSearchSharp />
              </button>
           </div>
        </div>
          {errorDiv ? (
              <div className="text-center mt-2">
                <h1 className="text-xl font-semibold">No result Found</h1>
              </div>
            ):null
          }
        <div className="flex flex-wrap mt-4 items-center w-full justify-center gap-8 py-4">

        {loading && (
          <div className="py-2 rounded">
            <Loading />
          </div>
        )}
        {books?.books.slice(page * 6 - 6, page * 6).map((product, index) => (
      <BooksCard
      key={index}
    image={product.image}
    title={product.title}
    subtitle={product.subtitle}
    price={product.price}
  />
))}
        </div>
        {books?.books.length > 6 && 
          <div className="gap-2 text-center my-8 flex flex-row justify-center">
          
          <button className={`text-2xl hover:text-gray-100 hover:bg-orange-300 px-2 rounded-md  ${page > 1 ? '' :'opacity-20 hover:bg-gray-400' }`}
          onClick={() => pageHandleler(page - 1)}
          ><MdOutlineKeyboardDoubleArrowLeft /></button>
            
             <span className="text-center">
               {[...Array(Math.ceil(books.books.length / 6))].fill().map((_, i) => (
               <button onClick={() => pageHandleler(i+1)} key={i} 
               className={`mx-2 hover:text-orange-600 cursor-pointer ${page === i + 1 ? 'text-orange-600' : ''}`}
               >{i + 1}</button>
                ))}
             </span>

             <button className={`text-2xl hover:text-gray-100 hover:bg-orange-300 px-2 rounded-md ${page < totalPages ? '' :'opacity-20 hover:bg-gray-400' }`}
            onClick={() => pageHandleler(page + 1)}
            ><MdOutlineKeyboardDoubleArrowRight /></button>
          </div>
          }
        
        </div>
        <Footer className="flex flex-col items-center justify-center w-full" />
      
    </>
  );
}
