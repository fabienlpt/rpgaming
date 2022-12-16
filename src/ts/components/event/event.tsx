import { type } from 'os';
import React from 'react';
import styled from 'styled-components';

interface IProps {
    title: string;
    start_time: string;
    end_time: string;
    durée: string;
    salle: string;
    type: string;
};

const Event: React.FC<IProps> = ({title, start_time, end_time, durée, salle, type}) => { 
    return (
        <Container>
            <Events>
                <Content>
                    <h2>{start_time} - {end_time} ({durée})</h2>
                    <h3>{title}</h3>
                    <span>{salle}</span>
                </Content>

                <Button onClick={() => {
                    // get the current localStorage
                    let current = localStorage.getItem('events');
                    // create the event object
                    let event = {
                        title: title,
                        start_time: start_time,
                        end_time: end_time,
                        durée: durée,
                        salle: salle,
                        type: type
                    };
                    console.log(JSON.stringify(JSON.stringify(event)));
                    // if there is no localStorage, create one
                    if (current === null) {
                        localStorage.setItem('events', JSON.stringify([JSON.stringify(event)]));
                    } else {
                        // if there is a localStorage, parse it and add the new event
                        // verify if the event is already in the localStorage and remove it from localstorage if it is
                        let events = JSON.parse(current);
                        let index = events.indexOf(JSON.stringify(event));
                        if (index > -1) {
                            events.splice(index, 1);
                        } else {
                            events.push(JSON.stringify(event));
                        }
                        localStorage.setItem('events', JSON.stringify(events));
                    }
                    window.location.reload()
                }}>
                    <img src="/heart.png" alt="" width="20px" height="22px"/>
                </Button>
            </Events>
        </Container>
    );
};
const Container = styled.div`
    margin-top:1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    `;

const Events = styled.div`
    background-color: ${props => props.theme.colors.body};
    border: none;
    border-radius:10px;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    width: 90%;
    display: flex;
    flex-direction: row;
    margin: 1px 0;
    align-items: center;
    justify-content: space-between;
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 10px 20px;
    padding:0.6rem 0;
    
    h2 {
        position:relative;
        font-family: 'poppins';
        font-size: 20px;
        font-weight:500;
        color: #000;
        margin-bottom:6px;
    }
    h3 {
        font-family: 'enchanted';
        font-size: 30px;
        color: #000;
    }
    span {
        font-family: 'poppins';
        font-size: 20px;
        color: #000;
    }
`;

// Make a button with a heart with rounded corners
const Button = styled.button`
    width: 40px;
    height: 40px;
    background-color: #fff;
    border: 2px solid #E9E9E9;
    border-radius: 50%;
    cursor: pointer;
    margin: 10px 20px;
    display:flex;
    align-items:center;
    justify-content:center;

    &:hover {
        background-color: #fff;
        color: #fff;
    }
`;

export default Event;