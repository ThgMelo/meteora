"use client"

import { styled } from "styled-components";
import { PrimaryInput } from "./primary-input";
import { LogoDesktop } from "./LogoDesktop";

interface HeaderProps{

}

const TagHeader = styled.header`
    display: flex;
    align-itens: center;
    padding-left: 23px;
    padding-right: 23px;
    height: 58px;
    background-color: var(--color-fill-black);
`;

const TagNav = styled.nav`
    display: flex;
    flex-direction: columns;
    justify-content: space-between;
    width: 100%;
`;

const TagUl = styled.ul`
    display: flex;
    flex-direction: columns;
    align-items: center;
    list-style-type: none;
    width: 100%;
    gap: 40px;
    padding-top: 13px;
    padding-bottom: 13px;
`;

const Container = styled.div`
    display: flex;
    flex-direction: columns;
    padding-top: 10.5px;
    padding-bottom: 10.5px;
`;

const TagA = styled.a`
    color: var(--color-fill-white);
    text-decoration: none;
    line-height: 23px;
`;

export function Header(props : HeaderProps){
    return(
        <TagHeader>
            <TagNav>
                <TagUl>
                    <li>
                        <TagA href="">
                            <LogoDesktop/>
                        </TagA>
                    </li>
                    <li>
                        <TagA href="">Nossas lojas</TagA>
                    </li>
                    <li>
                        <TagA href="">Novidades</TagA>
                    </li>
                    <li>
                        <TagA href="">Promoções</TagA>
                    </li>
                </TagUl>
            </TagNav>
            <Container>
                <PrimaryInput placeholder="Digite o produto"/>
            </Container>
        </TagHeader>
    );
}