import "./home.css";

import Menu from "../../components/menu/Menu";
import Card from "../../components/card/Card";

function Home() {
  const menuItems = [
    { label: "Home", link: "/" },
    { label: "Shop", link: "/shop" },
    { label: "Contact", link: "/contact" },
  ];

  const subMenuItems = [
    { label: "Zapatillas", link: "/shop" },
    { label: "Ropa", link: "/shop" },
  ];

  const cardsItems = [
    { cover: "./assets/tenis/tenis2.png", title: "Zapatillas", description: "descripción general de producto" },
    { cover: "./assets/ropa/ropa1.png", title: "Hoddies", description: "descripción general de producto" },
    { cover: "./assets/pants/pants1.png", title: "Pants", description: "descripción general de producto" },
    { cover: "./assets/poleras/polera1.png", title: "Poleras", description: "descripción general de producto" },
    { cover: "./assets/gorras/gorra2.png", title: "Gorras", description: "descripción general de producto" },
  ];

  return (
    <>
      <Menu items={menuItems} subItems={subMenuItems} />
      <main className="pageWidth">
        <div className="bannerHome">
          <div className="cover">
            <img src={"./assets/banner.jpg"} alt="" className="coverImg" />
          </div>
        </div>
        <div className="cardsSection">
          {cardsItems.map((card, index) => [
            <div className="contentCard" key={index}>
              <Card title={card.title} cover={card.cover} description={card.description}/>
            </div>
          ])}
        </div>
      </main>
      
    </>
  );
}

export default Home;
