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
      setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Container className="flex gap-[108px] w-full">
      <div className="flex flex-col items-center">
        <img
          src={testimonials[activeIndex].image}
          alt=""
          className="w-[477px] h-[615px] border border-blue-300"
        />
        <div className="flex gap-2 mt-4">
          {testimonials.map((t, idx) => (
            <img
              key={idx}
              src={t.image}
              alt=""
              className={`w-16 h-16 cursor-pointer border ${idx === activeIndex ? "border-gray-500" : "border-gray-200"
                }`}
              onClick={() => setActiveIndex(idx)}
            />
          ))}
        </div>
      </div>

      <Flex className="flex-1 flex-col justify-between items-center mt-[71px]">
        <div className="h-full">
          <h2 className="text-[55px] text-typography mb-[34px]">
            Let's See What Our Customer Say
          </h2>
          <p className="text-xl font-habibi font-normal leading-[28px] tracking-[2px] w-[560px]">{testimonials[activeIndex].text}</p>
          <div className="flex items-center justify-between">
            <Flex className="justify-around w-full mt-[100px]">
              <div>
                <span className="text-typography text-[22px]">{testimonials[activeIndex].name}</span>
                <p className="font-habibi font-normal text-lg tracking-[2px]">{testimonials[activeIndex].date}</p>
              </div>
              <div className="text-yellow-500 text-lg">
                {"⭐".repeat(testimonials[activeIndex].rating)}
              </div>
            </Flex>

          </div>

          <Flex className="mt-6 justify-end items-end h-[120px]">
            <div className="space-x-4">
              <button
                className="carousel-btn"
                onClick={() =>
                  setActiveIndex(
                    activeIndex === 0 ? testimonials.length - 1 : activeIndex - 1
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
