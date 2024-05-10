import React, { useEffect, useState } from "react";

import { Text,  Img,  Heading } from "../../components";
import AllMentorsMaincard from "../../components/AllMentorsMaincard";
import Footer from "../../components/Footer";


export default function AllmentorsPage() {
  const [users, setUsers] = useState([]);
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

 useEffect(() => {
  
   // Function to fetch users from the backend
   const fetchUsers = async () => {
    try {
      // Make a GET request using fetch
      const response = await fetch(`${API_BASE_URL}/all-instructor`);
      if (!response.ok) {
        throw new Error('Failed to fetch users');
      }
      // Extract JSON from the response
      const data = await response.json();
      // Update the state with the fetched users
      setUsers(data);
      console.log({data})
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  fetchUsers();
 }, [])
 
  return (
    <>
      <div className="flex flex-col items-center justify-start w-full gap-[100px] bg-gray-100">
        <div className="flex flex-col items-center justify-start w-full gap-12">
          <div className="flex flex-col items-start justify-start w-full gap-[5px] p-5 bg-red-50 max-w-7xl rounded-[20px]">
            <Text as="p" className="mt-[5px] ml-2.5 !text-black-900_02 !font-medium sm:mb-8">
              Home | Our Mentors
            </Text>
            <div className="flex flex-row justify-between items-center w-[99%] ml-2.5 gap-[420px]">
              <Heading size="3xl" as="h1" className="w-[31%] !font-semibold sm:text-5xl">
                Educatsy has the
                <br />
                qualified mentor
              </Heading>
              {/* <div className="flex flex-row justify-end w-[35%] py-[3px]">
                <div className="flex flex-col items-center justify-start w-[97%] mb-1">
                  <div className="h-[198px] w-[99%] relative">
                    <div className="flex flex-col items-end justify-start w-[87%] h-full left-0 bottom-0 top-0 m-auto absolute">
                      <Img src="images/img_speech_bubble.svg" alt="speechbubble" className="h-12 mr-[63px] z-[1]" />
                      <div className="flex flex-row justify-end items-center w-full mt-[-33px]">
                        <Img src="images/img_background_complete.svg" alt="background_one" className="h-[86px]" />
                        <Img src="images/img_device.svg" alt="device_one" className="h-[184px] ml-[-68px]" />
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-center w-max h-max left-0 bottom-0 right-0 top-0 m-auto absolute">
                      <div className="flex flex-col items-center justify-start w-[37%] ml-[113px] z-[1]">
                        <div className="h-[157px] w-full relative">
                          <div className="flex flex-col items-start justify-start w-full bottom-0 right-0 left-0 m-auto absolute">
                            <div className="flex flex-row justify-start items-center w-full z-[1]">
                              <div className="h-[74px] w-[27%] z-[1] relative">
                                <Img
                                  src="images/img_vector_deep_orange_400_74x38.svg"
                                  alt="vector_one"
                                  className="justify-center h-[74px] left-0 bottom-0 right-0 top-0 m-auto absolute"
                                />
                                <Img
                                  src="images/img_vector_blue_gray_900_03.svg"
                                  alt="vector_three"
                                  className="h-[19px] w-[19px] bottom-[9%] left-[8%] m-auto absolute"
                                />
                                <div className="flex flex-col items-start justify-start w-[64%] bottom-[24%] left-[11%] m-auto absolute">
                                  <div className="flex flex-col items-end justify-start ml-1.5">
                                    <Img
                                      src="images/img_vector_blue_gray_900_03_2x18.svg"
                                      alt="vector_five"
                                      className="h-0.5 z-[1]"
                                    />
                                    <Img
                                      src="images/img_vector_blue_gray_900_03_5x11.svg"
                                      alt="vector_seven"
                                      className="h-[5px] mr-0.5"
                                    />
                                  </div>
                                  <Img
                                    src="images/img_vector_black_900_02_9x20.svg"
                                    alt="vector_nine"
                                    className="h-[9px] mt-[-2px] opacity-0.3"
                                  />
                                </div>
                                <Img
                                  src="images/img_vector_blue_gray_900_03_12x2.svg"
                                  alt="vector_eleven"
                                  className="h-3 right-[9%] top-[6%] m-auto absolute"
                                />
                              </div>
                              <div className="flex flex-row justify-start items-center w-4/5 ml-[-9px]">
                                <Img
                                  src="images/img_vector_deep_orange_400_90x87.svg"
                                  alt="vector_thirteen"
                                  className="h-[90px] z-[1]"
                                />
                                <Img
                                  src="images/img_vector_deep_orange_400_78x35.svg"
                                  alt="vector_fifteen"
                                  className="h-[78px] ml-[-7px]"
                                />
                              </div>
                            </div>
                            <div className="flex flex-row justify-start items-center w-[33%] mt-[-60px] ml-1.5">
                              <div className="h-[60px] w-[96%] z-[1] relative">
                                <Img
                                  src="images/img_group_deep_orange_200.svg"
                                  alt="image"
                                  className="justify-center h-[60px] left-0 bottom-0 right-0 top-0 m-auto absolute"
                                />
                                <Img
                                  src="images/img_vector_deep_orange_300.svg"
                                  alt="vector"
                                  className="h-4 bottom-1/4 right-[19%] m-auto absolute"
                                />
                              </div>
                              <Img
                                src="images/img_vector_black_900_02_28x13.svg"
                                alt="vector_nineteen"
                                className="h-7 ml-[-11px] opacity-0.3"
                              />
                            </div>
                          </div>
                          <Img
                            src="images/img_vector_black_900_02_32x18.svg"
                            alt="vector"
                            className="h-8 bottom-[2%] right-[23%] m-auto opacity-0.3 absolute"
                          />
                          <div className="flex flex-col items-end justify-center w-max h-full left-0 bottom-0 right-0 top-0 m-auto absolute">
                            <div className="flex flex-col items-start justify-start w-full">
                              <div className="flex flex-col items-end justify-start w-[39%] ml-[37px] z-[1]">
                                <div className="flex flex-col items-center justify-start w-full z-[1]">
                                  <div className="h-[97px] w-full relative">
                                    <Img
                                      src="images/img_vector_blue_gray_900_03_44x52.svg"
                                      alt="vector"
                                      className="h-11 top-0 right-0 left-0 m-auto absolute"
                                    />
                                    <div className="h-[92px] w-full bottom-0 right-0 left-0 m-auto absolute">
                                      <div className="flex flex-col items-start justify-start w-2/5 bottom-[3%] left-[16%] m-auto absolute">
                                        <Img
                                          src="images/img_vector_blue_gray_900_03_21x20.svg"
                                          alt="vector"
                                          className="h-[21px] w-5"
                                        />
                                        <Img
                                          src="images/img_vector_black_900_02_21x13.svg"
                                          alt="vector"
                                          className="h-[21px] mt-[-21px] opacity-0.3"
                                        />
                                      </div>
                                      <div className="flex flex-col items-end justify-center w-full h-full left-0 bottom-0 right-0 top-0 m-auto absolute">
                                        <div className="flex flex-col items-center justify-start w-full">
                                          <div className="flex flex-col items-start justify-start w-[81%] z-[1]">
                                            <Img
                                              src="images/img_vector_blue_gray_900_03_37x41.svg"
                                              alt="vector"
                                              className="h-[37px] z-[1]"
                                            />
                                            <div className="flex flex-row justify-start items-start mt-[-14px] ml-[3px]">
                                              <Img
                                                src="images/img_vector_blue_gray_900_03_12x2.svg"
                                                alt="vector"
                                                className="h-[5px] mt-[7px] z-[1]"
                                              />
                                              <Img
                                                src="images/img_vector_blue_gray_900_03_17x17.svg"
                                                alt="vector"
                                                className="h-[17px] w-[17px]"
                                              />
                                              <Img
                                                src="images/img_vector_blue_gray_900_03_1x4.svg"
                                                alt="vector"
                                                className="h-px mt-1"
                                              />
                                            </div>
                                          </div>
                                          <div className="flex flex-row justify-center items-start w-full mt-[-37px]">
                                            <div className="flex flex-row justify-center items-start w-[97%]">
                                              <Img
                                                src="images/img_group_deep_orange_200_12x9.svg"
                                                alt="image_one"
                                                className="h-3 mt-[33px] z-[1]"
                                              />
                                              <div className="h-[87px] w-[90%] ml-[-3px] relative">
                                                <Img
                                                  src="images/img_group_deep_orange_200_87x44.svg"
                                                  alt="image_two"
                                                  className="justify-center h-[87px] left-0 bottom-0 right-0 top-0 m-auto absolute"
                                                />
                                                <div className="flex flex-row justify-center items-center h-max w-[7px] right-[33%] bottom-0 top-0 m-auto absolute">
                                                  <Img
                                                    src="images/img_vector_blue_gray_900_03_7x6.svg"
                                                    alt="vector"
                                                    className="h-[7px] w-1.5 z-[1]"
                                                  />
                                                  <Img
                                                    src="images/img_vector_deep_orange_300_6x6.svg"
                                                    alt="vector"
                                                    className="h-1.5 w-1.5 ml-[-6px]"
                                                  />
                                                </div>
                                              </div>
                                            </div>
                                            <Img
                                              src="images/img_vector_blue_gray_900_03_16x16.svg"
                                              alt="vector_fortyone"
                                              className="h-4 w-4 mt-[19px] ml-[-14px]"
                                            />
                                          </div>
                                        </div>
                                        <Img
                                          src="images/img_vector_black_900_02_24x13.svg"
                                          alt="vector"
                                          className="h-6 mt-[-21px] mr-[7px] opacity-0.3"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="h-[85px] w-[31%] mt-[-26px] mr-2 relative">
                                  <Img
                                    src="images/img_vector_blue_gray_900_03_85x16.svg"
                                    alt="vector"
                                    className="justify-center h-[85px] left-0 bottom-0 right-0 top-0 m-auto absolute"
                                  />
                                  <div className="flex flex-col items-center justify-start w-[19%] gap-[19px] bottom-[8%] left-[23%] m-auto absolute">
                                    <Img src="images/img_group_white_a700.svg" alt="image_three" className="h-[26px]" />
                                    <Img
                                      src="images/img_vector_white_a700_3x3.svg"
                                      alt="vector"
                                      className="h-[3px] w-[3px]"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="flex flex-row justify-start items-center mt-[-85px]">
                                <Img
                                  src="images/img_group_white_a700_86x134.svg"
                                  alt="image_four"
                                  className="h-[86px] z-[1]"
                                />
                                <Img
                                  src="images/img_vector_black_900_02_9x19.svg"
                                  alt="vector"
                                  className="h-[9px] ml-[-19px] opacity-0.3"
                                />
                              </div>
                            </div>
                            <div className="h-[57px] w-[38%] mt-[-57px] relative">
                              <Img
                                src="images/img_group_deep_orange_200_57x50.svg"
                                alt="image_five"
                                className="justify-center h-[57px] left-0 bottom-0 right-0 top-0 m-auto absolute"
                              />
                              <div className="flex flex-col items-start justify-start w-2/5 gap-px bottom-[34%] right-[5%] m-auto absolute">
                                <Img
                                  src="images/img_vector_blue_gray_900_03_4x20.svg"
                                  alt="vector_fiftyone"
                                  className="h-1"
                                />
                                <Img
                                  src="images/img_vector_blue_gray_900_03_4x17.svg"
                                  alt="vector"
                                  className="h-1 ml-[3px]"
                                />
                              </div>
                              <Img
                                src="images/img_vector_blue_gray_900_03_6x18.svg"
                                alt="vector"
                                className="h-1.5 bottom-[37%] right-[7%] m-auto absolute"
                              />
                            </div>
                          </div>
                          <div className="h-[15px] w-[5px] bottom-[37%] right-[21%] m-auto bg-blue_gray-900_03 absolute" />
                        </div>
                      </div>
                      <Img src="images/img_plants.svg" alt="plants_one" className="h-[98px] mt-[-63px]" />
                    </div>
                  </div>
                  <Img src="images/img_vector_blue_gray_900_03_12x2.svg" alt="table_one" className="h-px" />
                </div>
              </div> */}
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-center w-full sm:flex-col">
            <div className="flex flex-row items-center justify-center w-full gap-[42px] sm:flex-col flex-wrap">
              {users.map((mentor , index)=>(
                <div key={index} >
                  <AllMentorsMaincard
                  image = {mentor.image.url}
                  name = {mentor.name}
                  email = {mentor.email}
                  />
                </div>
              ))}
              
            </div>
        </div>
        <Footer className="flex flex-col items-center justify-center w-full" />
      </div>
    </>
  );
}
