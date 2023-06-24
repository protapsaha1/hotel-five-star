import React from 'react';
import RoomPage from '../RoomPage/RoomPage';
import RoomSlider from '../../../Shared/Sliders/RoomSlider/RoomSlider';

const Rooms = () => {
    return (
        <div>
            <RoomSlider />
            <RoomPage />
        </div>
    );
};

export default Rooms;