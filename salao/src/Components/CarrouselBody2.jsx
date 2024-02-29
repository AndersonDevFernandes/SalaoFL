import Slider1 from "react-slick";
import Cabelo1 from '../imagens2/cabelo1.png'
import Cabelo2 from '../imagens2/cabelo2.png'
import Cabelo3 from '../imagens2/cabelo3.png'
import Unhas1 from '../imagens2/unhas1.png'
import Unhas2 from '../imagens2/unhas2.png'
import Unhas3 from '../imagens2/unhas3.png'
import '../App.scss'


// https://react-slick.neostack.com/docs/get-started


export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
  <div>
   <div>
    <Slider1 className="Slider" {...settings}>
      <div className="slider-box">
       <div className="slider-box-order">
         <div className="slider-box-img gapSlider">
          <img src={Cabelo1} alt="Cabelo" className="imgCarrousel" />
         </div>
         <div className="slider-box-text gapSlider">
          <div className="inner-text-slider">
           <p className="nameA">CORTE + ESCOVA</p>
           <p className="nameA">Renove completamente o seu visual com a magia do corte e escovação! Nossa equipe de especialistas em cabelo está preparada para conceber um estilo deslumbrante que elevará sua confiança e brilho interior. A harmonia entre um corte personalizado e uma escovação profissional resulta em cabelos impecáveis, repletos de elegância e dinamismo. Descubra a sua verdadeira beleza e conquiste um visual irresistível que cativará a todos ao seu redor.</p>
          <div className="button11">
            <button className="btn-slider btn-flip" data-back="Back" data-front="Front"></button>
           </div>
          </div>         
         </div>
        </div>
       </div>
      <div className="slider-box">
      <div className="slider-box-order">
         <div className="slider-box-img gapSlider">
          <img src={Cabelo2} alt="Cabelo" className="imgCarrousel" />
         </div>
         <div className="slider-box-text gapSlider">
         <div className="inner-text-slider">
          <p className="nameA">PROGRESSIVA</p>
          <p className="nameA">Descubra a transformação dos seus cabelos com a escova progressiva: alisamento impecável, controle do frizz e uma dose de autoconfiança para deslumbrar o mundo com fios sedosos e impecáveis.</p>
          <div className="button11">
           <button className="btn-slider btn-flip" data-back="Back" data-front="Front"></button>
          </div>
         </div>          
        </div>
       </div>
      </div>
      <div className="slider-box">
       <div className="slider-box-order">
         <div className="slider-box-img gapSlider">
          <img src={Cabelo3} alt="Cabelo" className="imgCarrousel" />
         </div>
         <div className="slider-box-text gapSlider">
         <div className="inner-text-slider">
          <p className="nameA">CORTE FEMININO</p>
          <p className="nameA">Descubra a Beleza que Vai Além do Corte de Cabelo!
           Nosso corte de cabelo feminino é muito mais do que uma simples mudança no visual. É uma experiência emocionante, onde cada movimento da tesoura traz consigo uma transformação interna. Sinta-se poderosa, confiante e pronta para conquistar o mundo com um corte de cabelo que reflete a sua personalidade única. Nossos especialistas estão prontos para criar um estilo que irá realçar sua beleza natural e ressaltar seus traços mais marcantes.</p>
           <div className="button11">
            <button className="btn-slider btn-flip" data-back="Back" data-front="Front"></button>
          </div>
        </div>
          
         </div>
        </div>
      </div>
    </Slider1>
    <br />
    <Slider1 className="Slider" {...settings}>
    <div className="slider-box">
       <div className="slider-box-order">
         <div className="slider-box-img gapSlider">
          <img src={Unhas1} alt="Cabelo" className="imgCarrousel" />
         </div>
         <div className="slider-box-text gapSlider">
         <div className="inner-text-slider">
          <p className="nameA">UNHAS EM GEL</p>
          <p className="nameA">Descubra a Beleza que Vai Além do Corte de Cabelo!
           Nosso corte de cabelo feminino é muito mais do que uma simples mudança no visual. É uma experiência emocionante, onde cada movimento da tesoura traz consigo uma transformação interna. Sinta-se poderosa, confiante e pronta para conquistar o mundo com um corte de cabelo que reflete a sua personalidade única. Nossos especialistas estão prontos para criar um estilo que irá realçar sua beleza natural e ressaltar seus traços mais marcantes.</p>
           <div className="button11">
           <button className="btn-slider btn-flip" data-back="Back" data-front="Front"></button>
          </div>
          </div>          
         </div>
        </div>
      </div>
      <div className="slider-box">
       <div className="slider-box-order">
         <div className="slider-box-img gapSlider">
          <img src={Unhas2} alt="Cabelo" className="imgCarrousel" />
         </div>
         <div className="slider-box-text gapSlider">
         <div className="inner-text-slider">
          <p className="nameA">UNHAS EM PORCELANA</p>
          <p className="nameA">Descubra a elegância das unhas de porcelana, feitas com pó acrílico para um acabamento impecável! Com tips ou moldes personalizados, você terá unhas perfeitamente adaptadas ao seu estilo. A manutenção é rápida, apenas a cada 15 dias, garantindo sempre um visual impecável. Evite preocupações com descolamentos graças à nossa cola especializada. Embora glamorosas, recomendamos cuidado se suas unhas forem frágeis ou se você tiver alergias. Desfrute da sofisticação das unhas de porcelana e mantenha-se sempre deslumbrante!</p>
          <div className="button11">
           <button className="btn-slider btn-flip" data-back="Back" data-front="Front"></button>
          </div>
         </div>         
        </div>
       </div>
      </div>
      <div className="slider-box">
       <div className="slider-box-order">
         <div className="slider-box-img gapSlider">
          <img src={Unhas3} alt="Cabelo" className="imgCarrousel" />
         </div>
         <div className="slider-box-text gapSlider">
         <div className="inner-text-slider">
          <p className="nameA">FRANCESINHA</p>
          <p className="nameA">Explore a elegância atemporal das unhas francesinhas! Versáteis e sofisticadas, são ideais para todos os momentos. Personalize-as com diferentes formas e decorações, como delicadas flores. Ou adicione um toque de cor para uma vibe única. Descubra como o clássico pode ser ainda mais especial com as unhas francesinhas!</p>
          <div className="button11">
           <button className="btn-slider btn-flip" data-back="Back" data-front="Front"></button>
          </div>
          </div>         
         </div>
        </div>
      </div>
    </Slider1>
   </div>
  </div>

 );
}