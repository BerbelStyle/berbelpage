import styled from 'styled-components';

export const Scroll = styled.div `
    overflow-y: scroll;
    height: 100vh;
`;
export const Container = styled.div `
    margin: 0;
    padding: 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10% 0 10% 0;
`;

export const HomeSection = styled.div `
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 80%;
    @media (max-width: 1000px) {
        height: 200px;
    }
`;

export const SectionTitle = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60%;
    font-size: 50px;
    font-family: 'Poppins', sans-serif;
    text-align: justify;
    @media (max-width: 1000px) {
        width: 40%;
        font-size: 20px;
    }
    color: ${props => props.fontColor}
    
`;

export const SectionImage = styled.img `
    width: 25%;
    @media (max-width: 1000px) {
        width: 40%;
    }
`;