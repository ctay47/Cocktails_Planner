import React from 'react'
import {Link} from 'react-router-dom'


const Menu = ({menu}) => {
  return (
    <tr>
      <td>
        <Link to={`/menus/${menu.id}`}>
          {<img className="table_img" src={menu.image}></img>}
        </Link>
      </td>
      <td>
        <Link to={`/menus/${menu.id}`}>{menu.name}</Link>
      </td>
      <td> {menu.glass} </td>
      <td>{menu.ingredients}</td>
      <td>
        {menu.is_favorite ? <span>❤️</span> : <span>&nbsp; &nbsp; &nbsp;</span>}
      </td>
    </tr>
  );
}

export default Menu