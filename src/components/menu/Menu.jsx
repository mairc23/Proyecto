import './menu.css'
import logo from './../../assets/icono.ico'

import { Link } from 'react-router-dom';

function Menu(props) {
  return (
    <menu>
      <div className="header">
        <div className="pageHeader pageWidth">
          <div className="logo">
              <Link to={props.items[0].link} className="logoButton">
                <div className="coverLogo"><img src={logo} alt="logo" className="imgLogo"/></div>
              </Link>
          </div>
          <nav className="mainNavigation">
            <ul className="list">
                {props.items.slice(1).map((item,index) => [
                  <li key={index} className="listItem">
                    {item.label === 'Shop' ? (
                      <div className="folder">
                        <Link className="listHover"><span>{item.label}</span></Link>
                        <div className="folderChild">
                          <ul className="subList">
                            {props.subItems.map((subItem,_index) => [
                              <li key={_index} className="subListItem">
                                <Link to={subItem.link} state={{option : subItem.label}} className="subListButton"><span>{subItem.label}</span></Link>
                              </li>
                            ])}
                          </ul>
                        </div>
                      </div>
                    ) : (
                      <Link to={item.link} className="listButton"><span>{item.label}</span></Link>
                    )}
                  </li>
                ])}
            </ul>
          </nav>
        </div>
      </div>
    </menu>
  );
}

export default Menu;