import React from 'react';
import { Column, Container, Container1, Container2, Container3, Information, Line, Image, Title, Description, Title2, Title3, Title4, Title5, Description1, Description2 } from './style';

function Main() {

    return (
        <>
            <Container>
                <Line />
                <Information>
                    <Image src="/logo.png" alt="logo" />
                    <Column>
                        <Title id='Sobre-a-marca'>Sobre a marca</Title>
                        <Description2>
                            Bats in Black é uma marca de moda alternativa que celebra a beleza sombria e misteriosa da noite. Com a imagem icônica do morcego como seu símbolo, traz um toque único e elegante onde cada peça é projetada com atenção aos detalhes e com um estilo distinto. Moda alternativa que voa alto entregando a beleza sombria das asasinhas de um morcego.
                        </Description2>
                    </Column>
                </Information>
                <Line className="reverse" />
            </Container>

            <Container>
                <Line />
                <Information>
                    <Image src="/pic1.png" alt="logo" />
                    <Column>
                        <Title2 id='Sobre-a-colecao'>Sobre a linha monster Doll</Title2>
                        <Description>
                        A linha de botas é composta por três modelos, 
                        cada um inspirado em uma boneca diferente do "estilo 
                        Monster Dolls". Cada bota tem uma aparência gótica única com 
                        asas de morcego que adicionam um toque dramático e misterioso.       
                     </Description>
                    </Column>
                </Information>
                <Line className="reverse" />
            </Container>

            <Container1>
                <Line />
                <Information>
                    <Image src="/pic2.png" alt="bota1" />
                    <Column>
                        <Title3 id='draculaura'>Draculaura</Title3>
                        <Description>
                        Esta bota tem um acabamento perfeito em 
                        couro ecológico, com asas de morcego em um tom Preto, O detalhe da 
                        plataforma com asinhas adiciona um toque feminino dark.      
                     </Description>
                    </Column>
                </Information>
                <Line className="reverse" />
            </Container1>

            <Container2>
                <Line />
                <Information>
                    <Image src="/pic3.png" alt="bota2" />
                    <Column>
                        <Title4 id='laguna-blue'>Laguna Blue</Title4>
                        <Description1>
                        A bota tem um solado plataforma arredondado e robusto, que adiciona altura e estilo ao visual, as asas de morcego nas laterais 
                        da bota são o destaque do design e adicionam um toque misterioso e dramático.  
                        A plataforma é antiderrapante e proporciona segurança e estabilidade ao caminhar. perfeita para quem quer um visual gótico e ousado.     
                     </Description1>
                    </Column>
                </Information>
                <Line className="reverse" />
            </Container2>

            <Container3>
                <Line />
                <Information>
                    <Image src="/pic3.png" alt="bota2" />
                    <Column>
                        <Title5 id='spectra'>Spectra</Title5>
                        <Description>
                        A bota apresenta uma cor preta clássica com asas de morcego, 
                        que captura a essência fantasmagórica de toda bat garota. A sola da bota é antiderrapante, 
                        proporcionando segurança e conforto ao andar.
                     </Description>
                    </Column>
                </Information>
                <Line className="reverse" />
            </Container3>
        </>
    )

}
export default Main;