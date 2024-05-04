
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


export default function InstructorDashboard() {

  const data = [
    {
      name: "Jan",
     courses: 4,
     students:15,
    },
    {
      name: "Feb",
      courses: 4,
     students:15,
    },
    {
      name: "Mar",
      courses: 4,
     students:15,
    },
    {
      name: "Apr",
      courses: 4,
     students:15,
    },
    {
      name: "May",
      courses: 1,
      students:15,
    },
    {
      name: "Jun",
      courses: 4,
     students:18,
    },
    {
      name: "Jul",
      courses: 3,
     students:17,
    },
    {
      name: "Aug",
      courses: 4,
      students:15,
    },
    {
      name: "Sept",
      courses: 2,
     students:11,
    },
    {
      name: "Oct",
      courses: 1,
      students:5,
    },
    {
      name: "Nov",
      courses:2,
      students:11,
    },
    {
      name: "Dec",
      courses: 2,
     students:10,
    },
  ];
  const reveneuData = [
    {
      name: "Jan",
     reveneu: 200,
    },
    {
      name: "Feb",
      reveneu: 1000,
    },
    {
      name: "Mar",
      reveneu: 1200,
    },
    {
      name: "Apr",
      reveneu: 800,
    },
    {
      name: "May",
      reveneu: 1500,
    },
    {
      name: "Jun",
      reveneu: 1700,
    },
    {
      name: "Jul",
      reveneu: 900,
    },
    {
      name: "Aug",
      reveneu: 1200,
    },
    {
      name: "Sept",
      reveneu: 1500,
    },
    {
      name: "Oct",
      reveneu: 1000,
    },
    {
      name: "Nov",
      reveneu: 1400,
    },
    {
      name: "Dec",
      reveneu: 2000,
    },
  ];
  return (
    <>
    <div className="flex flex-col mb-12 overflow-hidden">
<div className='w-full h-72 sm:h-[800px] '>
    <div className='bg-red-50 p-8  w-full h-40 absolute text-center'>
      <h1 className='text-5xl sm:text-3xl'>Hello, <span className='font-semibold italic'>Souvik</span></h1>
      <p className='text-sm'>hope you are having a nice day</p>
   
    <div className="flex flex-row mx-auto w-auto px-10 gap-10 justify-center relative my-4 sm:flex-col sm:px-2 sm:my-4">

    <div className="relative w-96 shadow-slate-200 shadow-2xl border-2 border-gray-200 rounded-xl p-4 bg-gray-50 cursor-pointer sm:w-72 ">
    <div className="shadow-lg overviewBox  flex flex-row">
    <div className=" bg-white h-16 text-green-500 flex justify-center items-center text-6xl w-20 pr-4 rounded-2xl sm:text-4xl ">
<PiStudentBold />
</div>
<div className="">
<p className='text-lg sm:text-sm'>Total student</p>
<p className='text-2xl font-bold'>108</p>
<p className='mt-4 text-sm text-gray-600'>10 enrolment in last 24 hrs</p>
</div>

</div>

</div>

     <div className="relative w-96 shadow-slate-200 shadow-2xl border-2 border-gray-200 rounded-xl p-4 bg-gray-50 cursor-pointer sm:w-72 ">
    <div className="shadow-lg overviewBox  flex flex-row">
    <div className=" bg-white h-16 text-blue-500 flex justify-center items-center text-6xl w-20 pr-4 rounded-2xl sm:text-4xl ">
<PiVideoFill />
</div>
<div className="">
<p className='text-lg sm:text-sm'>Total Courses</p>
<p className='text-2xl font-bold'>12</p>
<p className='mt-4 text-sm text-gray-600'>1 published in last 24 hrs</p>
</div>
</div>

</div>

     <div className="relative w-96 shadow-slate-200 shadow-2xl border-2 border-gray-200 rounded-xl p-4 bg-gray-50 cursor-pointer sm:w-72  ">
    <div className="shadow-lg overviewBox  flex flex-row">
    <div className=" bg-white h-16 text-green-500 flex justify-center items-center text-5xl w-20 pr-2 rounded-2xl sm:text-4xl ">
    <FaBook />
</div>
<div className="">
<p className='text-lg sm:text-sm'>Total Books published</p>
<p className='text-2xl font-bold'>8</p>
<p className='mt-4 text-sm text-gray-600'>2 books in last 24 hrs</p>
</div>
</div>

</div>

     <div className="relative w-96 shadow-slate-200 shadow-2xl border-2 border-gray-200 rounded-xl p-4  bg-gray-50 cursor-pointer sm:w-72 ">
    <div className="shadow-lg overviewBox  flex flex-row">
    <div className=" bg-white h-16 text-orange-500 flex justify-center items-center text-5xl w-20 pr-2 rounded-2xl sm:text-4xl ">
    <FaRupeeSign />
</div>
<div className="">
<p className='text-lg sm:text-sm'>Total Reveneu</p>
<p className='text-2xl font-bold'>12K</p>
<p className='mt-4 text-sm text-gray-600'>0.4K reveneu in last 24 hrs</p>
</div>
</div>

</div>

    </div>
    </div>
</div>
      <div className="mt-4 flex flex-row sm:flex-col ">
      <div className="w-[900px] h-[375px] sm:w-80 sm:h-64 ">
      <ResponsiveContainer width={'99%'} height={'99%'}>
      <BarChart width={900} height={650} data={data}>
        <XAxis dataKey="name" />
        <YAxis/>
        <Tooltip />
        {/* <CartesianGrid stroke="#ccc" strokeDasharray="5 5" /> */}
        <Legend />
        <Bar dataKey="courses" fill="#FF99D6" activeBar={<Rectangle fill="red" stroke="blue" />} />
        <Bar dataKey="students" fill="#B9B3FF" activeBar={<Rectangle fill="blue" stroke="purple" />} />
      </BarChart>
     </ResponsiveContainer>
    </div>

    <div className="w-[600px] h-[375px] sm:w-80 sm:h-56 sm:mt-4 ">
    <ResponsiveContainer width="99%" height="99%">
        <AreaChart
          width={500}
          height={400}
          data={reveneuData}
        >
          {/* <CartesianGrid strokeDasharray="3 3" /> */}
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area type="monotone" dataKey="reveneu" stroke="blue" fill="#B3E8FF" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
      </div>
      </div>
      
    </>
  );
}
