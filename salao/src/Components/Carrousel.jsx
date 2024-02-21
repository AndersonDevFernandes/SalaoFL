
import Slider from "react-slick";
import Cabelo from '../Imagens/Cabelos.jpg'
import Unhas from '../Imagens/Unhas.jpg'
import Maquiagem from '../Imagens/Maquiagem.png'
import '../App.scss'

// import '../Style.sass'



export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider className="Slider" {...settings}>
      <div className="slider-box">
       <img src={Cabelo} alt="Cabelo" className="imgCarrousel" />
      </div>
      <div className="slider-box">
       <img src={Unhas} alt="Unhas" className="imgCarrousel"/>
      </div>
      <div className="slider-box">
       <img src={Maquiagem} alt="maquiagem" className="imgCarrousel"/>
      </div>
    </Slider>
  );
}