import React from 'react'
import Button from './styles/Button.styled';
import Flex from './styles/Flex.styled';
import StyledHeader, { Image, Logo, Nav } from './styles/Header.styled';

const Header = () => {
  return (
    <StyledHeader>
        <Nav>
         <Logo src="./images/logo.png" />
            <div>
                <Button color="#a62440">Apply Courses</Button>
                <Button bg="#a62440">Talk to Adviser</Button>
            </div>
        </Nav>
        <Flex>
            <div>
                <h1>Lorem ipsum dolor sit amet, consectetur adipisicing.</h1>
               <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo, nihil soluta. Vitae, eum ratione temporibus itaque quam quod consequatur perspiciatis consequuntur reprehenderit, iusto architecto asperiores!
                </p> 
                <Button bg="#a62440">Start Your New Career</Button>
            </div>
            <Image src="./images/hero.jpg" />
        </Flex>
    </StyledHeader>
  );
};

export default Header;