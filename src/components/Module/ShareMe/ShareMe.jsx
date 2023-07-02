import React from 'react';
import { FacebookIcon, FacebookMessengerIcon, FacebookMessengerShareButton, FacebookShareButton, LinkedinIcon, LinkedinShareButton, TelegramIcon, TelegramShareButton, TwitterIcon, TwitterShareButton, WhatsappIcon, WhatsappShareButton } from "react-share";

const ShareMe = () => {
    const shareUrl = 'http://localhost:5173/';
    return (
        <div className='flex'>
            <li className='mx-1'>
                <FacebookShareButton
                    url={shareUrl}
                >
                    <FacebookIcon size={40} round={true} />
                </FacebookShareButton>
            </li>
            <li className='mx-1'>
                <FacebookMessengerShareButton
                    url={shareUrl}
                >
                    <FacebookMessengerIcon size={40} round={true} />
                </FacebookMessengerShareButton>
            </li>
            <li className='mx-1'>
                <WhatsappShareButton
                    url={shareUrl}
                >
                    <WhatsappIcon size={40} round={true} />
                </WhatsappShareButton>
            </li>
            <li className='mx-1'>
                <LinkedinShareButton
                    url={shareUrl}
                >
                    <LinkedinIcon size={40} round={true} />
                </LinkedinShareButton>
            </li>
            <li className='mx-1'>
                <TwitterShareButton
                    url={shareUrl}
                >
                    <TwitterIcon size={40} round={true} />
                </TwitterShareButton>
            </li>
            <li>
                <TelegramShareButton
                    url={shareUrl}
                >
                    <TelegramIcon size={40} round={true} />
                </TelegramShareButton>
            </li>
        </div>
    );
};

export default ShareMe;