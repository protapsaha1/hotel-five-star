const slider = () => {
    let img = 1;

    setInterval(() => {
        if (img === images.length) {
            img = 0;
        }
        const imgUrl = images[img];
        img++;
        return imgUrl;

    }, 1000)
};