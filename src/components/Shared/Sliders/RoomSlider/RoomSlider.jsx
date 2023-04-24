import React, { useEffect, useState } from 'react';

const Slider = () => {
    const [images, setImages] = useState([]);
    const [sliders, setSliders] = useState([]);
    useEffect(() => {
        fetch('http://localhost:6001/images')
            .then(res => res.json())
            .then(data => setImages(data))
            .catch(error => console.error(error.message))
    }, []);

    // const slider = () => {
    let img = 1;
    setInterval(() => {
        if (img === images.length) {
            img = 0;
        }
        const imgUrl = images[img];
        setSliders(imgUrl)
        img++;

    }, 1000)
    // };

    return (
        <div className='mt-16'>

            {/* <h1>img{images.length}</h1> */}
            {
                /* images.map(image =>*/ <img className='w-full h-96' /*src={image.image_url} key={image.id}*/ />  /*)*/
            }
        </div>
    );
};

export default Slider;