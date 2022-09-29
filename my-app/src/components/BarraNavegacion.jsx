import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from 'reactstrap';

function BarraNavegacion(args) {


  
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);








  return (
    <div>
      <Navbar color="secondary" expand="md" dark {...args}>
        <NavbarBrand href="/">Shop Deportes</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            {/* <NavItem>
              <NavLink href="/components/">{logo}</NavLink>
            </NavItem> */}
            <NavItem>
              <NavLink href="https://www.nestleporninossaludables.co/blog/articulo/importancia-del-deporte?gclid=CjwKCAjw4c-ZBhAEEiwAZ105RdWxQHpHhNeQ4CYdG5mHXsSTJUBAiGbyEsH6BCE3dG4CnFH4O0xntxoCmxIQAvD_BwE&gclsrc=aw.ds">
                ¿Cual es la importancia del deporte?
              </NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Categorias
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Camisetas deportivas</DropdownItem>
                <DropdownItem>Pantalonetas</DropdownItem>
                <DropdownItem>Pantalones</DropdownItem>
                <DropdownItem>Zapatillas</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Buscar</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default BarraNavegacion;