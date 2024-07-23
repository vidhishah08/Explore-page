import React from "react";
import Logo from "../assets/Logo1.png";
import Capture from "../assets/Capture.png";
import Capture1 from "../assets/Capture1.png";
import Capture2 from "../assets/Capture2.png";
import Capture3 from "../assets/Capture3.png";
import Capture4 from "../assets/Capture4.png";
import Capture5 from "../assets/Capture5.png";
import Capture6 from "../assets/Capture6.png";
import Capture7 from "../assets/Capture7.png";
import Capture8 from "../assets/Capture8.png";

function Explore() {
    return (
        <>
            <div className="bg-[#faf2ff] mx-[-152px] my-[-32px]">
                <div className="flex pb-[62px]">
                    <div className="pt-[20px] px-[20px] mr-[147px]">
                        <img src={Logo} alt="logo" className="w-[120px]" />
                    </div>
                    <div className="flex justify-between items-center text-gray-400 font-bold text-[15px] w-[800px] mr-[100px]">
                        <p className="text-[17px] text-black">Home</p>
                        <p>About</p>
                        <p>Learn</p>
                        <p>Play</p>
                        <p>Explore</p>
                        <p>Contact</p>
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="px-2 py-2 mr-[5px]">
                            <p className="text-black font-medium text-[17px]">EN</p>
                        </div>
                        <div className="mr-[5px]">
                            <img src={Capture1} alt="Capture1" className="w-[45px]"/>
                        </div>
                        <div className="mr-[15px]">
                            <button className="bg-[#380760] font-Caveat text-white font-medium text-center w-[120px] h-[40px] rounded-lg text-[20px]">Log in</button>
                        </div>
                        <div className="bg-white items-center">
                            <img src={Capture} alt="Capture" className="w-[38px]" />
                        </div>
                    </div>
                </div>
                <div className="ml-[150px] ">
                    <img src={Capture2} alt="Capture2" className="w-[400px]"/>
                </div>
                <div className="w-[700px] ml-[600px] mt-[-170px] bg-[#faf2ff] pb-[100px]">
                    <p className="text-[28px] font-bold text-start">Exxplooorr Edu is one of world best virtual learning Reaction eLearning</p>
                    <p className="text-[22px] text-[#380760] text-start">You can be your own Guiding star with our help</p>
                </div>
            </div>
            <div className="text-start mt-[50px] text-[25px] ">
                <div className="flex justify-center ">
                    <p className="text-[#530c90] mr-[70px] font-semibold">Movies</p>
                    <p className="mr-[70px] font-semibold">Book</p>
                    <p className="mr-[70px] font-semibold text-black/45">Directory</p>
                    <p className="mr-[70px] font-semibold">Therapist</p>
                    <p className="font-semibold">Quotes</p>
                    <img src={Capture3} alt="Capture3" className="ml-[300px]"/>
                </div>
            </div>
            <div className="bg-[#faf2ff] mx-[-152px] my-[-32px] mt-[20px]">
                <div className="flex">
                    <p className="text-[28px] ml-[190px] pt-[60px] font-bold">Today Special</p>
                    <button className="flex justify-center text-[#8782cf] mt-[78px] ml-[850px] font-bold text-[20px]">View All<img src={Capture4} alt="Capture4" className="mt-[-4px] ml-[10px]"/></button>
                </div>
                <div className="bg-[#380760] flex  mx-[150px] mt-[20px] rounded-2xl ">
                    <div className="bg-[#d9539c] mx-[25px] my-[25px] px-[220px] py-[130px] rounded-2xl">
                        <img src={Capture5} alt="Capture5"/>                    
                    </div>
                    <div className="text-start mt-[22px]">
                         <p className="text-[48px] font-bold text-white">Ghost Ball</p>
                         <p className="text-white text-[26px] pt-3">Category : Horror/Mystery</p>
                         <p className="text-white text-[26px] pt-1">Actor: Jenifer Ali,Charly Shelby...</p>
                         <p className="text-white/50 text-[20px] font-medium pt-3 w-[500px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo architect...</p>
                         <button className="flex justify-between text-[#d9539c] border-[1px] border-[#d9539c] bg-[#530c90] px-7 py-2.5 font-medium rounded-lg mt-[73px]"><img src={Capture6} alt="Capture6" className="mr-2"/>Explor OTT Drcatily</button>
                    </div>
                    <div>
                        <img src={Capture7} alt="Capture7" className="mt-7 ml-[-20px] w-[115px] h-[100px]"/>
                    </div>
                </div>
                <div className="flex justify-between mt-10 mx-[150px]">
                    <div className="bg-white px-5 py-5 rounded-lg w-[280px] ">
                        <div className="bg-[#ccc9ff] w-full h-[150px] rounded-lg"></div>
                        <p className="text-[28px] font-bold text-start pt-0.5">Ghost Ball</p>
                        <p className="text-[22px] font-light text-start pt-1 opacity-90">Horror/Mystery</p>
                        <p className="text-[16px] font-medium text-start3 pt-2 pb-[-10px]">Rotten Tomatoes:<span className="ml-8 text-[25px] font-bold text-[#4945b5]">87%</span></p>
                    </div>
                    <div className="bg-white px-5 py-5 rounded-lg w-[280px]">
                        <div className="bg-[#380760] w-full h-[150px] rounded-lg"></div>
                        <p className="text-[28px] font-bold text-start pt-0.5">Bye Bye Man</p>
                        <p className="text-[22px] font-light text-start pt-1 opacity-90">Action/Voilance</p>
                        <p className="text-[16px] font-medium text-start pt-2 pb-[-10px]">Rotten Tomatoes:<span className="ml-8 text-[25px] font-bold text-[#4945b5]">73%</span></p>
                    </div>
                    <div className="bg-white px-5 py-5 rounded-lg w-[280px] ">
                        <div className="bg-[#d9539c] w-full h-[150px] rounded-lg"></div>
                        <p className="text-[28px] font-bold text-start pt-0.5">Wrong</p>
                        <p className="text-[22px] font-light text-start pt-1 opacity-90">Action/18+</p>
                        <p className="text-[16px] font-medium text-start pt-2 pb-[-10px]">Rotten Tomatoes:<span className="ml-8 text-[25px] font-bold text-[#4945b5]">82%</span></p>
                    </div>
                    <div className="bg-white px-5 py-5 rounded-lg w-[280px] ">
                        <div className="bg-[#ccc9ff] w-full h-[150px] rounded-lg"></div>
                        <p className="text-[27px] font-bold text-start pt-0.5">Vampire Friends</p>
                        <p className="text-[22px] font-light text-start pt-1 opacity-90">Horror/16+</p>
                        <p className="text-[16px] font-medium text-start pt-2 pb-[-10px]">Rotten Tomatoes:<span className="ml-8 text-[25px] font-bold text-[#4945b5]">69%</span></p>
                    </div>
                </div>
                <div className="flex justify-between mt-5 mx-[150px]">
                    <div className="bg-white px-5 py-5 rounded-lg w-[280px] ">
                        <div className="bg-[#ccc9ff] w-full h-[150px] rounded-lg"></div>
                        <p className="text-[28px] font-bold text-start pt-0.5">Ghost Ball</p>
                        <p className="text-[22px] font-light text-start pt-1 opacity-90">Horror/Mystery</p>
                        <p className="text-[16px] font-medium text-start3 pt-2 pb-[-10px]">Rotten Tomatoes:<span className="ml-8 text-[25px] font-bold text-[#4945b5]">87%</span></p>
                    </div>
                    <div className="bg-white px-5 py-5 rounded-lg w-[280px]">
                        <div className="bg-[#380760] w-full h-[150px] rounded-lg"></div>
                        <p className="text-[28px] font-bold text-start pt-0.5">Bye Bye Man</p>
                        <p className="text-[22px] font-light text-start pt-1 opacity-90">Action/Voilance</p>
                        <p className="text-[16px] font-medium text-start pt-2 pb-[-10px]">Rotten Tomatoes:<span className="ml-8 text-[25px] font-bold text-[#4945b5]">73%</span></p>
                    </div>
                    <div className="bg-white px-5 py-5 rounded-lg w-[280px] ">
                        <div className="bg-[#d9539c] w-full h-[150px] rounded-lg"></div>
                        <p className="text-[28px] font-bold text-start pt-0.5">Wrong</p>
                        <p className="text-[22px] font-light text-start pt-1 opacity-90">Action/18+</p>
                        <p className="text-[16px] font-medium text-start pt-2 pb-[-10px]">Rotten Tomatoes:<span className="ml-8 text-[25px] font-bold text-[#4945b5]">82%</span></p>
                    </div>
                    <div className="bg-white px-5 py-5 rounded-lg w-[280px] ">
                        <div className="bg-[#ccc9ff] w-full h-[150px] rounded-lg"></div>
                        <p className="text-[27px] font-bold text-start pt-0.5">Vampire Friends</p>
                        <p className="text-[22px] font-light text-start pt-1 opacity-90">Horror/16+</p>
                        <p className="text-[16px] font-medium text-start pt-2 pb-[-10px]">Rotten Tomatoes:<span className="ml-8 text-[25px] font-bold text-[#4945b5]">69%</span></p>
                    </div>
                </div>
                <div className="mx-[200px] py-[80px]">
                    <img src={Capture8} alt="Capture8"/>
                </div>
            </div>
        </>
    );
}

export default Explore;
