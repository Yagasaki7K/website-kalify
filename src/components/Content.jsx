import React from 'react'
import ContentDetails from './ContentDetails'
import PicArthur from '/src/assets/pic03.jpg'
import BgKalify from '/src/assets/pic07.jpg'
import BgPied from '/src/assets/pic04.png'

const Content = () => {
    return (
        <ContentDetails>
            <div className="content">
                <div className="kalifytech" id="sobre-nos">
                    <div className="circle-centralized">
                        {/* <div className="circleKalify" /> */}
                    </div>
                    <h2>Tecnologia da Kalify</h2>
                    <p>
                        Em sua ideia original, a Kalify era uma produtora de jogos para
                        entretenimento através do RPG, criando e contando histórias de
                        aventura e fantasia. Antes do real nome que carregamos agora, éramos
                        conhecidos como WorldMagic RPG, HabbyCry - servidores de Habbo,
                        até se tornar Antech Productions, Kindred Publicidade e depois Kalify Inc.
                    </p>
                    <p>
                        Com o surgimento do Web Essentials, uma ferramenta que surgiu para simplificar
                        a vida dos usuários de computadores, a Kalify foi responsável por englobar esse
                        e muitos outros projetos embaixado das asas e ser a desenvolvedora por trás da criação.
                    </p>
                    <p>
                        Dessa maneira, a Kalify é responsável por soluções web de escopo fechado, ou seja,
                        não compartilhamos o nosso código com a comunidade, ao contrário da Aperture Laboratories.
                        Uma criação da Kalify Inc para resolver esse problema e unir a comunidade de desenvolvedores
                        para criar aplicações de código aberto e que ajudem a comunidade a crescer e produzir
                        aplicações e ideias que ajudem a sociedade.
                    </p>
                    <img src={BgKalify} alt="kalify-tech" />
                </div>

                <div className="kalifycrew" id="sobre-nos">
                    <h2>A Equipe</h2>

                    <div className="img-crew">
                        <a href="https://yagasaki.netlify.com/" target="_blank">
                            <img src="https://github.com/Yagasaki7k.png"></img>
                        </a>
                    </div>

                    <div className="content-crew">
                        <strong>Anderson Marlon</strong> <br /><br />
                        <i>"Yagasaki/Tuim/Dog/Drift King/Caótico Neutro"</i> <br /><br />
                        <b>Fundador/CEO</b> <br />
                        <p>
                            Nascido em Campinas, interior de São Paulo. Desenvolvedor Front-end,
                            possuí formação no curso de Introdução a Ciências da Computação (CS50) da
                            Universidade de Harvard, conquistou o Terceiro Lugar no Hackathon
                            da AMBEV com a Shawee.
                        </p>
                        <p>Antes de iniciar na Kalify Inc já foi
                            responsável por vários desenvolvimento em servidores como HabbyCry (Habbo)
                            e NewLights City (GTA V). Jogador de FPS/RPG - incluindo de mesa -
                            e piloto de <i>Drift</i> nas horas vagas. Devoto ao Cthulhu.
                        </p>
                        <p>
                            <i>ph’nglui mglw’nafh Cthulhu R’lyeh wgah’nagl fhtagn</i>
                        </p>
                    </div>

                    <div className="img-crew spacing disabled">
                        <img src={PicArthur}></img>
                    </div>

                    <div className="content-crew disabled">
                        <strong>Arthur Alves</strong> <br /><br />
                        <i>"Animatrix/Wicked"</i> <br /><br />
                        <b>Co-Fundador/COO</b> <br />
                        <p>
                            Nascido e residente em Campinas, interior de São Paulo, atualmente é
                            Analista de Crédito da WestRock Brasil, tem sido Estagiário
                            de administração com foco em RH na GGTE, Management Group
                            Tecnologias Educacionais na UNICAMP, Auxiliar Administrativo no
                            Centro de Tecnologia da Informação e Renato Archer, Instrutor
                            de Informática pela Acessa Escola. 
                        </p>
                        <p>
                            Bacharel em Administração de Empresas pela Universidade da Mackenzie
                        </p>
                    </div>

                    <img src={BgPied} className="banner" alt="kalify-tech" />

                    <div className="copyright">
                        <p>
                            © Copyright 2018 - {new Date().getFullYear()} - <a href="/">Kalify Inc</a> - Todos os direitos reservados
                        </p>
                    </div>
                </div>
            </div>
        </ContentDetails>
    )
}

export default Content