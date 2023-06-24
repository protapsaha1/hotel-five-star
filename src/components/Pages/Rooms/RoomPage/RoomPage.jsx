import React, { useEffect, useState } from 'react';
import Room from './Room';

const RoomPage = () => {
    const [rooms, setRooms] = useState([]);
    useEffect(() => {
        fetch("http://localhost:6001/rooms")
            .then(res => res.json())
            .then(data => setRooms(data))
            .catch(error => console.error(error.message))
    }, [])
    return (
        <div className='grid grid-cols-4 gap-6 w-[2100px] mx-auto py-10'>
            {
                rooms.map(room => <Room key={room._id} room={room}></Room>)
            }
        </div>
    );
};

export default RoomPage;
