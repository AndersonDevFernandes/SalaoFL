
// import './App.sass'
import Logo from './Imagens/Logo.png'
import ImgFoto from './Imagens/stefany1.png'
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
            <a href="https://www.instagram.com/espaco_stefany_nogueira/reels/"><img src={Instagram} alt="Instagram" className='socialMedia' /></a>
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
           <p className=' fname'>Stefany Nogueira</p>
           <img src={ImgFoto} className='ImgFoto lineVert' />
          </div>          
          <div className='text'>
            <p className='name'>Perfil</p>
            <p className='namex'>
             Com anos de experiência e um profundo conhecimento das últimas tendências e técnicas, 
             meu objetivo é <b> realçar a beleza única de cada cliente, </b> </p>
          </div>
        </div>
      </div>
    </div>
    <div className='line'></div>
    <div className='text-mid'>
     <p className='nameA nameMid'>Catagolo de Serviços</p>
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

