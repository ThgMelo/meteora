"use client"
import { styled } from "styled-components";

interface HeaderProps{

}

const TagHeader = styled.header`
    display: flex;
    align-itens: center;
    padding-left: 23px;
    padding-right: 23px;
    height: 58px;
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

export function Header(props : HeaderProps){
    return(
        <TagHeader>
            <TagNav>
                <TagUl>
                    <li>
                        <a href="">Meteora</a>
                    </li>
                    <li>
                        <a href="">Nossas lojas</a>
                    </li>
                    <li>
                        <a href="">Novidades</a>
                    </li>
                    <li>
                        <a href="">Promoções</a>
                    </li>
                </TagUl>
            </TagNav>
            <Container>
                <input type="text" />
                <button>Search</button>
            </Container>
        </TagHeader>
    );
}