import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchLocalData } from "../../apiServices";

import Menu from "../../components/menu/Menu";
import ItemGalery from "../../components/ItemGalery/ItemGalery";
import Filter from "../../components/filter/Filter";

import './shop.css'

function Shop() {

  const [productsList, setProductsList] = useState([]);
  const [loading, setLoading] = useState(true);

  const menuItems = [
    { label: "Home", link: "/" },
    { label: "Shop", link: "/shop" },
    { label: "Contact", link: "/contact" },
  ];

  const subMenuItems = [
    { label: "Zapatillas", link: "/shop" },
    { label: "Ropa", link: "/shop" },
  ];

  const filterItems = [
    { title: "color", items: ["rojo","azul","negro","blanco"] },
    { title: "género", items: ["hombre","mujer","unisex"] },
    { title: "tallas", items: [35,36,37,38,39,40,41,42,43] },
  ];

  const location = useLocation();
  const { option } = location.state || {};

  useEffect(() => {
    const getProductsList = async () => {
      try {
        setLoading(true);
        const data = await fetchLocalData(option);
        setProductsList(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    getProductsList();
  }, [option]);

  const getTypes = () => {
    return Array.from(new Set(productsList.map(item => item.type)));
  }

  const getPrices = () => {
    return Array.from(new Set(productsList.map(item => item.price)));
  }

  return (
    <>
      <Menu items={menuItems} subItems={subMenuItems} />
      <div className="pageWidth">
        <div className="content">
          <div className="contentFilter">
            <Filter title="types" itemsType={getTypes()} />
            <Filter title="prices" itemsType={getPrices()} />
            {filterItems.map((item, index) => [
              <Filter key={index} title={item.title} itemsType={item.items} />,
            ])}
          </div>
          <div className="contentList">
            {productsList.map((tenis) => [
              <div key={tenis.id} className="contentItem">
                {loading ? (
                  <p>Cargando data..</p>
                ) : (
                  <ItemGalery tenis={tenis} />
                )}
              </div>,
            ])}
          </div>
        </div>
      </div>
    </>
  );
}

export default Shop;
