import React from 'react';
import { NavbarContext } from '../contexts';

export const Navbar = () => {
    return(
      <nav>
            <h1>Game List</h1>
            <NavbarContext.Consumer>{
                (context) => {
                    const { MenuList } = context;
                    return(
                        <ul>{MenuList.map((Menu, i)=><li key={i}>{Menu}</li>)}</ul>
                    )
                }
            }</NavbarContext.Consumer>
      </nav>  
    );
}