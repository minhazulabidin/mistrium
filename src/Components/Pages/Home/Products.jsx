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
        <Container className="mt-[154px]">
            <Flex className='justify-between items-center mb-[77px] h-[71px]'>
                <h2 className="text-typography text-[40px]">Products</h2>
                <ul className="flex gap-[65px] self-end">
                    <li className="text-typography text-[25px]">Best Selling</li>
                    <li className="text-typography text-[25px]">Most Popular</li>
                    <li className="flex items-center gap-4 justify-center text-typography text-base text-primary">See All <FaArrowRightLong /></li>
                </ul>
            </Flex>

            <div className="grid grid-cols-3 gap-4">
                {
                    products.map((product) => <Card key={product?.id} product={product}/>)
                }
            </div>
        </Container>
    )
}

export default Products 