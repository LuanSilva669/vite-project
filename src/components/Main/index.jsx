import React from 'react';
import { Column, Container, Information, Line, Image, Title, Description } from './style';

function Main() {

    return (
        <Container>
            <Line />
            <Information>
                <Image src="/logo.png" alt="logo" />
                <Column>
                    <Title>Sobre a marca</Title>
                    <Description>
                        Bats in Black é uma marca de moda alternativa que celebra a beleza sombria e misteriosa da noite. Com a imagem icônica do morcego como seu símbolo, traz um toque único e elegante onde cada peça é projetada com atenção aos detalhes e com um estilo distinto. Moda alternativa que voa alto entregando a beleza sombria das asasinhas de um morcego.
                    </Description>
                </Column>
            </Information>
            <Line className="reverse" />
        </Container>
    )

}
export default Main;