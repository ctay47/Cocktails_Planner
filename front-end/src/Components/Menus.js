import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Loading from './Loading';
import Menu from './Menu';
import { useGlobalContext } from '../context';
import Table from 'react-bootstrap/Table';

const API = process.env.REACT_APP_API_URL;

const Menus = () => {
  const [menus, setMenus] = useState([]);
  const { loading } = useGlobalContext;
  useEffect(() => {
    axios
      .get(`${API}/menus`)
      .then((res) => setMenus(res.data.payload))
      .catch((err) => console.log(err));
  }, []);
  if (loading) {
    return <Loading />;
  }

  return (
    <div className="Menus">
      <section>
        <Table>
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Glass</th>
              <th>Ingredients</th>
              <th>Favorite</th>
            </tr>
          </thead>
          <tbody>
            {menus.map((menu) => {
              return <Menu key={menu.id} menu={menu} />;
            })}
          </tbody>
        </Table>
      </section>
    </div>
  );
};

export default Menus;
