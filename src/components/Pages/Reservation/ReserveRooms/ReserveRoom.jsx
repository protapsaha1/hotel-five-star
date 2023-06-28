import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import RoomsCards from './RoomsCards';

const ReserveRoom = () => {
    const [rooms, setRooms] = useState([]);
    useEffect(() => {
        fetch("http://localhost:6001/rooms")
            .then(res => res.json())
            .then(data => setRooms(data))
            .catch(error => console.error(error.message))
    }, [])

    return (
        <div className='grid grid-cols-1 gap-3'>
            {
                rooms.map(room => <RoomsCards key={room._id} room={room} />)
            }
        </div>
    );
};

export default ReserveRoom;