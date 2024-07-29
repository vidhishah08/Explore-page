import React,{useState} from "react";
import Logo from "../assets/Logo1.png";
import Capture from "../assets/Capture.png";
import Capture1 from "../assets/Capture1.png";
import Capture12 from "../assets/Capture12.png";
import Capture13 from "../assets/Capture13.png"
import Capture14 from "../assets/Capture14.png"
import Capture15 from "../assets/Capture15.png"
import Capture16 from "../assets/Capture16.png"
import Capture17 from "../assets/Capture17.png"
import Capture18 from "../assets/Capture18.png"
import Capture19 from "../assets/Capture19.png"
import Capture20 from "../assets/Capture20.png"
import Capture21 from "../assets/Capture21.png"

function Page2(){
    const [currentIndex, setCurrentIndex] = useState(0);
    const years = ['1885 - 1885', '1991', '1887 - 1887'];
  
    const prevSlide = () => {
      const isFirstSlide = currentIndex === 0;
      const newIndex = isFirstSlide ? years.length - 1 : currentIndex - 1;
      setCurrentIndex(newIndex);
    };
  
    const nextSlide = () => {
      const isLastSlide = currentIndex === years.length - 1;
      const newIndex = isLastSlide ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
    };
    return(
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
                            <img src={Capture1} alt="Capture1" className="w-[45px]" />
                        </div>
                        <div className="mr-[15px]">
                            <button className="bg-[#380760] font-Caveat text-white font-medium text-center w-[120px] h-[40px] rounded-lg text-[20px]">Log in</button>
                        </div>
                        <div className="bg-white items-center">
                            <img src={Capture} alt="Capture" className="w-[38px]" />
                        </div>
                    </div>
                </div>
                <div>
                    <p className="text-[35px] font-bold w-[700px] ml-[380px]">Embark on a captivating journey through the timeline of psychology,</p>
                    <p className="text-[#380760] text-[20px] font-medium ml-[-75px] pt-[10px]">Unraveling the fascinating evolution of this groundbreaking feild</p>
                </div>
    
        </div>
        <div className="bg-[#faf2ff] py-10  mx-[-151px] ">
            <img src={Capture12} alt="Capture12" className="w-full mt-[70px]"/>
            <div className="relative w-full max-w-md mx-auto">
                <div className="flex justify-between items-center py-4 w-[250px] ml-[100px]">
                    <button onClick={prevSlide} className="text-pink-500 bg-white px-2 py-1 rounded-full ">
                        &lt;
                    </button>
                <div className="text-[28px] font-extrabold text-[#380760]">
                    {years[currentIndex]}
                </div>
                <button onClick={nextSlide} className="text-pink-500  bg-white px-2 py-1 rounded-full ">
                    &gt;
                </button>
            </div>
            <div className="text-center mt-[-10px] pb-[400px]">
                <p className="text-[11px] font-medium text-gray-500">you Explor YOur Faavorty Year tho alost</p>
            </div>
        </div>
    </div>
    <div className="bg-[#4f2b6b] h-[650px] mt-[-50px]  mx-[-150px]">
                <img src={Capture13} alt="Capture4" className="pt-[251px] pl-[650px]  "/>
                <div>
                    <img src={Capture14} alt="Capture5" className="mt-[-500px] ml-[150px]"/>
                    <p className="text-white text-[16px] font-medium w-[450px] text-start ml-[390px] mt-[-125px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, sit repellat? Optio, molestias officiis. Vitae ratione dolorem sapiente recusandae, fugit magnam</p>
                </div>
                <div className="text-white font-medium text-[17px] text-start mt-[70px] ml-[150px]">
                    <p className="mb-[18px]">Home</p>
                    <p className="mb-[18px]">About Us</p>
                    <p className="mb-[18px]">Services</p>
                    <p className="mb-[18px]">Page</p>
                    <p className="mb-[18px]">FAQ</p>
                    <p>Career</p>
                </div>
                <div>
                    <div className="flex justify-center items-start ml-[-700px] mt-[-250px]">
                        <img src={Capture15} alt="Capture6" className="w-[50px]" />
                        <p className="text-white font-semibold text-[20px] px-[5px] pt-1">Website</p>
                    </div>
                    <p className="text-white ml-[-570px] mt-[-10px]">www.psychobece.xyz</p>
                    <div className="flex justify-center items-start ml-[-700px] mt-[15px]">
                        <img src={Capture16} alt="Capture7" className="w-[40px]" />
                        <p className="text-white font-semibold text-[20px] px-[5px] pt-1">Phone </p>
                    </div>
                    <p className="text-white ml-[-600px] mt-[-6px]">+012 2398 27398</p>
                    <div className="flex justify-center items-start ml-[-700px] mt-[15px]">
                        <img src={Capture17} alt="Capture8" className="w-[40px]" />
                        <p className="text-white font-semibold text-[20px] px-[5px] pt-1">Email </p>
                    </div>
                    <p className="text-white ml-[-570px] mt-[-6px]">mail@psycho.bece</p>
                    <img src={Capture18} alt="Capture9" className="ml-[350px] h-[43px] mt-[15px]"/>
                </div>
                <div className="flex justify-center ml-[-830px] mt-5">
                    <img src={Capture19} alt="Capture10" />
                    <p className="text-white text-[10px] pt-1 ">2023 All rights Reserved. Design and Developed With love by Digital Ipsum</p>
                </div>
                <div className="flex justify-center ml-[900px] mt-[-400px]">
                    <p className="text-[32px] font-light text-white">A Brand Of</p>
                    <img src={Capture20} alt="Capture12" className="mt-[-25px] pl-2 h-[70px]"/>
                </div>
                <img src={Capture21} alt="Capture12" className="ml-[1100px] mt-[25px] w-[250px]"/>
            </div>
            <div className="flex mt-[-850px]">
                <div className="h-[300px] w-[200px] rounded-r-xl bg-[#d9539c] ml-[-150px] mr-[35px]"></div>
                <div className="h-[220px] w-[330px] rounded-xl bg-[#d9539c] mt-[80px] mr-[35px]"></div>
                <div className="h-[300px] w-[330px] rounded-xl bg-[#d9539c] mr-[35px]"></div>
                <div className="h-[180px] w-[330px] rounded-xl bg-[#d9539c] mt-[120px] mr-[35px]"></div>
                <div className="h-[300px] w-[186px] rounded-l-xl bg-[#d9539c] mr-[-180px]"></div>
            </div>   
    </>
    ) 
}

export default Page2