import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import person1 from "../../assets/person1.jpg";
import person2 from "../../assets/person2.png";
import person3 from "../../assets/person3.jpg";
import person4 from "../../assets/person4.jpg";
import Container from "./Container";

const testimonials = [
  {
    name: "Istiak Mahmud",
    date: "08 August 2022",
    rating: 5,
    image: person1,
    text: "Graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.",
  },
  {
    name: "Jane Doe",
    date: "10 August 2022",
    rating: 4,
    image: person2,
    text: "Another testimonial text here that explains what the customer thought about our service.",
  },
  {
    name: "Anna Smith",
    date: "12 August 2022",
    rating: 5,
    image: person3,
    text: "More testimonial text to show the satisfaction of our clients with our work.",
  },
  {
    name: "Anna Smith",
    date: "12 August 2022",
    rating: 5,
    image: person4,
    text: "Another satisfied customer testimonial goes here to enhance trust.",
  },
];

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 3000); // 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <Container className="flex gap-8 items-center w-full">
      {/* Left: Large Image */}
      <div className="flex flex-col items-center">
        <img
          src={testimonials[activeIndex].image}
          alt=""
          className="w-full h-auto border border-blue-300"
        />
        {/* Thumbnails */}
        <div className="flex gap-2 mt-4">
          {testimonials.map((t, idx) => (
            <img
              key={idx}
              src={t.image}
              alt=""
              className={`w-16 h-16 cursor-pointer border ${
                idx === activeIndex ? "border-blue-500" : "border-gray-200"
              }`}
              onClick={() => setActiveIndex(idx)}
            />
          ))}
        </div>
      </div>

      {/* Right: Testimonial */}
      <div className="flex-1 flex flex-col justify-center">
        <h2 className="text-2xl font-semibold mb-4">
          Let's See What Our Customer Say
        </h2>
        <p className="mb-6 text-gray-700">{testimonials[activeIndex].text}</p>

        <div className="flex items-center justify-between">
          <div>
            <span className="font-bold">{testimonials[activeIndex].name}</span>
            <p className="text-gray-500">{testimonials[activeIndex].date}</p>
          </div>
          <div className="text-yellow-500 text-lg">
            {"⭐".repeat(testimonials[activeIndex].rating)}
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className="flex gap-4 mt-6">
          <button
            className="p-2 border rounded-full"
            onClick={() =>
              setActiveIndex(
                activeIndex === 0 ? testimonials.length - 1 : activeIndex - 1
              )
            }
          >
            <FaArrowLeft />
          </button>
          <button
            className="p-2 border rounded-full"
            onClick={() =>
              setActiveIndex(
                activeIndex === testimonials.length - 1 ? 0 : activeIndex + 1
              )
            }
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
    </Container>
  );
};

export default Carousel;
