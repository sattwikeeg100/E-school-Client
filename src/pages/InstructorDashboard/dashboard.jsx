import { PiStudentBold } from "react-icons/pi";
import { PiVideoFill } from "react-icons/pi";
import { FaRupeeSign } from "react-icons/fa";
import { FaBook } from "react-icons/fa6";
import {
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  BarChart,
  Bar,
  Rectangle,
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Context } from "context";

export default function InstructorDashboard() {
  const [courses, setCourses] = useState([]);
  const [products, setProducts] = useState([]);
  const [payments, setPayments] = useState([]);
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
 
  // console.log(payments)

  const {
    state: { user },
  } = useContext(Context);

  useEffect(() => {
    if (user) {
      loadCourses();
    }
  }, [user]);
  const loadCourses = async () => {
    const { data } = await axios.get(`${API_BASE_URL}/instructor-courses`);
    // console.log(data);
    setCourses(data);
  };

  useEffect(() => {
    if (user) {
      loadProducts();
    }
  }, [user]);
  const loadProducts = async () => {
    const { data } = await axios.get(`${API_BASE_URL}/instructor-products`);
    // console.log(data);
    setProducts(data);
  };

  useEffect(() => {
    if (user) {
      loadPayments();
    }
  }, [user]);
  const loadPayments = async () => {
    const { data } = await axios.get(`${API_BASE_URL}/instructor-payments`);
    // console.log(data);
    setPayments(data);
  };


function getTotalStudentsAndStudentsInLast24Hours(arr) {
  // Initialize counters
  let totalStudents = 0;
  let studentsInLast24Hours = 0;

  // Get the current time
  let currentTime = new Date().getTime();

  // Calculate the timestamp for 24 hours ago
  let twentyFourHoursAgo = currentTime - (24 * 60 * 60 * 1000);

  // Loop through each object in the array
  arr.forEach(obj => {
      // Increment total students count
      totalStudents++;

      // Check if the object has 'subscriber' and 'updatedAt' properties
      if (obj.hasOwnProperty('suscriber') && obj.hasOwnProperty('updatedAt')) {
          // Get the timestamp of the 'updatedAt' property
          let updatedAtTimestamp = new Date(obj.updatedAt).getTime();

          // Check if the 'updatedAt' timestamp is within the last 24 hours
          if (updatedAtTimestamp >= twentyFourHoursAgo && updatedAtTimestamp <= currentTime) {
              // Increment the counter for students updated in the last 24 hours
              studentsInLast24Hours++;
          }
      }
  });

  // Return an object containing both counts
  return {
      totalStudents: totalStudents,
      studentsInLast24Hours: studentsInLast24Hours
  };
}
let Students = getTotalStudentsAndStudentsInLast24Hours(payments);
const studenstInLast24Hrs = Students.studentsInLast24Hours;
const totalStudents = Students.totalStudents;

console.log(payments)

function countCoursesAndProductCreatedLast24Hours(courseArray) {
  // Get the current time
  let currentTime = new Date().getTime();

  // Calculate the timestamp for 24 hours ago
  let twentyFourHoursAgo = currentTime - (24 * 60 * 60 * 1000);

  // Filter the courses created within the last 24 hours
  let coursesAndProductCreatedLast24Hours = courseArray.filter(course => {
      // Check if the course has a 'createdAt' property
      if (course.hasOwnProperty('createdAt')) {
          // Get the timestamp of the 'createdAt' property
          let createdAtTimestamp = new Date(course.createdAt).getTime();

          // Check if the 'createdAt' timestamp is within the last 24 hours
          return createdAtTimestamp >= twentyFourHoursAgo && createdAtTimestamp <= currentTime;
      }
  });

  // Return the count of courses created within the last 24 hours
  return coursesAndProductCreatedLast24Hours.length;
}
let coursesInLast24Hrs = countCoursesAndProductCreatedLast24Hours(courses);
let ProductInLast24Hrs = countCoursesAndProductCreatedLast24Hours(products);

function getTotalRevenueAndRecent(payments) {
  let totalPrice = 0;
  let totalPriceLast24Hours = 0;

  // Get the current time
  let currentTime = new Date().getTime();

  // Calculate the timestamp for 24 hours ago
  let twentyFourHoursAgo = currentTime - (24 * 60 * 60 * 1000);

  // Iterate through each payment object
  payments.forEach(payment => {
      // Check if the payment object has a 'course' property and it has a 'price'
      if (payment.hasOwnProperty('course') && payment.course.hasOwnProperty('price') && !isNaN(parseFloat(payment.course.price))) {
          // Add the price of the course to the total price
          totalPrice += parseFloat(payment.course.price);

          // Check if the payment was created within the last 24 hours
          if (new Date(payment.createdAt).getTime() >= twentyFourHoursAgo && new Date(payment.createdAt).getTime() <= currentTime) {
              totalPriceLast24Hours += parseFloat(payment.course.price);
          }
      }
  });

  return {
      totalRevenue: totalPrice,
      totalRevenueLast24Hours: totalPriceLast24Hours
  };
}

let result = getTotalRevenueAndRecent(payments);
const TotalRevenue = result.totalRevenue;
const TotalRevenueLast24Hours= result.totalRevenueLast24Hours;


function countCoursesCreatedInMonth(courseArray, monthName) {
  // Convert month name to its corresponding index (0-indexed)
  let monthIndex = {
      "January": 0,
      "February": 1,
      "March": 2,
      "April": 3,
      "May": 4,
      "June": 5,
      "July": 6,
      "August": 7,
      "September": 8,
      "October": 9,
      "November": 10,
      "December": 11
  }[monthName];

  // Return 0 if the month name is invalid
  if (monthIndex === undefined) {
      return 0;
  }

  // Initialize a count for courses created in the specified month
  let count = 0;

  // Iterate through each course object in the array
  courseArray.forEach(course => {
      // Extract the month from the createdAt date string
      let createdAtDate = new Date(course.createdAt);
      let createdAtMonthIndex = createdAtDate.getMonth();

      // Increment the count if the course was created in the specified month
      if (createdAtMonthIndex === monthIndex) {
          count++;
      }
  });

  return count;
}

// let coursesInMonth = countCoursesCreatedInMonth(courses, "April");

function countStudentCreatedInMonth(paymentArray, monthName) {
  // Convert month name to its corresponding index (0-indexed)
  let monthIndex = {
      "January": 0,
      "February": 1,
      "March": 2,
      "April": 3,
      "May": 4,
      "June": 5,
      "July": 6,
      "August": 7,
      "September": 8,
      "October": 9,
      "November": 10,
      "December": 11
  }[monthName];

  // Return 0 if the month name is invalid
  if (monthIndex === undefined) {
      return 0;
  }

  // Initialize a count for payments created in the specified month
  let count = 0;

  // Iterate through each payment object in the array
  paymentArray.forEach(payment => {
      // Extract the month from the createdAt date string
      let createdAtDate = new Date(payment.createdAt);
      let createdAtMonthIndex = createdAtDate.getMonth();

      // Increment the count if the payment was created in the specified month
      if (createdAtMonthIndex === monthIndex) {
          count++;
      }
  });

  return count;
}
// const payementInMonth = countPaymentsCreatedInMonth(payments, "April");
// console.log(payementInMonth);

// function calculateMonthlyRevenue(paymentArray, monthName) {
//   // Convert month name to its corresponding index (0-indexed)
//   let monthIndex = {
//       "January": 0,
//       "February": 1,
//       "March": 2,
//       "April": 3,
//       "May": 4,
//       "June": 5,
//       "July": 6,
//       "August": 7,
//       "September": 8,
//       "October": 9,
//       "November": 10,
//       "December": 11
//   }[monthName];

//   // Return 0 if the month name is invalid
//   if (monthIndex === undefined) {
//       return 0;
//   }

//   // Initialize the total revenue for the specified month
//   let monthlyRevenue = 0;

//   // Iterate through each payment object in the array
//   paymentArray.forEach(payment => {
//       // Check if the payment object has a 'createdAt' property
//       if (payment.hasOwnProperty('createdAt')) {
//           // Extract the month from the createdAt date string
//           let createdAtDate = new Date(payment.createdAt);
//           let createdAtMonthIndex = createdAtDate.getMonth();

//           // Check if the payment was created in the specified month
//           if (createdAtMonthIndex === monthIndex) {
//               // Add the amount of the payment to the total revenue for the specified month
//               monthlyRevenue += parseFloat(payment.amount);
//           }
//       }
//   });

//   return monthlyRevenue;
// }

function calculateMonthlyRevenue(paymentArray, monthName) {
  // Convert month name to its corresponding index (0-indexed)
  let monthIndex = {
      "January": 0,
      "February": 1,
      "March": 2,
      "April": 3,
      "May": 4,
      "June": 5,
      "July": 6,
      "August": 7,
      "September": 8,
      "October": 9,
      "November": 10,
      "December": 11
  }[monthName];

  // Return 0 if the month name is invalid
  if (monthIndex === undefined) {
      return 0;
  }

  // Initialize the total price for the specified month
  let totalPriceForMonth = 0;

  // Iterate through each payment object in the array
  paymentArray.forEach(payment => {
      // Extract the month from the createdAt date string
      let createdAtDate = new Date(payment.createdAt);
      let paymentMonth = createdAtDate.getMonth();

      // Extract the year from the createdAt date string
      let paymentYear = createdAtDate.getFullYear();

      // Check if the payment was created in the specified month and year
      if (paymentMonth === monthIndex) {
          // Check if the payment object has a 'course' property and it has a 'price'
          if (payment.hasOwnProperty('course') && payment.course.hasOwnProperty('price') && !isNaN(parseFloat(payment.course.price))) {
              // Add the price of the course to the total price for the specified month
              totalPriceForMonth += parseFloat(payment.course.price);
          }
      }
  });

  return totalPriceForMonth;
}

const monthlyReveneu = calculateMonthlyRevenue(payments, "April");
console.log(monthlyReveneu)

  const data = [
    {
      name: "Jan",
      courses: countCoursesCreatedInMonth(courses, "January"),
      students: countStudentCreatedInMonth(payments, "January"),
    },
    {
      name: "Feb",
      courses: countCoursesCreatedInMonth(courses, "February"),
      students: countStudentCreatedInMonth(payments, "February"),
    },
    {
      name: "Mar",
      courses: countCoursesCreatedInMonth(courses, "March"),
      students: countStudentCreatedInMonth(payments, "March"),
    },
    {
      name: "Apr",
      courses: countCoursesCreatedInMonth(courses, "April"),
      students: countStudentCreatedInMonth(payments, "April"),
    },
    {
      name: "May",
      courses: countCoursesCreatedInMonth(courses, "May"),
      students: countStudentCreatedInMonth(payments, "May"),
    },
    {
      name: "Jun",
      courses: countCoursesCreatedInMonth(courses, "June"),
      students: countStudentCreatedInMonth(payments, "June"),
    },
    {
      name: "Jul",
      courses: countCoursesCreatedInMonth(courses, "July"),
      students: countStudentCreatedInMonth(payments, "July"),
    },
    {
      name: "Aug",
      courses: countCoursesCreatedInMonth(courses, "August"),
      students: countStudentCreatedInMonth(payments, "August"),
    },
    {
      name: "Sept",
      courses: countCoursesCreatedInMonth(courses, "September"),
      students: countStudentCreatedInMonth(payments, "September"),
    },
    {
      name: "Oct",
      courses: countCoursesCreatedInMonth(courses, "October"),
      students: countStudentCreatedInMonth(payments, "October"),
    },
    {
      name: "Nov",
      courses: countCoursesCreatedInMonth(courses, "November"),
      students: countStudentCreatedInMonth(payments, "November"),
    },
    {
      name: "Dec",
      courses: countCoursesCreatedInMonth(courses, "December"),
      students: countStudentCreatedInMonth(payments, "December"),
    },
  ];
  const reveneuData = [
    {
      name: "Jan",
      reveneu: calculateMonthlyRevenue(payments, "January"),
    },
    {
      name: "Feb",
      reveneu: calculateMonthlyRevenue(payments, "February"),
    },
    {
      name: "Mar",
      reveneu: calculateMonthlyRevenue(payments, "March"),
    },
    {
      name: "Apr",
      reveneu:calculateMonthlyRevenue(payments, "April"),
    },
    {
      name: "May",
      reveneu: calculateMonthlyRevenue(payments, "May"),
    },
    {
      name: "Jun",
      reveneu: calculateMonthlyRevenue(payments, "June"),
    },
    {
      name: "Jul",
      reveneu: calculateMonthlyRevenue(payments, "July"),
    },
    {
      name: "Aug",
      reveneu:calculateMonthlyRevenue(payments, "August"),
    },
    {
      name: "Sept",
      reveneu: calculateMonthlyRevenue(payments, "September"),
    },
    {
      name: "Oct",
      reveneu: calculateMonthlyRevenue(payments, "October"),
    },
    {
      name: "Nov",
      reveneu: calculateMonthlyRevenue(payments, "November"),
    },
    {
      name: "Dec",
      reveneu: calculateMonthlyRevenue(payments, "December"),
    },
  ];

  const Firstname = user?.name.split(" ");
   const name = Firstname?.[0]?.toUpperCase();
  return (
    <>
      <div className="flex flex-col mb-12 overflow-hidden">
        <div className="w-full h-72 sm:h-[800px] ">
          <div className="bg-red-50 p-8 w-full h-40 absolute text-center">
            <h1 className="text-5xl sm:text-3xl">
              Hello, <span className="font-semibold italic">{name}</span>
            </h1>
            <p className="text-sm">hope you are having a nice day</p>

            <div className="flex flex-row w-auto px-10 gap-10 items-center justify-center relative my-4 sm:flex-col sm:px-4 sm:my-4 sm:gap-8 ">
              <div className="relative w-96 shadow-slate-200 shadow-2xl border-2 border-gray-200 rounded-xl p-4 bg-gray-50 cursor-pointer sm:w-72">
                <div className="shadow-lg overviewBox  flex flex-row">
                  <div className=" bg-white h-16 text-green-500 flex justify-center items-center text-6xl w-20 pr-4 rounded-2xl sm:text-4xl ">
                    <PiStudentBold />
                  </div>
                  <div className="">
                    <p className="text-lg sm:text-sm">Total student</p>
                    <p className="text-2xl font-bold">{totalStudents}</p>
                    <p className="mt-4 text-sm text-gray-600">
                      {studenstInLast24Hrs} enrolment in last 24 hrs
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative w-96 shadow-slate-200 shadow-2xl border-2 border-gray-200 rounded-xl p-4 bg-gray-50 cursor-pointer sm:w-72 ">
                <div className="shadow-lg overviewBox  flex flex-row">
                  <div className=" bg-white h-16 text-blue-500 flex justify-center items-center text-6xl w-20 pr-4 rounded-2xl sm:text-4xl ">
                    <PiVideoFill />
                  </div>
                  <div className="">
                    <p className="text-lg sm:text-sm">Total Courses</p>
                    <p className="text-2xl font-bold">{courses.length}</p>
                    <p className="mt-4 text-sm text-gray-600">
                      {coursesInLast24Hrs} published in last 24 hrs
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative w-96 shadow-slate-200 shadow-2xl border-2 border-gray-200 rounded-xl p-4 bg-gray-50 cursor-pointer sm:w-72  ">
                <div className="shadow-lg overviewBox  flex flex-row">
                  <div className=" bg-white h-16 text-green-500 flex justify-center items-center text-5xl w-20 pr-2 rounded-2xl sm:text-4xl ">
                    <FaBook />
                  </div>
                  <div className="">
                    <p className="text-lg sm:text-sm">Total Books published</p>
                    <p className="text-2xl font-bold">{products.length}</p>
                    <p className="mt-4 text-sm text-gray-600">
                      {ProductInLast24Hrs} books in last 24 hrs
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative w-96 shadow-slate-200 shadow-2xl border-2 border-gray-200 rounded-xl p-4  bg-gray-50 cursor-pointer sm:w-72 ">
                <div className="shadow-lg overviewBox  flex flex-row">
                  <div className=" bg-white h-16 text-orange-500 flex justify-center items-center text-5xl w-20 pr-2 rounded-2xl sm:text-4xl ">
                    <FaRupeeSign />
                  </div>
                  <div className="">
                    <p className="text-lg sm:text-sm">Total Reveneu</p>
                    <p className="text-2xl font-bold">{TotalRevenue}</p>
                    <p className="mt-4 text-sm text-gray-600">
                      {TotalRevenueLast24Hours} reveneu in last 24 hrs
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4 flex flex-row sm:flex-col mr-2">
          <div className="w-[900px] h-[375px] sm:w-80 sm:h-64 ">
            <ResponsiveContainer width={"99%"} height={"99%"}>
              <BarChart width={900} height={650} data={data}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                {/* <CartesianGrid stroke="#ccc" strokeDasharray="5 5" /> */}
                <Legend />
                <Bar
                  dataKey="courses"
                  fill="#FF99D6"
                  activeBar={<Rectangle fill="red" stroke="blue" />}
                />
                <Bar
                  dataKey="students"
                  fill="#B9B3FF"
                  activeBar={<Rectangle fill="blue" stroke="purple" />}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="w-[600px] h-[375px] sm:w-80 sm:h-56 sm:mt-4 ">
            <ResponsiveContainer width="99%" height="99%">
              <AreaChart width={500} height={400} data={reveneuData}>
                {/* <CartesianGrid strokeDasharray="3 3" /> */}
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Area
                  type="monotone"
                  dataKey="reveneu"
                  stroke="blue"
                  fill="#B3E8FF"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </>
  );
}
