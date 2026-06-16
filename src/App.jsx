import { useState } from 'react'
import './App.css'

function App() {
  const [nome,setNome] = useState()
  const[assunto, setAssunto ] = useState("")
  
  const navTo = (id) => {
    const element = document.getElementById(id)
    if(element){
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'

      })
    }

  }

  const enviar = () => {
    const mensagem = `Gostaria de entrar em contato! \n\nNome: ${Nome} \nAssunto: ${assunto}`
    const msg = encodeURIComponent(mensagem)
    
    window.open(`httmps://wa.me/*************?text=${esg}`)
  }
 

  return (
    <>
       <nav>
      <span class="navItem" onclick={() =>navTo('s1')}>
        <img src="../public/home.jpg" alt="Home" />
        <p class="navWords">Home</p>
      </span>
      <span class="navItem" onclick={() =>navTo('s3')}>
        <img src="../public/box.png" alt="Products" />
        <p class="navWords">Cards</p>
      </span>
      <span class="navItem" onclick={() =>navTo('s4')}>
        <img src="../public/vid.png" alt="Vídeo" />
        <p class="navWords">Vídeo</p>
      </span>
      <span class="navItem" onclick={() =>navTo('s5')}>
        <img src="../public/phone.png" alt="WhatsApp" />
        <p class="navWords">Contato</p>
      </span>
    </nav>
    <main>
      <section id="s1" class="s1">
        <h1>Título do banner</h1>
        <h2>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h2>
      </section>

      <section id="s3" class="s3">
        <div class="card">
          <img src="../public/UP.jpg" alt="" />
          <div class="textCard">
            <h4>Arara 01</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>

        <div class="card">
          <img src="../public/up2.jpg" alt="" />
          <div class="textCard">
            <h4>Arara 02</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>

        <div class="card">
          <img src="../public/up3.jpg" alt="" />
          <div class="textCard">
            <h4>Arara 03</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </section>

      <section id="s4" class="s4">
        <iframe
          class="video"
          src="https://www.youtube.com/embed/M5TroQasENI?si=C9K_Cljs_4gHWJCd"
          title="YouTube video player"
          allow="
            accelerometer;
            autoplay;
            clipboard-write;
            encrypted-media;
            gyroscope;
            picture-in-picture;
            web-share;
          "
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </section>

      <section id="s5" class="s5">
        <div class="formulario">
          <label htmlFor="nome">Nome:</label>
          <input type="text" id="nome" placeholder="Insira seu nome" value={nome} onChange={(event) => setNome(target.target.value)} />
          <label htmlFor="assunto">Assunto:</label>
          <textarea id="assunto" placeholder="Insira sua mensagem"value={assunto} onChange={(e) => setAssunto(event.target.value)} ></textarea>
          <button onclick="enviar()">ENVIAR</button>
        </div>
      </section>
    </main>
    <footer>
      <a href="https://facebook.com" target="_blank">
        <img width="30px" src="../public/faceic.png" alt="Facebook" />
      </a>
      <a href="https://instagram.com" target="_blank">
        <img width="30px" src="../public/insta ico.png" alt="Instagram" />
      </a>
      <a href="https://linkedin.com" target="_blank">
        <img width="30px" src="../public/linkedin ico.png" alt="Linkedin" />
      </a>
      <a href="https://github.com" target="_blank">
        <img width="30px" src="../public/github ico.png" alt="Github" />
      </a>
    </footer>
     
    </>
  )
}

export default App
