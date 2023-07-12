import { useState } from "react";
import css3Logo from "./images/css3.svg";
import emailLogo from "./images/email.svg";
import html5Logo from "./images/html5.svg";
import javaScriptLogo from "./images/javaScript.svg";
import nodeLogo from "./images/node.svg";
import reactjsLogo from "./images/reactjs.svg";
import gitLogo from "./images/github.svg";
import avatar from "./images/avatar.png";
import iconsite from "./images/devGif.gif";
import devFull from "./images/devFull.png";
import linkedinLogo from "./images/linkedin.svg";
import arrowTop from "./images/arrowTop.svg";
import prevtempo from "./images/prevtempo.gif";
import "./App.css";

function App() {
  window.addEventListener("scroll", function () {
    var btnTopo = document.getElementById("btnTopo");
    if (window.scrollY > 150) {
      btnTopo?.classList.add("show");
    } else {
      btnTopo?.classList.remove("show");
    }
  });

  function voltarAoTopo() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  window.addEventListener("scroll", function () {
    var elements = document.querySelector(".three-div");
    if (elements) {
      if (window.scrollY > elements.getBoundingClientRect().top) {
        elements.classList.add("visibleTeste");
      } else {
        elements.classList.remove("visibleTeste");
      }
    } else {
      null;
    }
  });

  function handleScrollFirstProject() {
    const animatedDiv = document.querySelector(".ProjectCard1");
    const divPosition = animatedDiv?.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (divPosition) {
      if (divPosition < screenHeight * 1.1) {
        animatedDiv.classList.add("show");
      }
    } else {
      null;
    }
  }

  window.addEventListener("scroll", handleScrollFirstProject);

  function handleScrollSecondProject() {
    const animatedDiv = document.querySelector(".ProjectCard2");
    const divPosition = animatedDiv?.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (divPosition) {
      if (divPosition < screenHeight * 1.35) {
        animatedDiv.classList.add("show");
      }
    } else {
      null;
    }
  }
  window.addEventListener("scroll", handleScrollSecondProject);

  function handleScrollProject3() {
    const animatedDiv = document.querySelector(".ProjectCard3");
    const divPosition = animatedDiv?.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (divPosition) {
      if (divPosition < screenHeight * 1.35) {
        animatedDiv.classList.add("show");
      }
    } else {
      null;
    }
  }
  window.addEventListener("scroll", handleScrollProject3);

  function handleScrollProject4() {
    const animatedDiv = document.querySelector(".ProjectCard4");
    const divPosition = animatedDiv?.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (divPosition) {
      if (divPosition < screenHeight * 1.35) {
        animatedDiv.classList.add("show");
      }
    } else {
      null;
    }
  }

  window.addEventListener("scroll", handleScrollProject4);

  const btnDownloadCV = () => {
    setCount(count + 1);
    const link = document.createElement("a");
    link.href = "./cvti_PedroColletti.pdf";
    link.download = `cvti_PedroColletti.pdf`;
    link.click();
  };

  const [count, setCount] = useState(0);

  return (
    <>
      <a id="btnTopo" onClick={() => voltarAoTopo()}>
        <img src={arrowTop} className="logoUpPage" alt="emailLogo" />
      </a>
      <div className="first-div">
        <div className="navbar">
          <div className="navbardiv">
            <img src={avatar} className="avatar" alt="avatar" />
            <a href="#aboutme">Quem sou</a>
            <a href="#linguagens">Know-how</a>
            <a href="#projects">Projetos feitos</a>
          </div>
          <div className="navbarSocialMidias">
            <a
              href="mailto:pedrocolletti@icloud.com"
              target="_blank"
              rel="noopener"
            >
              <img
                title="Entre em contato"
                src={emailLogo}
                className="logo"
                alt="emailLogo"
              />
            </a>
            <a
              href="https://github.com/PedroColletti"
              target="_blank"
              rel="noopener"
            >
              <img
                title="Repositórios"
                src={gitLogo}
                className="logo"
                alt="GitLogo"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/pedrocolletti/"
              target="_blank"
              rel="noopener"
            >
              <img
                title="Linkedinho"
                src={linkedinLogo}
                className="logo"
                alt="InLogo"
              />
            </a>
          </div>
        </div>
        <div id="aboutme" className="second-container">
          <div className="container">
            <div className="content">
              <div className="content__container">
                <p className="content__container__text">Hello</p>
                <ul className="content__container__list">
                  <li className="content__container__list__item">world !</li>
                  <li className="content__container__list__item">dev's !</li>
                  <li className="content__container__list__item">user !</li>
                  <li className="content__container__list__item">pessoa!</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="aboutme">
            Me chamo Pedro Colletti Silva! Sou desenvolvedor FullStack. 👋
          </div>
        </div>
        <div className="divbutton">
          <button className="buttonCv" onClick={btnDownloadCV}>
            {count === 0
              ? "Download CV"
              : count === 1
              ? "Obrigado ✨"
              : count === 2
              ? "Obrigado x2 😄"
              : count === 3
              ? "Muitíssimo obrigado 😲"
              : count === 4
              ? "Nem sei o que dizer 🤯"
              : count > 4 && count < 8
              ? `Já foram ${count - 1} CVs 🙄`
              : count === 8
              ? `Só não me hackeie  👀`
              : `${count - 1} e subindo 🙌`}
          </button>
        </div>
      </div>
      <div className="second-div">
        <div>
          <img src={devFull} className="aboutmeimg" alt="devFull.svg" />
        </div>
        <div className="aboutmespan">
          Desenvolvedor desde 2020, formado em Análise e Desenvolvimento de
          Sistemas, focado, motivado e pró-ativo. Sempre em busca de novas
          ideias e soluções viáveis para resoluções de problemas.
          <br />
          <br />
          Experiências anteriores em gerenciamento de projetos, análise e
          interpretação de dados e negociação.
        </div>
      </div>
      <div id="linguagens">
        <h2 className="textSkills">Principais Skills </h2>
      </div>
      <div className="three-div">
        <div className="language-div">
          <strong>FrontEnd:</strong>
          <div id="checklist">
            <input value="1" name="r" type="checkbox" id="01" />
            <label htmlFor="01">React</label>
            <input value="2" name="r" type="checkbox" id="02" />
            <label htmlFor="02">TypeScript</label>
            <input value="3" name="r" type="checkbox" id="03" />
            <label htmlFor="03">ReactNative</label>
          </div>
        </div>
        <div className="language-div">
          <strong>BackEnd:</strong>
          <div id="checklist">
            <input value="4" name="r" type="checkbox" id="04" />
            <label htmlFor="04">Node</label>
            <input value="5" name="r" type="checkbox" id="05" />
            <label htmlFor="05">Adonis</label>
            <input value="6" name="r" type="checkbox" id="06" />
            <label htmlFor="06">TypeScript</label>
          </div>
        </div>
        <div className="language-div">
          <strong>Banco:</strong>
          <div id="checklist">
            <input value="7" name="r" type="checkbox" id="07" />
            <label htmlFor="07">Oracle</label>
            <input value="8" name="r" type="checkbox" id="08" />
            <label htmlFor="08">PostgreSql</label>
            <input value="9" name="r" type="checkbox" id="09" />
            <label htmlFor="09">MySql</label>
          </div>
        </div>
        <img src={iconsite} className="iconsite" alt="Icon logo" />
      </div>
      <div id="projects" className="four-div">
        <div>
          <h2 className="textProjects">Alguns Projetos</h2>
        </div>
        <div className="ProjectCard1">
          <div className="firstProject">
            <div>
              <img
                className="firstProjectImg"
                src="https://user-images.githubusercontent.com/71047937/154998575-2d191201-17cc-4fc8-b185-99da2b6ccb23.gif"
                alt="cvDinamico"
              />
            </div>
            <div className="firstProjectContent">
              <h2>Curriculum Dinâmico</h2>
              <ul>
                <li>Html</li>
                <li>React</li>
                <li>TypeScript</li>
                <li>CSS</li>
              </ul>
              Apresentação de Currículo Interativo com formulário de contato,
              opção para gerar um PDF do currículo e botões interativos que
              direcionam para meu perfil no GitHub e LinkedIn.
            </div>
          </div>
        </div>
        <div className="ProjectCard2">
          <div className="secondProject">
            <div className="secondProjectContent">
              <h2>Previsão do Tempo</h2>
              <ul>
                <li>React</li>
                <li>TypeScript</li>
                <li>WEATHER API</li>
                <li>CSS</li>
              </ul>
              Aplicativo de Previsão do Tempo integrado com WEATHER API. Ao
              abrir o aplicativo, é solicitada permissão de geolocalização. A
              interface inclui filtros de busca no input e utiliza a biblioteca
              Toastify para exibir mensagens de erro de forma elegante para o
              usuário.
            </div>
            <div>
              <img
                className="secondProjectImg"
                src={prevtempo}
                alt="prevTempo"
              />
            </div>
          </div>
        </div>
        <div className="ProjectCard3">
          <div className="Project3">
            <div>
              <img
                className="Project3Img"
                src="https://user-images.githubusercontent.com/71047937/154998575-2d191201-17cc-4fc8-b185-99da2b6ccb23.gif"
                alt="cvDinamico"
              />
            </div>
            <div className="Project3Content">
              <h2>Curriculum Dinâmico</h2>
              <ul>
                <li>Html</li>
                <li>React</li>
                <li>TypeScript</li>
                <li>CSS</li>
              </ul>
              Apresentação de Currículo Interativo com formulário de contato,
              opção para gerar um PDF do currículo e botões interativos que
              direcionam para meu perfil no GitHub e LinkedIn.
            </div>
          </div>
        </div>
        <div className="ProjectCard4">
          <div className="Project4">
            <div className="Project4Content">
              <h2>Previsão do Tempo</h2>
              <ul>
                <li>React</li>
                <li>TypeScript</li>
                <li>WEATHER API</li>
                <li>CSS</li>
              </ul>
              Aplicativo de Previsão do Tempo integrado com WEATHER API. Ao
              abrir o aplicativo, é solicitada permissão de geolocalização. A
              interface inclui filtros de busca no input e utiliza a biblioteca
              Toastify para exibir mensagens de erro de forma elegante para o
              usuário.
            </div>
            <div>
              <img className="Project4Img" src={prevtempo} alt="prevTempo" />
            </div>
          </div>
        </div>
      </div>
      {/*       <form className="contact-form" action="#" method="POST">
        <label htmlFor="name">Nome:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="message">Mensagem:</label>
        <textarea id="message" name="message" rows={4} required></textarea>
        <button className="buttonform" type="submit">
          Enviar
        </button>
      </form> */}
      <div className="textSite">
        <h2>Aplicação feita com</h2>
      </div>
      <div className="logosIcons">
        <img src={css3Logo} className="logoFinal" alt="css3Logo" />
        <img src={html5Logo} className="logoFinal" alt="html5Logo" />
        <img src={javaScriptLogo} className="logoFinal" alt="javaScriptLogo" />
        <img src={nodeLogo} className="logoFinal" alt="nodeLogo" />
        <img src={reactjsLogo} className="logoFinal" alt="React logo" />
      </div>
      <div className="footer-flex">
        <span className="footer-span">Pedro Colletti ©2022. Feito com</span>
        <footer className="con-like">
          <input title="obrigado" type="checkbox" className="like" />
          <div className="checkmark">
            <svg
              viewBox="0 0 24 24"
              className="outline"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Zm-3.585,18.4a2.973,2.973,0,0,1-3.83,0C4.947,16.006,2,11.87,2,8.967a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,8.967a1,1,0,0,0,2,0,4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,8.967C22,11.87,19.053,16.006,13.915,20.313Z"></path>
            </svg>
            <svg
              viewBox="0 0 24 24"
              className="filled"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Z"></path>
            </svg>
            <svg
              className="celebrate"
              width="100"
              height="100"
              xmlns="http://www.w3.org/2000/svg"
            >
              <polygon points="10,10 20,20" className="poly"></polygon>
              <polygon points="10,50 20,50" className="poly"></polygon>
              <polygon points="20,80 30,70" className="poly"></polygon>
              <polygon points="90,10 80,20" className="poly"></polygon>
              <polygon points="90,50 80,50" className="poly"></polygon>
              <polygon points="80,80 70,70" className="poly"></polygon>
            </svg>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
