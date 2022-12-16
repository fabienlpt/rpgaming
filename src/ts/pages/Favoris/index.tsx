import React from 'react';
import styled from 'styled-components';
import Event from '../../components/event/event';

const Favoris: React.FC = () => {
    return (
        <Container>
            {/* Print all events of local storage */}
            {localStorage.getItem('events') !== null && JSON.parse(localStorage.getItem('events')!).map((event: any) => {
                    event = JSON.parse(event);
                    return <Event title={event.title} start_time={event.start_time} end_time={event.end_time} durée={event.durée} salle={event.salle} type={event.type}/>
            })}
        </Container>
    );
};
const Container = styled.div``;
export default Favoris;