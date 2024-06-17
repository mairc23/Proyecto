import Menu from "../../components/menu/Menu";
import Form from "../../components/form/Form";

import './contact.css';

function Contact() {

  const menuItems = [
    { label: "Home", link: "/" },
    { label: "Shop", link: "/shop" },
    { label: "Contact", link: "/contact" },
  ];

  const subMenuItems = [
    { label: "Zapatillas", link: "/shop" },
    { label: "Ropa", link: "/shop" },
  ];

  const formItems = [
    { name: "name", label: "Nombre", type: "text" },
    { name: "name", label: "Apellido", type: "text" },
    { name: "mail", label: "Correo", type: "email" },
    { name: "cell", label: "Celular", type: "number" },
    { name: "Algun mensaje que quieras dejarnos", label: "Message", type: "textarea" },
  ];

  return (
    <>
      <Menu items={menuItems} subItems={subMenuItems} />
      <div className="pageWidth">
        <div className="contentForm">
          <div className="descriptionForm">
            <div className="text"><span>Suscribete para que podamos enviarte nuestros ultimos productos en ...</span></div>
            <div className="text"><span>Los nuevos suscriptores recibiran un código de descuento del 10% para utilizar en nuestra tienda.</span></div>
            <div className="text"><span>* requerido</span></div>
          </div>
          <div className="contentFormItems">
            {formItems.map((item,i) => [
              <Form key={i} label={item.label} type={item.type} />
            ])}
          </div>
          <div className="inputSend">
            <input className="submit" type="submit" value="Enviar"/>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
