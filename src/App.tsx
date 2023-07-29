import { useEffect, useState } from "react";
import css3Logo from "/css3.svg";
import emailLogo from "/email.svg";
import html5Logo from "/html5.svg";
import typeScriptLogo from "/typeScript.svg";
import nodeLogo from "/node.svg";
import reactjsLogo from "/reactjs.svg";
import gitLogo from "/gitHub.svg";
import skills from "/skills.svg";
import devFull from "/devFull.svg";
import linkedinLogo from "/linkedin.svg";
import arrowTop from "/arrowTop.svg";
import audTudo from "/audTudo.gif";
import lifeSaude from "/lifeSaude.jpg";
import prevtempo from "/prevtempo.gif";
import cvDinamico from "/cvDinamico.gif";
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
        elements.classList.add("visibleSkilss");
      } else {
        elements.classList.remove("visibleSkilss");
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

  function handleScrollProject5() {
    const animatedDiv = document.querySelector(".ProjectCard5");
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

  window.addEventListener("scroll", handleScrollProject5);

  const btnDownloadCV = () => {
    setCount(count + 1);
    const link = document.createElement("a");
    link.href = "./cvti_PedroColletti.pdf";
    link.download = `cvti_PedroColletti.pdf`;
    link.click();
  };

  const [count, setCount] = useState(0);

  let [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    // Adiciona um listener para o evento de redimensionamento
    window.addEventListener("resize", handleResize);

    // Remove o listener quando o componente é desmontado
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const bodyElement = document.querySelector("body");

  if (bodyElement) {
    bodyElement.style.overflow = isMenuOpen ? "hidden" : "auto";
  }

  if (windowWidth > 578.99) {
    if (bodyElement) {
      bodyElement.style.overflow = "auto";
    }
  }

  return (
    <>
      <a id="btnTopo" onClick={() => voltarAoTopo()}>
        <img src={arrowTop} className="logoUpPage" alt="emailLogo" />
      </a>
      {/* INÍCIO HEADER */}
      <div className="layout-saudation">
        {/* <div className="header-div"> */}
        <div className="header-div">
          <div
            className={`navbarIcon ${isMenuOpen ? "show" : ""}`}
            onClick={toggleMenu}
          />
          <div className={`expandable ${isMenuOpen ? "show" : ""}`}>
            <div className="expandable-content">
              <div className="expandableShortCuts">
                <a href="#aboutme" onClick={toggleMenu}>
                  ABOUT ME
                </a>
                <a
                  className="expandableArrow"
                  href="#aboutme"
                  onClick={toggleMenu}
                />
              </div>
              <div className="expandableline" />
              <div className="expandableShortCuts">
                <a href="#linguagens" onClick={toggleMenu}>
                  HARD SKILLS
                </a>
                <a
                  className="expandableArrow"
                  href="#linguagens"
                  onClick={toggleMenu}
                />
              </div>
              <div className="expandableline" />
              <div className="expandableShortCuts">
                <a href="#projects" onClick={toggleMenu}>
                  PROJECTS
                </a>
                <a
                  className="expandableArrow"
                  href="#projects"
                  onClick={toggleMenu}
                />
              </div>
              <div className="expandableline" />
              <div className="expandableXlarge" />
              <div className="expandableXmedium" />
              <div className="name-div">
                <div className="expandableName">
                  #pedro-colletti
                  <span />
                </div>
              </div>
            </div>
          </div>
          <div className="header-links">
            <a href="#aboutme">ABOUT ME</a>
            <a href="#linguagens">HARD SKILLS</a>
            <a href="#projects">PROJECTS</a>
          </div>
          <div className="header-contacts">
            <a
              href="https://github.com/PedroColletti"
              target="_blank"
              rel="noopener"
            >
              <img title="Repositórios" src={gitLogo} alt="GitLogo" />
            </a>
            <a
              href="mailto:pedrocolletti@icloud.com"
              target="_blank"
              rel="noopener"
            >
              <img title="Entre em contato" src={emailLogo} alt="emailLogo" />
            </a>
            <a
              href="https://www.linkedin.com/in/pedrocolletti/"
              target="_blank"
              rel="noopener"
            >
              <img title="Linkedinho" src={linkedinLogo} alt="InLogo" />
            </a>
          </div>
        </div>
        <div className="xlarge" />
        {/* FIM HEADER */}
        {/* INÍCIO BODY SAUDATION */}
        <div id="saudation" className="body-saudation">
          <div className="first-body">
            <div className="hello-container">
              <div className="content">
                <div className="content__hello-container">
                  <p className="content__hello-container__text">Hello,</p>
                  <ul className="content__hello-container__list">
                    <li className="content__hello-container__list__item">
                      world !
                    </li>
                    <li className="content__hello-container__list__item">
                      dev's !
                    </li>
                    <li className="content__hello-container__list__item">
                      user !
                    </li>
                    <li className="content__hello-container__list__item">
                      pessoa!
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="aboutme">
              Me chamo Pedro Colletti Silva! Sou desenvolvedor FullStack. 👋
            </div>
            <div className="buttonCvDiv">
              <button className="buttonCv" onClick={btnDownloadCV}>
                {count === 0
                  ? "Download CV"
                  : count === 1
                  ? "Obrigado ✨"
                  : count > 1 && count < 4
                  ? `Obrigado x${count - 1} 😄`
                  : count === 4
                  ? "Muitíssimo obrigado 😲"
                  : count > 4 && count < 8
                  ? `Já foram ${count - 1} CVs 🙄`
                  : `${count - 1} e subindo 🙌`}
              </button>
            </div>
          </div>
          <div className="second-body">
            <div className="computer-img"></div>
          </div>
        </div>
      </div>
      <div className="second-div">
        <div className="imgdiv">
          <img src={devFull} className="aboutmeimg" alt="devFull.svg" />
        </div>
        <div className="aboutme-div">
          <div className="aboutme-title">
            <div id="aboutme" className="aboutme-title1">
              about me
            </div>
            <div className="aboutme-title2">
              #pedro-colletti<span>_</span>
            </div>
          </div>
          <div className="aboutme-span">
            Desenvolvedor desde 2020, formado em Análise e Desenvolvimento de
            Sistemas, focado, motivado e pró-ativo. Sempre em busca de novas
            ideias e soluções viáveis para resoluções de problemas.Experiências
            anteriores em gerenciamento de projetos, análise e interpretação de
            dados e negociação.
          </div>
        </div>
      </div>
      <div id="linguagens" className="three-div">
        <div className="skills-text-div">
          <div className="textSkills">HARD SKILLS</div>
          <div className="language-content">
            <div className="language-div">
              <div className="language-title">Front-end</div>
              <div className="language-content">
                <div>React</div>
                <div>TypeScript</div>
                <div>ReactNative</div>
              </div>
            </div>
            <div className="language-div">
              <div className="language-title">Back-end</div>
              <div className="language-content">
                <div>Node</div>
                <div>Adonis</div>
                <div>TypeScript</div>
              </div>
            </div>
            <div className="language-div">
              <div className="language-title">BD</div>
              <div className="language-content">
                <div>Oracle</div>
                <div>PostgreSql</div>
                <div>MySql</div>
              </div>
            </div>
          </div>
        </div>
        <img src={skills} className="skillsImg" alt="skills.svg" />
        <div className="xmedium" />
      </div>

      <div className="four-div">
        <div id="projects" className="aboutme-title">
          <div className="aboutme-title1">projects</div>
          <div className="aboutme-title2">
            #aplicações<span>_</span>
          </div>
        </div>
        <div className="ProjectCard1">
          <div className="firstProject">
            <div>
              <img className="firstProjectImg" src={audTudo} alt="cvDinamico" />
            </div>
            <div className="firstProjectContent">
              <div className="projectContent-title">AudTudo</div>
              <ul>
                <li>TypeScript</li>
                <li>React</li>
                <li>Node</li>
                <li>PostgreSQL</li>
                <li>AWS</li>
              </ul>
              <span>
                Site com três níveis de permissões e desenvolvimento:
                Administrador, Geral e Comum, com CRUD, capacidade de ler
                planilhas Excel e salvar dados em um banco PostgreSQL, envio de
                emails e recuperação de senhas, consultas, filtros e outras
                funcionalidades. Participação no Front-end, usando
                ReactJS/TypeScript/StyledComponents e Back-end migrando a API de
                Java para NodeJS/AdonisJs/TypeScript.
              </span>
            </div>
          </div>
        </div>
        <div className="ProjectCard2">
          <div className="secondProject">
            <div className="secondProjectContent">
              <div className="projectContent-title">Life Mobile</div>
              <ul>
                <li>ReactNative</li>
                <li>Node</li>
                <li>Oracle</li>
                <li>Docker</li>
              </ul>
              <span>
                Participação no desenvolvimento AppLife, disponível na AppStore
                e PlayStore, para uso dos paciente conveniados verem históricos,
                pagamentos, marcarem consultas, buscar por hospitais ou médicos
                com filtro de especialidades, editarem seus dados, chamada de
                emergência e outras funcionalidades.
              </span>
            </div>
            <div>
              <img
                className="secondProjectImg"
                src={lifeSaude}
                alt="prevTempo"
              />
            </div>
          </div>
        </div>
        <div className="ProjectCard3">
          <div className="Project3">
            <div>
              <img className="Project3Img" src={prevtempo} alt="cvDinamico" />
            </div>
            <div className="Project3Content">
              <div className="projectContent-title">Previsão do Tempo</div>
              <ul>
                <li>React</li>
                <li>TypeScript</li>
                <li>WEATHER API</li>
                <li>CSS</li>
              </ul>
              <span>
                Aplicativo de Previsão do Tempo integrado com WEATHER API. Ao
                abrir o aplicativo, é solicitada permissão de geolocalização. A
                interface inclui filtros de busca no input e utiliza a
                biblioteca Toastify para exibir mensagens de erro de forma
                elegante para o usuário.
              </span>
            </div>
          </div>
        </div>
        <div className="ProjectCard4">
          <div className="Project4">
            <div className="Project4Content">
              <div className="projectContent-title">Curriculum Dinâmico</div>
              <ul>
                <li>Html</li>
                <li>React</li>
                <li>TypeScript</li>
                <li>SASS</li>
              </ul>
              <span>
                Apresentação de Currículo Interativo com formulário de contato,
                opção para gerar um PDF do currículo e botões interativos que
                direcionam para meu perfil no GitHub e LinkedIn.
              </span>
            </div>
            <div>
              <img className="Project4Img" src={cvDinamico} alt="prevTempo" />
            </div>
          </div>
        </div>
        {/*         <div className="ProjectCard5">
          <div className="Project5">
            <div>
              <img className="Project5Img" src={cvDinamico} alt="cvDinamico" />
            </div>
            <div className="Project5Content">
              <div className="projectContent-title">Curriculum Dinâmico</div>
              <ul>
                <li>Html</li>
                <li>React</li>
                <li>TypeScript</li>
                <li>CSS</li>
              </ul>
              <span>
                Apresentação de Currículo Interativo com formulário de contato,
                opção para gerar um PDF do currículo e botões interativos que
                direcionam para meu perfil no GitHub e LinkedIn.
              </span>
            </div>
          </div>
        </div> */}
      </div>

      <div className="footer-flex">
        <div className="textSite">
          <div>aplicação feita com</div>
          <span>_</span>
        </div>
        <div className="logosIcons">
          <img src={css3Logo} className="logoFinal" alt="css3Logo" />
          <img src={html5Logo} className="logoFinal" alt="html5Logo" />
          <img
            src={typeScriptLogo}
            className="logoFinal"
            alt="typeScriptLogo"
          />
          <img src={nodeLogo} className="logoFinal" alt="nodeLogo" />
          <img src={reactjsLogo} className="logoFinal" alt="ReactLogo" />
        </div>
        <div className="madeby">
          <span>Feito com</span>
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
          <span> por Pedro Colletti</span>
        </div>
      </div>
    </>
  );
}

export default App;
