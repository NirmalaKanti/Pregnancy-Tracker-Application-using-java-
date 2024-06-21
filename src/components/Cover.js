// import React from 'react';
// import Navbar from './Navbar';
// import Footer from './Footer';
// import image from '../assets/pregnancy-nutrition-food-healthcare-infographics-illustration-vector.jpg';
// import image2 from '../assets/image_yoga.jpg';
// import './Cover.css';
// import { food_list } from '../assets/assets';
// import { yoga_list } from '../assets/assets';
// import { SiD } from 'react-icons/si';
// import Chatbot from './Chatbot.js'


// const Cover = () => {
//   const scrollToSection = () => {
//     document.getElementById('section2').scrollIntoView({ behavior: 'smooth' });
//   };


//   function handleImageClick(link) {
//     window.open(link, '_blank');
//   }
//   return (
//     <>
//       <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-[50vh] bg-orange-100 rounded-b-full"></div>
//       <Navbar />
//       <div className="mt-20  min-h-screen flex flex-col justify-between">
//         <div className="p-8">
//           <div className="flex items-center justify-center min-h-screen">
//             <img src="https://assets-global.website-files.com/6305ab39bd83e6b704958561/646ed44637054a8cb19bb579_Component%201.png" alt="Left Image" className="w-1/4 h-auto object-cover rounded-lg mr-4 mb-24" />
//             <div className="text-center mt-[-26vh]">
//               <h1 className="text-6xl font-bold text-gray-800 mb-4">Get The Best</h1> <h1 className="text-6xl font-bold text-gray-800 mb-4">Pregnancy Care</h1>
//               <h2 className="text-4xl text-gray-800 mb-8">with WeCare</h2>
//               <button className="bg-orange-500 text-white py-5 px-10 rounded-lg font-semibold hover:bg-orange-600  text-3xl" onClick={scrollToSection}>
//                 Explore Now
//               </button>
//             </div>
//             <img src="https://assets-global.website-files.com/6305ab39bd83e6b704958561/646ed446c155e528ca4574b1_Component%202.png" alt="Right Image" className="w-1/4 h-auto object-cover rounded-lg  ml-4 mb-24" />
//           </div>

//           <Chatbot/>

//           <div id="section1">
//             <br></br><br></br>
//             <h1 className='header'>Healthy food supports baby's development</h1>
//             <br></br><br></br>
//             <img src={image} alt="WeCare App Image" className='section1-img' />


//             <section id="program" class="mt-32 prg_section">
//               <h2 class="text-5xl font-bold text-gray-800 mb-4 text-center" style={{ fontFamily: 'sans-serif' }}>Our Workshops</h2>

//               <div class="mt-14 grid grid-cols-1 md:grid-cols-3 gap-4">
//                 <div class="col1 flex justify-center items-center">
//                   <a href="https://beejsanskar.imumz.com/?utm_source=web_homepage" target="_blank" class="w-inline-block">
//                     <div class="grid gap-2 rounded-t-3xl rounded-b-3xl shadow-lg">
//                       <img src="https://assets-global.website-files.com/6305ab39bd83e6b704958561/6511443c313368a91c8e822a_Frame%2030.png" loading="lazy" alt="" class="image-136 rounded-t-3xl rounded-b-none" />
//                       <img src="https://assets-global.website-files.com/6305ab39bd83e6b704958561/65114456d9d3260d5d14e5c2_Frame%2031.png" loading="lazy" alt="" class="image-136 rounded-t-none rounded-b-3xl" />
//                     </div>
//                   </a>
//                 </div>

//                 <div class="col2 flex justify-center items-center">
//                   <a href="https://workshop.imumz.com/?utm_source=web_homepage" target="_blank" class="w-inline-block">
//                     <div class="gap-2 rounded-t-3xl rounded-b-3xl shadow-lg">
//                       <img src="https://assets-global.website-files.com/6305ab39bd83e6b704958561/651145e9ff2d3e4c6bb90e24_Frame%2022.png" loading="lazy" alt="" class="image-136 rounded-t-3xl rounded-b-none" />
//                       <img src="https://assets-global.website-files.com/6305ab39bd83e6b704958561/651145f92bdae9d8a7cf8521_Frame%2023.png" loading="lazy" alt="" class="image-136 rounded-t-none rounded-b-3xl" />
//                     </div>
//                   </a>
//                 </div>

//                 <div class="col3 flex justify-center items-center">
//                   <a href="https://parenting.imumz.com/?utm_source=web_homepage" target="_blank" class="w-inline-block">
//                     <div class="gap-2 rounded-t-3xl rounded-b-3xl shadow-lg">
//                       <img src="https://assets-global.website-files.com/6305ab39bd83e6b704958561/651144f250d46c486f1730cd_Frame%2032.png" loading="lazy" alt="" class="image-136 rounded-t-3xl rounded-b-none" />
//                       <img src="https://assets-global.website-files.com/6305ab39bd83e6b704958561/651145040b9d2e884946be15_Frame%2033.png" loading="lazy" alt="" class="image-136 rounded-t-none rounded-b-3xl" />
//                     </div>
//                   </a>
//                 </div>
//               </div>
//             </section>


         
//             <section id="program" class="mt-32 prg_section">
//               <h2 class="text-5xl font-bold text-gray-800 mb-4 text-center">WeCare Premium Programs</h2>

//               <div class="mt-14 grid grid-cols-1 md:grid-cols-3 gap-4">
//                 <div class="flex justify-center items-center">
//                   <a href="https://program.imumz.com/?utm_source=web_homepage" target="_blank" class="w-inline-block">
//                     <div class="grid gap-2 rounded-t-3xl rounded-b-3xl shadow-lg">
//                       <img src="https://assets-global.website-files.com/6305ab39bd83e6b704958561/646edf03e7321b061e1db29f_Frame%2018.svg" loading="lazy" alt="" class="w-full h-[400px] rounded-t-3xl rounded-b-none object-cover" />
//                       <img src="https://assets-global.website-files.com/6305ab39bd83e6b704958561/646edf02946aa05ca6a0d4d3_Frame%2019.svg" loading="lazy" alt="" class="w-full h-[400px] rounded-t-none rounded-b-3xl object-cover" />
//                     </div>
//                   </a>
//                 </div>

//                 <div class="flex justify-center items-center">
//                   <a href="https://superparenting.imumz.com/?utm_source=web_homepage" target="_blank" class="w-inline-block">
//                     <div class="gap-2 rounded-t-3xl rounded-b-3xl shadow-lg">
//                       <img src="https://assets-global.website-files.com/6305ab39bd83e6b704958561/65e6c68eec6b040193f1f4b9_Frame%2028.png" loading="lazy" alt="" class="w-full h-[400px] rounded-t-3xl rounded-b-none object-cover" />
//                       <img src="https://assets-global.website-files.com/6305ab39bd83e6b704958561/646edf016d973afa3bcd91dc_Frame%2021.svg" loading="lazy" alt="" class="w-full h-[400px] rounded-t-none rounded-b-3xl object-cover" />
//                     </div>
//                   </a>
//                 </div>

//                 <div class="flex justify-center items-center">
//                   <a href="https://superparenting.imumz.com/?utm_source=web_homepage" target="_blank" class="w-inline-block">
//                     <div class="gap-2 rounded-t-3xl rounded-b-3xl shadow-lg">
//                       <img src="https://assets-global.website-files.com/6305ab39bd83e6b704958561/65d33eac71e9fd3b54b32681_Frame%2030.png" loading="lazy" alt="" class="w-full h-[400px] rounded-t-3xl rounded-b-none object-cover" />
//                       <img src="https://assets-global.website-files.com/6305ab39bd83e6b704958561/651148b10731261d77206657_Frame%2031.png" loading="lazy" alt="" class="w-full h-[400px] rounded-t-none rounded-b-3xl object-cover" />
//                     </div>
//                   </a>
//                 </div>
//               </div>
//             </section>






//           </div>
//           <div id="section2">
//             <br></br><br></br>
//             <h1 className='header'>Yoga supports well-being during pregnancy</h1>
//             <br></br><br></br>
//             <img src="https://media.istockphoto.com/id/583715124/vector/set-of-yoga-poses-for-pregnant-women.jpg?s=612x612&w=0&k=20&c=VIP-gtlOlOUhE63UF7EemmqhaD0P_FwJP8UPqlyVuWc=" alt="WeCare App Image" className="section1-img" />

//             <br></br><br></br>
//             <div className="img-container">
//               {yoga_list.map((item) => (
//                 <div key={item.id} className="image-container" onClick={() => handleImageClick(item.link)}>
//                   <img src={item.image} alt={item.description} />
//                   <h2>{item.description}</h2>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

        
//       </div>
//       <Footer />
//     </>
//   );
// }

// export default Cover;


import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Chatbot from './Chatbot.js';
import axios from 'axios';
import image from '../assets/pregnancy-nutrition-food-healthcare-infographics-illustration-vector.jpg';
import { yoga_list } from '../assets/assets';
import './Cover.css';

const Cover = () => {
  const [fetusAgeWeeks, setFetusAgeWeeks] = useState(null);
  const [fetusAgeDays, setFetusAgeDays] = useState(null);

  useEffect(() => {
    // Fetch the data from the API when the component mounts
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8084/api/v1/pregnancy/getAll');
        const data = response.data;
        // Assuming the API returns an array of pregnancy objects
        if (data && data.length > 0) {
          const pregnancy = data[0]; // Assuming you want the first pregnancy object
          setFetusAgeWeeks(pregnancy.fetusAgeWeeks);
          setFetusAgeDays(pregnancy.fetusAgeDays);
        }
      } catch (error) {
        console.error('Error fetching pregnancy data:', error);
      }
    };

    fetchData();
  }, []);

  const handleImageClick = (link) => {
    window.open(link, '_blank');
  };

  return (
    <>
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-[50vh] bg-orange-100 rounded-b-full"></div>
      <Navbar />
      <div className="mt-20 min-h-screen flex flex-col justify-between">
        <div className="p-8">
          <div className="flex items-center justify-center min-h-screen">
            <img
              src="https://assets-global.website-files.com/6305ab39bd83e6b704958561/646ed44637054a8cb19bb579_Component%201.png"
              alt="Left Image"
              className="w-1/4 h-auto object-cover rounded-lg mr-4 mb-24"
            />
            <div className="text-center mt-[-26vh]">
              {fetusAgeWeeks !== null && fetusAgeDays !== null ? (
                <>
                  <h1 className="text-6xl font-bold text-gray-800 mb-4">Your Fetus Age</h1>
                  <h2 className="text-4xl text-gray-800 mb-8">
                    {fetusAgeWeeks} weeks {fetusAgeDays} days
                  </h2>
                </>
              ) : (
                <h1 className="text-6xl font-bold text-gray-800 mb-4">Loading...</h1>
              )}
            </div>
            <img
              src="https://assets-global.website-files.com/6305ab39bd83e6b704958561/646ed446c155e528ca4574b1_Component%202.png"
              alt="Right Image"
              className="w-1/4 h-auto object-cover rounded-lg ml-4 mb-24"
            />
          </div>

          <Chatbot />

          <div id="section1">
            <br></br>
            <br></br>
            <h1 className="header">Healthy food supports baby's development</h1>
            <br></br>
            <br></br>
            <img src={image} alt="WeCare App Image" className="section1-img" />

            {/* WORKSHOPS */}
            <section id="program" className="mt-32 prg_section">
              <h2 className="text-5xl font-bold text-gray-800 mb-4 text-center" style={{ fontFamily: 'sans-serif' }}>Our Workshops</h2>

              <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="col1 flex justify-center items-center">
                  <a href="https://beejsanskar.imumz.com/?utm_source=web_homepage" target="_blank" className="w-inline-block">
                    <div className="grid gap-2 rounded-t-3xl rounded-b-3xl shadow-lg">
                      <img src="https://assets-global.website-files.com/6305ab39bd83e6b704958561/6511443c313368a91c8e822a_Frame%2030.png" loading="lazy" alt="" className="image-136 rounded-t-3xl rounded-b-none" />
                      <img src="https://assets-global.website-files.com/6305ab39bd83e6b704958561/65114456d9d3260d5d14e5c2_Frame%2031.png" loading="lazy" alt="" className="image-136 rounded-t-none rounded-b-3xl" />
                    </div>
                  </a>
                </div>

                <div className="col2 flex justify-center items-center">
                  <a href="https://workshop.imumz.com/?utm_source=web_homepage" target="_blank" className="w-inline-block">
                    <div className="gap-2 rounded-t-3xl rounded-b-3xl shadow-lg">
                      <img src="https://assets-global.website-files.com/6305ab39bd83e6b704958561/651145e9ff2d3e4c6bb90e24_Frame%2022.png" loading="lazy" alt="" className="image-136 rounded-t-3xl rounded-b-none" />
                      <img src="https://assets-global.website-files.com/6305ab39bd83e6b704958561/651145f92bdae9d8a7cf8521_Frame%2023.png" loading="lazy" alt="" className="image-136 rounded-t-none rounded-b-3xl" />
                    </div>
                  </a>
                </div>

                <div className="col3 flex justify-center items-center">
                  <a href="https://parenting.imumz.com/?utm_source=web_homepage" target="_blank" className="w-inline-block">
                    <div className="gap-2 rounded-t-3xl rounded-b-3xl shadow-lg">
                      <img src="https://assets-global.website-files.com/6305ab39bd83e6b704958561/651144f250d46c486f1730cd_Frame%2032.png" loading="lazy" alt="" className="image-136 rounded-t-3xl rounded-b-none" />
                      <img src="https://assets-global.website-files.com/6305ab39bd83e6b704958561/651145040b9d2e884946be15_Frame%2033.png" loading="lazy" alt="" className="image-136 rounded-t-none rounded-b-3xl" />
                    </div>
                  </a>
                </div>
              </div>
            </section>

            {/* WeCare Premium Programs */}
            <section id="program" className="mt-32 prg_section">
              <h2 className="text-5xl font-bold text-gray-800 mb-4 text-center">WeCare Premium Programs</h2>

              <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex justify-center items-center">
                  <a href="https://program.imumz.com/?utm_source=web_homepage" target="_blank" className="w-inline-block">
                    <div className="grid gap-2 rounded-t-3xl rounded-b-3xl shadow-lg">
                      <img src="https://assets-global.website-files.com/6305ab39bd83e6b704958561/646edf03e7321b061e1db29f_Frame%2018.svg" loading="lazy" alt="" className="w-full h-[400px] rounded-t-3xl rounded-b-none object-cover" />
                      <img src="https://assets-global.website-files.com/6305ab39bd83e6b704958561/646edf02946aa05ca6a0d4d3_Frame%2019.svg" loading="lazy" alt="" className="w-full h-[400px] rounded-t-none rounded-b-3xl object-cover" />
                    </div>
                  </a>
                </div>

                <div className="flex justify-center items-center">
                  <a href="https://superparenting.imumz.com/?utm_source=web_homepage" target="_blank" className="w-inline-block">
                    <div className="gap-2 rounded-t-3xl rounded-b-3xl shadow-lg">
                      <img src="https://assets-global.website-files.com/6305ab39bd83e6b704958561/65e6c68eec6b040193f1f4b9_Frame%2028.png" loading="lazy" alt="" className="w-full h-[400px] rounded-t-3xl rounded-b-none object-cover" />
                      <img src="https://assets-global.website-files.com/6305ab39bd83e6b704958561/646edf016d973afa3bcd91dc_Frame%2021.svg" loading="lazy" alt="" className="w-full h-[400px] rounded-t-none rounded-b-3xl object-cover" />
                    </div>
                  </a>
                </div>

                <div className="flex justify-center items-center">
                  <a href="https://superparenting.imumz.com/?utm_source=web_homepage" target="_blank" className="w-inline-block">
                    <div className="gap-2 rounded-t-3xl rounded-b-3xl shadow-lg">
                      <img src="https://assets-global.website-files.com/6305ab39bd83e6b704958561/65d33eac71e9fd3b54b32681_Frame%2030.png" loading="lazy" alt="" className="w-full h-[400px] rounded-t-3xl rounded-b-none object-cover" />
                      <img src="https://assets-global.website-files.com/6305ab39bd83e6b704958561/651148b10731261d77206657_Frame%2031.png" loading="lazy" alt="" className="w-full h-[400px] rounded-t-none rounded-b-3xl object-cover" />
                    </div>
                  </a>
                </div>
              </div>
            </section>
          </div>

          <div id="section2">
            <br></br>
            <br></br>
            <h1 className="header">Yoga supports well-being during pregnancy</h1>
            <br></br>
            <br></br>
            <img
              src="https://media.istockphoto.com/id/583715124/vector/set-of-yoga-poses-for-pregnant-women.jpg?s=612x612&w=0&k=20&c=VIP-gtlOlOUhE63UF7EemmqhaD0P_FwJP8UPqlyVuWc="
              alt="WeCare App Image"
              className="section1-img"
            />
            <br></br>
            <br></br>
            <div className="img-container">
              {yoga_list.map((item) => (
                <div key={item.id} className="image-container" onClick={() => handleImageClick(item.link)}>
                  <img src={item.image} alt={item.description} />
                  <h2>{item.description}</h2>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cover;

