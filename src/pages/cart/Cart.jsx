import Menu from "../../components/menu/Menu";

function Cart() {

  const menuItems = [
    { label: "Home", link: "/" },
    { label: "Shop", link: "/shop" },
    { label: "Contact", link: "/contact" },
  ];

  const subMenuItems = [
    { label: "Zapatillas", link: "/shop" },
    { label: "Ropa", link: "/shop" },
  ];

  return (
    <>
      <Menu items={menuItems} subItems={subMenuItems} />
      <span>CART PAGE</span>
    </>
  );
}

export default Cart;