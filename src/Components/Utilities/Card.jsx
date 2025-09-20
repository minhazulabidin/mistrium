
import Flex from './Flex';
import { TiShoppingCart } from 'react-icons/ti';

const Card = ({ product }) => {
    const { img, name, updatePrice, beforePrice } = product;
    return (
        <div className="h-[595px] transition-transform duration-300 hover:-translate-y-3.5 cursor-pointer mx-4">
            <Flex className='card-body'>
                <div className="absolute top-[-35px]">
                    <button className="card-button">Add to cart <TiShoppingCart className="text-3xl text-[#72696A]" /></button>
                </div>
                <h3 className="card-title">{name}</h3>
                <h4 className="card-price">{updatePrice} <del className="text-second">{beforePrice}</del></h4>
            </Flex>
            <div className="relative">
                <img className="card-img" src={img} alt="" />
            </div>
        </div>
    )
}

export default Card