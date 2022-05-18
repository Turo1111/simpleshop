
import {BsCreditCard, BsReceipt} from 'react-icons/bs'
import { AiOutlineShoppingCart} from "react-icons/ai"
import {MdLocalShipping} from "react-icons/md"
import { useState } from 'react'
import Header from "../components/Header";
import Steppers from "../components/Steppers";
import ListCart from '../components/ListCart';
import { useAppContext } from '../context/context';
import Button from '../components/Button';
import Payment from '../components/Payment';
import { Total } from '../components/ItemCart/styles';
import Shipping from '../components/Shipping';
import EndCart from '../components/EndCart';
import { useResize } from '../hooks/useResize';
import HeaderMobile from '../components/HeaderMobile';
import { ContainerButton, ContainerListCart } from '../styles/stylesCO';

export default function Checkout() {

    const {cart} = useAppContext()
    const {ancho,alto} = useResize() 

    let array = [
        {
            title: "carrito",
            icon: <AiOutlineShoppingCart/>
        },
        {
            title: "metodo de pago",
            icon: <BsCreditCard/>
        },
        {
          title: "forma de envio",
          icon: <MdLocalShipping/>
        },
        {
            title: "finalizar",
            icon: <BsReceipt/>
        }
    ]

    const [indexActive, setIndexActive] = useState(0)

    const setArrowLeft = () => {
        indexActive !==0 && setIndexActive(indexActive-1)
    }

    const setArrowRight = () => {
        indexActive !== array.length-1 && setIndexActive(indexActive+1)
    }

    console.log(ancho, alto);

  return (
    <>
      {
        ancho <= 960 ? <HeaderMobile/> : <Header/>
      }
      <Steppers array={array} indexActive={indexActive} />
      <div style={{width: "100%"}}>
        {
            indexActive === 0 && <ContainerListCart><ListCart listproduct={cart.listproduct} style={{height: '100%'}} /></ContainerListCart>
        }
        {
            indexActive === 1 && <Payment/>
        }
        {
            indexActive === 2 && <Shipping/>
        }
        {
            indexActive === 3 && <EndCart listproduct={cart.listproduct} cart={cart}/>
        }
      </div>
      <ContainerButton> 
        {
          indexActive !== 0 ?  <Button width={"100px"} background={"#FEB139"} backgroundHover={"#fea539"} onClick={setArrowLeft} >Volver</Button> :
          <Button width={"100px"} background={"#d9d9d9"}>Volver</Button>
        }
        
        <Button width={"100px"} background={"#FEB139"} backgroundHover={"#fea539"} onClick={setArrowRight} >
          {
            indexActive !== array.length-1 ? "Siguiente" : "Finalizar"
          }
        </Button>
      </ContainerButton>
    </>
  )
}
