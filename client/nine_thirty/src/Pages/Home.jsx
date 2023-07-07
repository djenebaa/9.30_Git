// Page d'accueil sur laquelle on aimerait implémenter un caroussel avec qques photos de meubles. 
import React, { useEffect } from "react";

function Home() {
    useEffect(() => {
        // Initialize the carousel
        const carousel = document.querySelector("[data-te-carousel-init]");
        const carouselItems = carousel.querySelectorAll("[data-te-carousel-item]");
        const prevButton = carousel.querySelector("[data-te-slide='prev']");
        const nextButton = carousel.querySelector("[data-te-slide='next']");
        let currentIndex = 0;
    
        // Function to show the current active slide
        const showSlide = (index) => {
          carouselItems.forEach((item, i) => {
            item.classList.toggle("hidden", i !== index);
          });
        };
    
        // Function to handle slide transition
        const handleSlide = (direction) => {
          currentIndex = (currentIndex + direction + carouselItems.length) % carouselItems.length;
          showSlide(currentIndex);
        };
    
        // Event listeners for previous and next buttons
        prevButton.addEventListener("click", () => handleSlide(-1));
        nextButton.addEventListener("click", () => handleSlide(1));
      }, []);
    
    
  return (
    <div className="min-h-screen">
      {/* <p>Home page</p > */}
      <div
  id="carouselExampleControls"
  className="relative h-full"
  data-te-carousel-init
  data-te-carousel-slide>
 
  <div
    className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
    
    <div
      className="relative float-left -mr-[100%] h-screen w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
      data-te-carousel-item
      data-te-carousel-active>
      <img
        src="./brick-wall-1850095_1280.jpg"
        className="block w-full h-screen object-cover"
        alt="Living room picture" />
    </div>

    <div
      className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
      data-te-carousel-item>
      <img
        src="./kitchen-2400367_1280.jpg"
        className="block w-full h-screen object-cover"
        alt="Kitchen picture" />
    </div>
   
    <div
      className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
      data-te-carousel-item>
      <img
        src="./teak-172642_1280.jpg"
        className="block w-full h-screen object-cover"
        alt="House near sea picture" />
    </div>
  </div>

  <button
    className="absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
    type="button"
    data-te-target="#carouselExampleControls"
    data-te-slide="prev">
    <span className="inline-block h-8 w-8">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        className="h-6 w-6">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M15.75 19.5L8.25 12l7.5-7.5" />
      </svg>
    </span>
    <span
      className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
      >Previous</span >
  </button>
  
  <button
    className="absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
    type="button"
    data-te-target="#carouselExampleControls"
    data-te-slide="next">
    <span className="inline-block h-8 w-8">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        className="h-6 w-6">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M8.25 4.5l7.5 7.5-7.5 7.5" />
      </svg>
    </span>
    <span
      className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
      >Next</span>
  </button>
</div>
      </div>
  );
}

export default Home;
