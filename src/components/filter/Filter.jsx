import { useEffect, useRef } from 'react';
import './filter.css'

function Filter(props) {

  const filter_ = useRef(null);
  const folder = useRef(null);

  useEffect(() => {
    const activeFolder = () => {
      folder.current.classList.toggle("active");
    };
    filter_.current.addEventListener("click", activeFolder);
    return () => {
      if (filter_.current) filter_.current.removeEventListener("click", activeFolder);
    };
  }, []);

  return (
    <div ref={filter_} className="filter">
      <h4 className="selector">type ({props.title})</h4>
      <div className="clickType">
        <svg className="svgIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path>
        </svg>
      </div>
      <div ref={folder} className="folder">
        <ul className="list">
          {props.itemsType.map((item, index) => [
            <li key={index} className="listItem">
              <div className="chaingType">{item}</div>
            </li>
          ])}
        </ul>
      </div>
    </div>
  );
}

export default Filter;