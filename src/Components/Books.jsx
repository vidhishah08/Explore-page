import React from "react";
import Logo from "../assets/Logo1.png";
import Capture from "../assets/Capture.png";
import Capture1 from "../assets/Capture1.png";
import Capture2 from "../assets/Capture2.png";
import Capture3 from "../assets/Capture3.png";
import Capture4 from "../assets/Capture4.png";
import Capture6 from "../assets/Capture6.png";
import Capture7 from "../assets/Capture7.png";
import Capture9 from "../assets/Capture9.png";
import Capture10 from "../assets/Capture10.png";
import Capture11 from "../assets/Capture11.png";

function Books(){
    return(
        <>
            <div className="bg-[#faf2ff] mx-[-151px] my-[-32px]">
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
                <div className="flex flex-row justify-center ">
                    <p className=" mr-[70px] font-semibold">Movies</p>
                    <p className="mr-[70px] font-semibold text-[#530c90] text-[28px]">Book</p>
                    <p className="mr-[70px] font-semibold">Directory</p>
                    <p className="mr-[70px] font-semibold">Therapist</p>
                    <p className="font-semibold">Quotes</p>
                    <img src={Capture3} alt="Capture3" className="ml-[300px] w-[50px]"/>
                </div>
            </div>
            <div className="bg-[#faf2ff] mx-[-151px] my-[-32px] mt-[15px] px-[120px] py-[100px]">
                <img src={Capture9} alt="Capture9" className="w-[1300px]"/>
                <div className="mx-[6px] my-[50px] flex flex-row justify-between ">
                    <p className="text-[25px] font-bold">Today's Special</p>
                    <button className="flex justify-center text-[#8782cf] font-bold text-[20px]">View All<img src={Capture4} alt="Capture4" className="mt-[-4px] ml-[10px]"/></button>
                </div>
                <div className="flex flex-row ml-[-151px] my-[50px] overflow-x-hidden items-start pl-[160px] mr-[-120px]">
                    <div className="bg-[#380760] rounded-lg px-2 py-2 mr-5 flex flex-row">
                        <div> <img src={Capture10} alt="Capture10" className=" w-[450px] mt-[22px]"/></div>
                        <div className="ml-7 pt-7">
                            <p className="text-[35px] font-bold w-[400px] text-start leading-10 text-white">The Five People You Meet In Heaven</p>
                            <p className="text-[25px] font text-start text-white mt-7">book By - Mitch Albom</p>
                            <p className="text-[16px] text-start text-white/60 w-[350px] mt-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit...</p>
                            <button className="flex flex-row justify-center text-[#d9539c] border-[#d9539c] border-[1px] px-5 py-2 mt-7 rounded-xl bg-[#530c90] font-bold"><img src={Capture6} alt="Capture6" className="mr-3"/>Explor OTT Dractily</button>
                            <div className="ml-[255px] mt-[-58px]"><img src={Capture7} alt="Capture7"/></div>
                        </div>
                    </div>
                    <div className="bg-[#380760] rounded-lg px-2 py-2 mr-14 flex flex-row">
                        <div> <img src={Capture11} alt="Capture11" className="w-[450px] mt-[20px]"/></div>
                        <div className="ml-7 pt-7">
                            <p className="text-[35px] font-bold w-[400px] text-start leading-10 text-white">The Five People You Meet In Heaven</p>
                            <p className="text-[25px] font text-start text-white mt-7">book By - Mitch Albom</p>
                            <p className="text-[16px] text-start text-white/60 w-[350px] mt-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit...</p>
                            <button className="flex flex-row justify-center text-[#d9539c] border-[#d9539c] border-[1px] px-5 py-2 mt-7 rounded-xl bg-[#530c90] font-bold"><img src={Capture6} alt="Capture6" className="mr-3"/>Explor OTT Dractily</button>
                            <div className="ml-[255px] mt-[-58px]"><img src={Capture7} alt="Capture7"/></div>
                        </div>
                    </div>
                    
                </div>
                <div className="mt-[70px]">
                       <img src={Capture9} alt="Capture9" className="w-[1300px]"/> 
                </div>
            </div>
        </>
    )
}

export default Books