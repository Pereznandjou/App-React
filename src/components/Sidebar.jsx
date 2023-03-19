import React from 'react';
import styled from 'styled-components';


function Sidebar() {
  return (
    <Sidebare>
      <ul>
        <li>Gestions
          <ul>
          <li>Gestion de commandes</li>
            <li>Gestion des utilisateurs</li>
          </ul>
        </li>
        
      </ul>
      </Sidebare>
  );
}



export default Sidebar;

const Sidebare=styled.div`

background-color: #ADD8E6;
height: 100vh;
width: 200px;
position: fixed;
top: 0;
left: 0;
margin-top:150px;

& ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

& ul li {
  padding: 10px;
  border-bottom: 1px solid white;
  position: relative;
}

& ul li:hover {
  background-color: white;
  cursor: pointer;
}

& ul ul {
  display: none;
  position: absolute;
  left: 100%;
  top: 0;
}

& ul li:hover > ul {
  display: block;
}

& ul ul li {
  width: 200px;
  padding: 10px;
  border-bottom: none;
  background-color: #E0FFFF;
}

 ul ul li:hover {
  background-color: #87CEEB;
}

  
  `;