import { useEffect, useState } from 'react';
import styles from './App.module.css';

const navItems = [
  {
    id: 's1',
    label: 'Home',
    icon: '/icons/home.jpg',
  },
  {
    id: 's3',
    label: 'Produtos',
    icon: '/icons/box.png',
  },
  {
    id: 's5',
    label: 'Contatos',
    icon: '/icons/phone.png',
  },
];

const products = [
  {
    image: '/images/roupa1.jpg',
    title: 'roupa1',
    description: 'Mikey e Minnie',
  },
  {
    image: '/images/roupa2.jpg',
    title: 'roupa',
    description: 'Camisa de ciclismo',
  },
  {
    image: '/images/roupa3.jpg',
    title: 'roupa',
    description: 'Ursinho',
  },
];

const socials = [
  { href: 'https://facebook.com', icon: '/icons/facebook.png', alt: 'Facebook' },
  { href: 'https://www.instagram.com/luis.fernando_mk/', icon: '/icons/instagram.png', alt: 'Instagram' },
  { href: 'https://linkedin.com', icon: '/icons/linkedin.png', alt: 'LinkedIn' },
  { href: 'https://github.com/FernandoNul', icon: '/icons/github.png', alt: 'GitHub' },
];

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [nome, setNome] = useState('');
  const [assunto, setAssunto] = useState('');

  useEffect(() => {
    document.body.classList.toggle('dark-mode', darkMode);

    return () => {
      document.body.classList.remove('dark-mode');
    };
  }, [darkMode]);

  function navTo(id) {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }

  function enviar(event) {
    event.preventDefault();

    const mensagem = `Gostaria de entrar em contato!\n\nNome: ${nome} \nAssunto: ${assunto}`;
    const msg = encodeURIComponent(mensagem);

    window.open(`https://wa.me/************?text=${msg}`, '_blank', 'noopener,noreferrer');
  }

  return (
    <div className={styles.page}>
      <nav className={styles.nav}>
        {navItems.map((item) => (
          <button
            key={item.id}
            type="button"
            className={styles.navItem}
            onClick={() => navTo(item.id)}
          >
            <img src={item.icon} alt={item.label} />
            <span className={styles.navWords}>{item.label}</span>
          </button>
        ))}
      </nav>

      <main>
        <section id="s1" className={styles.hero}>
          <button
            type="button"
            className={darkMode ? styles.toggleBtnDark : styles.toggleBtn}
            onClick={() => setDarkMode((prev) => !prev)}
            aria-label="Alternar tema dark e light"
          >
            <span className={darkMode ? styles.circleDark : styles.circle}>
              <i className={darkMode ? 'fa-solid fa-moon icon' : 'fa-solid fa-sun icon'} />
            </span>
          </button>

          <h1>"Brecho"</h1>
          <h2>roupas e consertos entre em contato!!!!</h2>
        </section>

        <section id="s3" className={styles.products}>
          <h1>Produtos</h1>

          <div className={styles.cardsGrid}>
            {products.map((product) => (
              <article key={product.image} className={styles.card}>
                <img src={product.image} alt={product.title} />
                <div className={styles.textsCard}>
                  <h4>{product.title}</h4>
                  <p>{product.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="s5" className={styles.contact}>
          <form className={styles.formulario} onSubmit={enviar}>
            <label htmlFor="nome">Digite seu nome</label>
            <input
              type="text"
              id="nome"
              placeholder="Insira seu nome"
              value={nome}
              onChange={(event) => setNome(event.target.value)}
            />

            <label htmlFor="assunto">Assunto</label>
            <textarea
              id="assunto"
              placeholder="Insira sua mensagem"
              value={assunto}
              onChange={(event) => setAssunto(event.target.value)}
            />

            <button type="submit">ENVIAR</button>
          </form>
        </section>
      </main>

      <footer className={styles.footer}>
        {socials.map((social) => (
          <a key={social.alt} href={social.href} target="_blank" rel="noreferrer">
            <img src={social.icon} alt={social.alt} />
          </a>
        ))}
      </footer>
    </div>
  );
}