
// import './App.sass'
import Logo from './Imagens/Logo.png'
import ImgFoto from './Imagens/Sol.png'
import CarrouselMid from './Components/CarrouselBody2'
import Instagram  from './Imagens/intagram.png'
import Facebook from './Imagens/facebook.png'
import TikTok from './Imagens/tiktok.png'
import Wave from './Components/Wave'
import './App.scss';


function App() {

  
  return (
    
    <div className='main'>
      <div className='header'>
        <div className='box-logo'>
          <img src={Logo} className='logo' />
        </div>
        <div className='btn-box'>
          <button className='btn' id='btn'>Identidade</button>
          <button className='btn' id='btn'>Serviços</button>
          <button className='btn' id='btn'>Contato</button>
        </div>
        <div className='redes-sociais'>
          <div className='media'>
            <a href="https://www.instagram.com/salveline/"><img src={Instagram} alt="Instagram" className='socialMedia' /></a>
          </div>
          <div className='media'>
            <a href=""><img src={Facebook} alt="" className='socialMedia'/></a>
          </div>
          <div className='media'>
            <a href=""><img src={TikTok} alt="" className='socialMedia'/></a>
          </div>
        </div>
      </div>      
        <Wave/>      
      {/* FIM HEADER */}
      <div className='body1'>
        <div className='profile'>
         <div className='perfil'>
          <div className='perfil1'>
           <p className='name'>Stefany Nogueira</p>
           <img src={ImgFoto} className='ImgFoto' />
          </div>
          <div className='text'>
            <p className='name'>Perfil</p>
            <p className='namex'>Sou uma profissional apaixonada e dedicada no ramo da beleza, 
             especializada em cabelo e unhas. Com anos de experiência e um profundo conhecimento das últimas tendências e técnicas, 
             meu objetivo é <b> realçar a beleza única de cada cliente, </b> proporcionando serviços de alta qualidade e resultados impressionantes.</p>
          </div>
        <div/>     
       </div>
      </div>
    </div>
     <div className='body2'>
      <CarrouselMid/>
     </div>
     <div className='body3'></div>
     <div className='footer'></div>  
    </div>

  )
}

export default App

