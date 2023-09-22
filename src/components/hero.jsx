import Carousel from "react-bootstrap/Carousel";
import ImgHero1 from "../assets/images/Banner-Rose-tea_Mesa-de-trabajo-1-copia.png";
import ImgHero2 from "../assets/images/Banner-Rose-tea_Mesa-de-trabajo-1.png";
import ImgHero3 from "../assets/images/Banner-rose-tea.png";

var heroData = [
  {
    id: 1,
    image: ImgHero1,
  },
  {
    id: 2,
    image: ImgHero2,
  },
  {
    id: 3,
    image: ImgHero3,
  }
];

function AppHero() {
  return (
    <section id="home" className="hero-block">
      <Carousel>
        {heroData.map((hero) => {
          return (
            <Carousel.Item key={hero.id}>
              <img
                className="d-block w-100"
                src={hero.image}
                alt={"slide " + hero.id}
              />
            </Carousel.Item>
          );
        })}
      </Carousel>
    </section>
  );
}

export default AppHero;
