import { FaArrowRightLong } from "react-icons/fa6"
import Container from "../../Utilities/Container"
import newspic from "../../../assets/newspic.png"
import graySofa from "../../../assets/greySofa.png"
import Flex from "../../Utilities/Flex"

const News = () => {
  return (
    <Container className="mt-[95px]">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-[30px]">

        {/* Sofa Image */}
        <Flex className="order-1 lg:order-3 justify-center lg:justify-end col-span-1">
          <img src={graySofa} alt="Sofa" className="w-32 sm:w-40 md:w-48 lg:w-auto" />
        </Flex>

        {/* Signup Form */}
        <div className="order-2 lg:order-1 space-y-6 md:space-y-8 col-span-2 lg:mx-0 mx-3">
          {/* Hidden on mobile */}
          <button className="py-3 px-6 md:py-4 md:px-10 border border-first rounded-4xl text-sm md:text-base hidden sm:block">
            See Your Interior Design
          </button>

          <h3 className="font-gupter font-bold text-lg lg:text-2xl tracking-[2%] w-full lg:max-w-[349px]">
            Sign up fo the notification for add a new product’s
          </h3>

          <div className="flex rounded-[13px] overflow-hidden relative">
            <input
              type="email"
              placeholder="Your Business Email"
              className="px-4 py-3 md:py-4 text-sm outline-none bg-[#D9D9D982] flex-1 rounded-[13px]"
              required
            />
            <button
              type="submit"
              className="flex items-center bg-[#c7a57b] text-white text-sm px-4 md:px-5 py-2 md:py-3 transition-all duration-300 hover:-translate-x-1 group rounded-[13px] absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer"
            >
              Get Started
              <span className="inline-block max-w-0 overflow-hidden transition-all duration-300 group-hover:max-w-[20px] group-hover:ml-2">
                <FaArrowRightLong />
              </span>
            </button>
          </div>
        </div>

        {/* Watch Video Section */}
        <div className="order-3 lg:order-2 self-center hidden lg:flex col-span-1">
          <Flex className="items-center gap-3 md:gap-4">
            <img src={newspic} alt="Video" className="w-12 sm:w-16 md:w-auto" />
            <h2 className="flex gap-2 md:gap-3 items-center font-gupter text-base sm:text-lg md:text-xl">
              Watch Video’s <FaArrowRightLong />
            </h2>
          </Flex>
        </div>
      </div>
    </Container>
  )
}

export default News
