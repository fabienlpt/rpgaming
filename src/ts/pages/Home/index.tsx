import React from 'react';
import styled from 'styled-components';
const Home: React.FC = () => {
    return (
        <Container>
            <Img>
                <div>
                    <h1>RP Gaming Fest</h1>
                </div>
                <Button>
                    <a href='http://www.eventbrite.fr' target='_blank'>Réserver</a>
                </Button>
            </Img>
            <div className='section1'>
                <div>
                    <img src="/Castle.svg" alt="" width="40px" height="40px"/>
                    <h2>Qu'est ce que le RPgaming Fest ?</h2>
                </div>
                <p>L’association RPG Normandie organise le samedi 21 et dimanche 22 janvier 2023 le « RPGaming
                    Fest », un festival du jeu de rôle. Durant ces deux jours, les visiteurs seront invités à prendre part à
                    une aventure fantastique et (re)découvrir le monde du jeu de rôle.
                    <br />
                    <br />
                    Une ludothèque et des espaces thématiques seront à disposition des visiteurs pour leur permettre de
                    jouer une ou plusieurs parties de leurs jeux favoris ou de pépites encore inconnues (Zombicide,
                    Saboteur, Dungeons & Dragons, Civis, et pleins d’autres...)
                </p>
            </div>
            <div className='section2'>
                <div>
                <img src="/Compass.svg" alt="" width="40px" height="40px"/>
                <h2>Où nous trouver</h2>
                </div>
                <p>46 avenue des canadiens, Grand Quevilly</p>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2167.9546714683215!2d1.0517296284995856!3d49.393218687817345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e0dfd7afdc506d%3A0x4f7b4db26f32a8e7!2sParc%20Exposition%20de%20Rouen!5e0!3m2!1sfr!2sfr!4v1671101514331!5m2!1sfr!2sfr" width="400" height="300"  loading="lazy"></iframe>
            </div>
            <Info>
                <div>
                    <img src="/Crossbow.svg" alt="" width="60px" height="60px"/>
                    <h3>Dates de l'évènement</h3>
                </div>
                <h2>le 21 et 22 janvier 2023</h2>
                <h2>de 09h00 à 19h00</h2>
                <Button>
                    <a href='http://www.eventbrite.fr' target='_blank'>Réserver</a>
                </Button>
            </Info>
        </Container>
    );
};
const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    h2 {
        font-family: 'enchanted';
        font-size: 40px;
        color: #000;
    }
    .section1{
        margin-top:2rem;
        display:flex;
        flex-direction: column;
        justify-content:center;
        align-items:center;
        text-align:center;
        gap:1rem;
        padding: 0 1rem;
        >div{
            display:flex;
            align-items:center;
            Gap:5px;
        }
        p{
            font-family: 'poppins';
            font-size:1rem;
            line-height: 1.3rem;
        }
    }

    .section2{
        display:flex;
        flex-direction: column;
        align-items:center;
        margin-top:2rem;

        >div{
            display:flex;
            align-items:center;
            Gap:5px;
        }

        p{
            margin-bottom: 1.5rem;
        }

        iframe{
            width:100vw;
            border:none;
        }
    }
`;

// Img with background image vague.png
const Img = styled.div`
    width: 100vw;background: rgb(23,164,251);
    background: linear-gradient(90deg, rgba(23,164,251,1) 0%, rgba(244,74,240,0.7542367288712359) 79%);
    display: flex;
    flex-direction: row;
    align-items:center;
    justify-content: space-between;
    padding: 2rem 1rem;

    h1 {
        font-family: 'enchanted';
        font-size: 40px;
        color: #fff;
        margin-left: 20px;
    }
`;



const Button = styled.button`
    width: 100px;
    height: 30px;
    background-color: #fff;
    border:none;
    border-radius: 5px;
    cursor: pointer;
    margin: 10px 20px;

    a{
        text-decoration:none;
        color: #17A4FB;
        font-size: 12px;
        font-weight: 600;
    }
    &:hover {
        background-color: #17A4FB;
        color: #fff;
    }
`;

const Info = styled.div`
    margin-top: 4rem;
    padding:2rem 1rem;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    >div{
        display:flex;
        align-items:center;
        Gap:5px;
    }
    h2 {
        font-family: 'poppins';
        font-weight: 700;
        font-size: 1.5rem;
        color: #fff;
        margin-bottom: 0.7rem;
    }
    h3{
        font-family:'enchanted';
        color: #FFF;
        font-size:3rem;
    }
    background: rgb(244,74,240);
    background: linear-gradient(90deg, rgba(244,74,240,0.7542367288712359) 20%, rgba(23,164,251,1) 100%);
`;

export default Home;