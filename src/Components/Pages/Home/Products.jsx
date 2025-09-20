import chair2 from "../../../assets/banner.png"
import chair from "../../../assets/chair.png"
import greenChair from "../../../assets/greenchair.png"
import Container from './../../Utilities/Container';
import Flex from './../../Utilities/Flex';
import { FaArrowRightLong } from "react-icons/fa6";
import Card from "../../Utilities/Card";

const Products = () => {
    const products = [
        {
            id: 1,
            name: "Sofa",
            updatePrice: "$500",
            beforePrice: "$800",
            img: chair2
        },
        {
            id: 2,
            name: "Chair",
            updatePrice: "$500",
            beforePrice: "$800",
            img: chair
        },
        {
            id: 3,
            name: "Green Chair",
            updatePrice: "$500",
            beforePrice: "$800",
            img: greenChair
        },
        {
            id: 4,
            name: "Chair",
            updatePrice: "$500",
            beforePrice: "$800",
            img: chair
        },
        {
            id: 5,
            name: "Green Chair",
            updatePrice: "$500",
            beforePrice: "$800",
            img: greenChair
        },
        {
            id: 6,
            name: "Sofa",
            updatePrice: "$500",
            beforePrice: "$800",
            img: chair2
        },
    ]

    return (
        <Container className="mt-[80px] md:mt-[154px]">
            {/* Heading + Tabs */}
            <Flex className="flex-col md:flex-row justify-between md:items-center mb-[40px] md:mb-[77px] gap-6">
                <h2 className="text-typography text-[28px] md:text-[40px] font-semibold">
                    Products
                </h2>

                <ul className="flex flex-row gap-4 md:gap-[65px] self-start md:self-end lg:my-0 my-8">
                    <li className="text-typography text-base md:text-[25px] cursor-pointer hover:text-first transition">
                        Best Selling
                    </li>
                    <li className="text-typography text-base md:text-[25px] cursor-pointer hover:text-first transition">
                        Most Popular
                    </li>
                    <li className="flex items-center gap-2 md:gap-4 justify-center text-typography text-base md:text-[18px] text-first cursor-pointer hover:underline">
                        See All <FaArrowRightLong />
                    </li>
                </ul>
            </Flex>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-[46px]">
                {
                    products.map((product) => (
                        <Card key={product?.id} product={product} />
                    ))
                }
            </div>
        </Container>
    )
}

export default Products
