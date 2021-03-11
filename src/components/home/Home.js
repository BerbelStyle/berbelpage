import React from "react";
import {Container, HomeSection, Scroll, SectionTitle, SectionImage} from "./HomeStyles.js";

export default function Home({ children, ...restProps }) {
    return <Scroll {...restProps}>{children}</Scroll>
    ;
}

Home.HomeContainer = function HomeContainer({children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
}

Home.Section = function Section({children, ...restProps }) {
    return(
        <HomeSection {...restProps}>
            {children}
        </HomeSection>
    )
}

Home.Title = function Title({children, fontColor, ...restProps }) {
    return(
        <SectionTitle fontColor={fontColor} {...restProps}>
            {children}
        </SectionTitle>
    )
}

Home.Image = function Image({...restProps }) {
    return(
        <SectionImage { ...restProps }/>
    )
}