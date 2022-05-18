import Alert from "../components/Alert";
import Carrousel from "../components/Carrousel";
import Header from "../components/Header";
import HeaderMobile from "../components/HeaderMobile";
import ListProduct from "../components/ListProduct";
import { useResize } from "../hooks/useResize";


export default function Home() {

  let imgs = ["/paisaje1.jpg", "/paisaje2.jpg", "/paisajeoscuro.jpg"]

  const {ancho,alto} = useResize() 

  return (
    <>
      {
        ancho <= 960 ? <HeaderMobile/> : <Header/>
      }
      <Carrousel imgs={imgs}/>
      <ListProduct/>
    </>
  )
}
