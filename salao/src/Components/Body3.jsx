import '../App.scss';
import ImgFoto from '../Imagens/stefany3.png'



export default function Formulario() {
  return(
    
    <div className="body3">
      <div className='line'></div>
      <div className='text-box3'>
       <p className='name'>CONTATO</p>
      </div>
      <div className="mainBox">
        <div className="imgProfile">
         <p className='name'>Stefany Brito</p>
         <img src={ImgFoto} alt=""  className="imgPhoto"/>        
        </div>
        <div className="formulario">
         <input className="input-name formStyle" type="text" name="name" placeholder="Nome Completo" required/>
         <input className="input-email formStyle" type="email" name="email" placeholder="Email" />
         <input className="input-telefone formStyle" type="tel" id="telefone" required placeholder="(xx) xxxxx-xxxx"/>
         <textarea className="input-textArea formStyle" name="message" id="textarea" cols="30" rows="10" required></textarea>
         <button className="btn-slider btn-flip" data-back="Back" data-front="Front"></button>
        </div>
      </div>
    </div>
  )
}