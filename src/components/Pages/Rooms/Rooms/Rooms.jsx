import React from 'react';
import RoomPage from '../RoomPage/RoomPage';
import RoomSlider from '../../../Shared/Sliders/RoomSlider/RoomSlider';
import useTitle from '../../../Module/Hooks/useTitle';

const Rooms = () => {
    useTitle("Rooms");
    return (
        <div>
            <RoomSlider />
            <RoomPage />
        </div>
    );
};

export default Rooms;