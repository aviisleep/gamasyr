import { useEffect, useRef } from "react";
import "./style.css"; // Asegúrate de que este archivo CSS esté en la misma carpeta
import Gallegos1 from "../assets/imagenes/gallegos1.jpg";
import Gallegos2 from "../assets/imagenes/gallegos2.png";
import Gallegos3 from "../assets/imagenes/gallegos3.jpg";

const Carousel = () => {
  const nextRef = useRef(null);
  const prevRef = useRef(null);
  const carouselRef = useRef(null);
  const sliderRef = useRef(null);
  const thumbnailRef = useRef(null);
  const timeRef = useRef(null);

  useEffect(() => {
    const nextDom = nextRef.current;
    const prevDom = prevRef.current;
    const carouselDom = carouselRef.current;
    const SliderDom = sliderRef.current;
    const thumbnailBorderDom = thumbnailRef.current;

    const thumbnailItemsDom = thumbnailBorderDom.querySelectorAll(".item");
    thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);

    let timeRunning = 3000;
    let timeAutoNext = 7000;
    let runTimeOut;
    let runNextAuto = setTimeout(() => {
      nextDom.click();
    }, timeAutoNext);

    const showSlider = (type) => {
      const SliderItemsDom = SliderDom.querySelectorAll(".item");
      const thumbnailItemsDom = thumbnailBorderDom.querySelectorAll(".item");

      if (type === "next") {
        SliderDom.appendChild(SliderItemsDom[0]);
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        carouselDom.classList.add("next");
      } else {
        SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
        thumbnailBorderDom.prepend(
          thumbnailItemsDom[thumbnailItemsDom.length - 1]
        );
        carouselDom.classList.add("prev");
      }

      clearTimeout(runTimeOut);
      runTimeOut = setTimeout(() => {
        carouselDom.classList.remove("next");
        carouselDom.classList.remove("prev");
      }, timeRunning);

      // Actualizar la barra de tiempo
      timeRef.current.style.width = "100%"; // Reiniciar la barra de tiempo
      timeRef.current.style.transition = `width ${timeRunning / 1000}s linear`;
      setTimeout(() => {
        timeRef.current.style.width = "0%"; // Hacer que la barra de tiempo vuelva a 0%
      }, 0);

      clearTimeout(runNextAuto);
      runNextAuto = setTimeout(() => {
        nextDom.click();
      }, timeAutoNext);
    };

    nextDom.onclick = () => {
      showSlider("next");
    };

    prevDom.onclick = () => {
      showSlider("prev");
    };

    return () => {
      clearTimeout(runNextAuto);
      clearTimeout(runTimeOut);
    };
  }, []);

  // Array de objetos con información de las imágenes
  const slides = [
    {
      image: Gallegos1,
      author: "GAMA",
      title: "CARGA SECA",
      topic: "GALLEGOS TRAILERS",
      description: "Semi remolque caja seca tipo americano.",
      infoLink: "/gallegos", // Ruta al catálogo de esta imagen
      contactLink: "/contacto", // Ruta de contacto
    },
    {
      image: Gallegos2,
      author: "GAMA",
      title: "CARGA REFRIGERADA",
      topic: "GALLEGOS TRAILERS",
      description: "Semi remolque caja seca tipo americano",
      infoLink: "/gallegos",
      contactLink: "/contacto",
    },
    {
      image: Gallegos3,
      author: "GAMA",
      title: "CARGA LIQUIDA",
      topic: "GALLEGOS TRAILERS",
      description:
        "Capacidad de carga 47,500 y 55,000 lts. Fabricados en aluminio. Cilíndricos..",
      infoLink: "/gallegos",
      contactLink: "/contacto",
    },
  ];

  return (
    <div className="carousel" ref={carouselRef}>
      <div className="list" ref={sliderRef}>
        {slides.map((slide, index) => (
          <div className="item" key={index}>
            <img src={slide.image} alt={`Slide ${index + 1}`} />
            <div className="content">
              {/* <div className="author">{slide.author}</div> */}
              <div className="title">{slide.title}</div>
              {/* <div className="topic">{slide.topic}</div> */}
              {/* <div className="des">{slide.description}</div> */}
              <div className="buttons">
                {/* Botón Información */}
                <button onClick={() => (window.location.href = slide.infoLink)}>
                  Información
                </button>
                {/* Botón Contacto */}
                <button
                  onClick={() => (window.location.href = slide.contactLink)}
                >
                  Contáctanos
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="thumbnail" ref={thumbnailRef}>
        {slides.map((slide, index) => (
          <div className="item" key={index}>
            <img src={slide.image} alt={`Thumbnail ${index + 1}`} />
            <div className="content">
              <div className="title">{slide.title}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="arrows">
        <button ref={prevRef} id="prev">
          &lt;
        </button>
        <button ref={nextRef} id="next">
          &gt;
        </button>
      </div>

      <div className="time" ref={timeRef}></div>
    </div>
  );
};

export default Carousel;
