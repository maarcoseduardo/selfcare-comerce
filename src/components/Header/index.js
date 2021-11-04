import React from 'react';
import imgStar from '../../assets/Images/Star.svg';
import imgUser from '../../assets/Images/User.svg';
import imgCart from '../../assets/Images/Cart.svg';
import imgMagnifyingGlass from '../../assets/Images/MagnifyingGlass.svg';

import {
    HeaderContainer,
    HeaderTop,
    DivLogo,
    Nav,
    ImgLogo,
    SpanLogo,
    UnList,
    List,
    ImgList
}
    from './styles';

export function Header() {

    return (
        <React.Fragment>
            <HeaderContainer>
                <HeaderTop>
                    <DivLogo>
                        <ImgLogo 
                        src={imgStar} 
                        alt="Star" 
                        />
                        
                        <SpanLogo>selfcare</SpanLogo>
                    </DivLogo>
                    <Nav>
                        <UnList>
                            <List 
                            className="filter-green">
                                <ImgList 
                                src={imgMagnifyingGlass}
                                alt="Magnifying Glass"/>
                            </List>

                            <List 
                            className="filter-green">
                                <ImgList 
                                src={imgUser}
                                alt="User Login"
                                 />
                            </List>

                            <List 
                            className="filter-green">
                                <ImgList 
                                src={imgCart} 
                                alt="Cart Shop"
                                />
                            </List>
                        </UnList>
                    </Nav>
                </HeaderTop>
            </HeaderContainer>
        </React.Fragment>
    );
}