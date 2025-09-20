import { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import person1 from "../../assets/person1.jpg";
import person2 from "../../assets/person2.png";
import person3 from "../../assets/person3.jpg";
import person4 from "../../assets/person4.jpg";
import Container from "./Container";
import Flex from "./Flex";

const testimonials = [
  {
    name: "Istiak Mahmud",
    date: "08 August 2022",
    rating: 5,
    image: person1,
    text: "Graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful",
  },
  {
    name: "Jane Doe",
    date: "10 August 2022",
    rating: 4,
    image: person2,
    text: "Graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a doce without relying on meaningful content.",
  },
  {
    name: "Anna Smith",
    date: "12 August 2022",
    rating: 5,
    image: person3,
    text: "Graphic design, Lorem ipsum is a placeholder text commonly used to demonstment or a typeface without relying on meaningful content.",
  },
  {
    name: "Anna Smith",
    date: "12 August 2022",
    rating: 5,
    image: person4,
    text: "Graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface ",
  },
];

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) =>
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Container className="flex flex-col lg:flex-row gap-8 lg:gap-[108px] w-full">
      {/* Image Section */}
      <div className="flex flex-col items-center">
        <img
          src={testimonials[activeIndex].image}
          alt=""
          className="w-full max-w-[320px] sm:max-w-[300px] lg:max-w-[477px] lg:h-[615px] h-[515px] rounded-md object-cover"
        />
        <div className="flex gap-2 mt-4 flex-wrap justify-center">
          {testimonials.map((t, idx) => (
            <img
              key={idx}
              src={t.image}
              alt=""
              className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-cover cursor-pointer border rounded-md 
              ${idx === activeIndex ? "border-gray-500" : "border-gray-200"}`}
              onClick={() => setActiveIndex(idx)}
            />
          ))}
        </div>
      </div>

      {/* Text Section */}
      <Flex className="flex-1 flex-col justify-between items-center lg:items-start mt-6 lg:mt-[71px] text-center lg:text-left">
        <div className="h-full">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[55px] text-typography mb-4 lg:mb-[34px]">
            Let's See What Our Customer Say
          </h2>
          <p className="text-base sm:text-lg md:text-xl font-habibi font-normal leading-relaxed tracking-wide max-w-full sm:max-w-[90%] md:max-w-[560px] mx-auto lg:mx-0">
            {testimonials[activeIndex].text}
          </p>

          <div className="flex items-center justify-center lg:justify-between w-full mt-10 lg:mt-[100px]">
            <Flex className="flex-col sm:flex-row justify-center sm:justify-between items-center gap-4 w-full">
              <div>
                <span className="block text-typography text-lg sm:text-xl md:text-[22px]">
                  {testimonials[activeIndex].name}
                </span>
                <p className="font-habibi font-normal text-sm sm:text-base md:text-lg tracking-wide">
                  {testimonials[activeIndex].date}
                </p>
              </div>
              <div className="text-yellow-500 text-base sm:text-lg">
                {"⭐".repeat(testimonials[activeIndex].rating)}
              </div>
            </Flex>
          </div>

          {/* Buttons */}
          <Flex className="mt-6 justify-center lg:justify-end items-end h-[80px] lg:h-[120px]">
            <div className="space-x-4">
              <button
                className="carousel-btn"
                onClick={() =>
                  setActiveIndex(
                    activeIndex === 0
                      ? testimonials.length - 1
                      : activeIndex - 1
                  )
                }
              >
                <FaArrowLeft />
              </button>
              <button
                className="carousel-btn"
                onClick={() =>
                  setActiveIndex(
                    activeIndex === testimonials.length - 1 ? 0 : activeIndex + 1
                  )
                }
              >
                <FaArrowRight />
              </button>
            </div>
          </Flex>
        </div>
      </Flex>
    </Container>
  );
};

export default Carousel;
