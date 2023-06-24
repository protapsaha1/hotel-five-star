// import React, { useState } from 'react';
// import { SlArrowLeft, SlArrowRight } from 'react-icons/sl'

// const RoomCarousel = ({ image }) => {
//     const [currentImage, setCurrentImage] = useState(0);
//     const { image_url } = image;
//     return (
//         <div className='relative'>
//             <div
//                 style={{ backgroundImages: `url(${image_url})` }}
//                 className='w-full h-96 border my-2'
//             >
//             </div>
//             {/* leftarrow */}
//             <div className='absolute '>
//                 <SlArrowLeft className='w-7 h-7' />
//             </div>
//             {/* rightarrow */}
//             <div className='absolute'>
//                 <SlArrowRight  className='w-7 h-7'/>
//             </div>
//         </div>
//     );
// };

// export default RoomCarousel;