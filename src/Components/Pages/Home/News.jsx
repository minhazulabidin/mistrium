import { FaArrowRightLong } from "react-icons/fa6"
import Container from "../../Utilities/Container"
import Flex from "../../Utilities/Flex"


const News = () => {
  return (
    <Container className="mt-[95px] mb-96">
      <div className="grid grid-cols-4 gap-[30px]">
        <div className="col-span-2 space-y-9">
          <button className="py-4 px-10 border border-primary rounded-4xl">See Your Interior Design</button>
          <h3 className="font-gupter font-bold text-3xl tracking-[2%] w-[349px]">
            Sign up fo the notification for add a new product’s
          </h3>
          <div class="flex rounded-[13px] overflow-hidden relative">
            <input type="email"
              placeholder="Your Business Email"
              class="px-4 py-4 text-sm outline-none bg-[#D9D9D982] w-4/5 rounded-[13px]"
              required />
            <button type="submit"
              class="flex items-center bg-[#c7a57b] text-white text-sm px-5 py-3 transition-all duration-300 hover:-translate-x-1 group rounded-[13px] absolute right-[128px] top-1">
              Get Started
              <span class="inline-block max-w-0 overflow-hidden transition-all duration-300 group-hover:max-w-[20px] group-hover:ml-2">
                <FaArrowRightLong />
              </span>
            </button>
          </div>
        </div>
        <div className="col-span-1 border">
          <img src="" alt="" />
          <h2>WAtch Video’s <FaArrowRightLong /></h2>
        </div>
        <div className="col-span-1 border">
          <img src="" alt="" />
        </div>
      </div>
    </Container>
  )
}

export default News