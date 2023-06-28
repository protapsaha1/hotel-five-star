import Room from './Room';
import useRooms from '../../../Module/Hooks/useRooms';

const RoomPage = () => {
    const { rooms } = useRooms();
    
    return (
        <div className='grid grid-cols-4 gap-6 w-[2100px] mx-auto py-10'>
            {rooms &&
                rooms.map(room => <Room key={room._id} room={room}></Room>)
            }
        </div>
    );
};

export default RoomPage;
