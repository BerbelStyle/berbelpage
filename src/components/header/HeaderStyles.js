import styled from 'styled-components';

export const HeaderContainer = styled.div `
    margin: 0;
    width: 100%;
    flex-direction: row;
    top: 0;
    display: flex;
    justify-content: space-between;
`;

export const LinkContainer = styled.a `   
    text-decoration: none; 
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    background-color: #100626;
    margin-bottom: 2px;
    &:hover {
        border-bottom:2px solid white;
        margin: 0;
    }
`;

export const HeaderNavLink = styled.p `
    text-decoration: none;
    color: white;
    font-size: 24px;
    @media (max-width: 1000px) {
        font-size: 14px;
    }
`;
