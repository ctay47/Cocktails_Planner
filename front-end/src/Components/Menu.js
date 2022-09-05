import React from 'react'


const Menu = ({menu}) => {
  return (
    <tr>
      <td>
      
          <img src={menu.image}></img>
      
      </td>
      <td>
        <a href={`/menus/${menu.id}`}>{menu.name}</a>
      </td>

      {menu.info}
      <td></td>
      {menu.ingredients}
      <td>
        {menu.is_favorite ? <span>❤️</span> : <span>&nbsp; &nbsp; &nbsp;</span>}
      </td>
    </tr>
  );
}

export default Menu