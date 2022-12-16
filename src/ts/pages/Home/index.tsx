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
            <h2>Où nous trouver</h2>
            <p>46 avenue des canadiens, Grand Quevilly</p>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2167.9546714683215!2d1.0517296284995856!3d49.393218687817345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e0dfd7afdc506d%3A0x4f7b4db26f32a8e7!2sParc%20Exposition%20de%20Rouen!5e0!3m2!1sfr!2sfr!4v1671101514331!5m2!1sfr!2sfr" width="400" height="300"  loading="lazy"></iframe>
            <Info>
                <h2>Dates de l'évènement</h2>
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
`;

// Img with background image vague.png
const Img = styled.div`
    width: 100vw;
    height: 200px;
    background-image: url(/vague.png);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-top: 50px;

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
    background-color: #ff0000;
    border: 1px solid #ff0000;
    border-radius: 5px;
    color: #FFF;
    font-size: 12px;
    font-weight: 600;
    cursor: pointer;
    margin: 10px 20px;
    &:hover {
        background-color: #fff;
        color: #000;
    }
    a {
        text-decoration: none;
        color: #fff;
    }
`;

const Info = styled.div`
    margin-top: 50px;
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
    background-color: ${({theme})=> theme.colors.layout.primary}};
`;

export default Home;