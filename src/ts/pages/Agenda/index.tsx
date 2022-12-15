import React from 'react';
import styled from 'styled-components';
import Event from '../../components/event/event';

const event_data = [
    {
      "title": "Conférence jeux",
      "start_time": "9:00",
      "end_time": "10:00",
      "durée": "1h",
      "salle": "Salle de conférence",
      "type": "conférence",
    },
    {
      "title": "Présentation de jeux",
      "start_time": "9:00",
      "end_time": "10:00",
      "durée": "1h",
      "salle": "Workshop 1",
      "type": "workshop",
    },
    {
      "title": "Workshop création de jeux",
      "start_time": "10:15",
      "end_time": "10:45",
      "durée": "30min",
      "salle": "Workshop 1",
      "type": "workshop",
    },
    {
      "title": "Conférence ludothèque",
      "start_time": "10:30",
      "end_time": "12:15",
      "durée": "1h45",
      "salle": "Salle de conférence",
      "type": "conférence",
    },
    {
      "title": "Workshop xxxx",
      "start_time": "11:00",
      "end_time": "12:30",
      "durée": "1h30",
      "salle": "Workshop 2",
      "type": "workshop",
    },
    {
      "title": "Conférence xxxx",
      "start_time": "13:30",
      "end_time": "15:30",
      "durée": "2h",
      "salle": "Salle de conférence",
      "type": "conférence",
    },
    {
      "title": "Workshop xxxx",
      "start_time": "13:30",
      "end_time": "15:30",
      "durée": "2h",
      "salle": "Workshop 1",
      "type": "workshop",
    },
    {
      "title": "Workshop xxxx",
      "start_time": "13:30",
      "end_time": "15:30",
      "durée": "2h",
      "salle": "Workshop 2",
      "type": "workshop",
    },
    {
      "title": "Conférence xxxx",
      "start_time": "15:45",
      "end_time": "18:15",
      "durée": "2h30",
      "salle": "Salle de conférence",
      "type": "conférence",
    },
    {
      "title": "Workshop xxxx",
      "start_time": "16:15",
      "end_time": "18:15",
      "durée": "2h",
      "salle": "Workshop 1",
      "type": "workshop",
    },
    {
      "title": "Workshop xxxx",
      "start_time": "17:30",
      "end_time": "19:00",
      "durée": "1h30",
      "salle": "Workshop 2",
      "type": "workshop",
    },
];

const Agenda: React.FC = () => {
    return (
        <Container>
            {
                event_data.map((event) => {
                    return <Event title={event.title} start_time={event.start_time} end_time={event.end_time} durée={event.durée} salle={event.salle} type={event.type}
                    />
                })
            }
            <Event title='Workshop xxxx' start_time='17:30' end_time='19:00' durée='1h30' salle='Workshop 2' type='workshop'/>
        </Container>
    );
};
const Container = styled.div``;
export default Agenda;