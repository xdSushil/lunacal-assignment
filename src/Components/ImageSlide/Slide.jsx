import { Box, Typography } from '@mui/material';
import React, { useState, useRef } from 'react';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { motion } from 'framer-motion';
import image1 from "../Images/download.jpg";
import image2 from "../Images/Anastronautridingahorseinaphotorealisticstyle6.webp";
import image3 from "../Images/images.jpg";
import image4 from "../Images/istockphoto-1419410282-612x612.jpg";
import image5 from "../Images/pexels-photo-355508.webp";
import image6 from "../Images/drake-performs-onstage-during-lil-baby-friends-birthday-news-photo-1696684425.jpg";



const initialImageUrls = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    
];

const AnimatedBox = motion(Box);

export default function Slide() {
    const [isClicked, setIsClicked] = useState(null);
    


    const [imageUrls, setImageUrls] = useState(initialImageUrls);
    const sliderRef = useRef(null);
    const fileInputRef = useRef(null);

    const scroll = (direction) => {
        setIsClicked(direction);
        if (sliderRef.current) {
            const scrollAmount = 170 + 30; 
            sliderRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth',
            });
        }
        setTimeout(() => setIsClicked(false), 300);

    };

    // Open file selector when Add Image button is clicked
    const handleAddImageClick = () => {
        fileInputRef.current.click();
    };

    // Handle file selection and add to imageUrls
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const newImageUrl = e.target.result;
                setImageUrls([...imageUrls, newImageUrl]);
            };
            reader.readAsDataURL(file); // Read the file as a data URL
        }
    };
    


    return (
        <>
            {/* Hidden file input */}
            <input
                type="file"
                accept="image/*"
                ref={fileInputRef}
                style={{ display: 'none' }}
                onChange={handleFileChange}
            />
            {/*Add Image button*/}

            <AnimatedBox
                sx={{
                    width: "131.32px",
                    height: "46px",
                    position: "absolute",
                    top: "10px",
                    left: "310px",
                    gap: "0px",
                    borderRadius: "104px 104px 104px 104px",
                    opacity: "0px",
                    angle: "-180 deg",
                    cursor: "pointer",
                    boxShadow:
                        '0px 3.26px 3.26px 0px #FFFFFF26 inset, ' +
                        '0px 0px 48.91px 0px #FFFFFF0D inset, ' +
                        '9px 10px 7.1px 0px #00000066, ' +
                        '-0.5px -0.5px 6.9px 0px #FFFFFF40',
                    background: "#363C43",

                     
                }} onClick={handleAddImageClick} 
                whileTap={{ scale: 0.9 }} // Scale down on click
                whileHover={{ scale: 1.05 }} // Slightly scale up on hover
                >
                <AddCircleOutlineIcon
                    sx={{
                        width: "15.1px",
                        height: "15.1px",
                        position: "absolute",
                        top: "16px", 
                        left: "17px", 
                        color: "#FFFFFF",
                        opacity: "0px",
                        background: "transparent",
                    }}
                />
                <Typography
                    sx={{
                        width: "69px",
                        height: "7px",
                        position: "absolute",
                        top: "20px",
                        left: "35px",
                        gap: "0px",
                        opacity: "0px",
                        color: "#FFFFFF",
                        background: "transparent",


                        fontFamily: "Plus Jakarta Sans",
                        fontSize: "12px",
                        fontWeight: "800",
                        lineHeight: "6.29px",
                        textAlign: "center",

                    }}>
                    ADD IMAGE

                </Typography>

            </AnimatedBox>


            {/*Image Navigations*/}
            <Box sx={{
                width: "45px",
                height: "45px",
                gap: "0px",
                opacity: "0px",
                background: isClicked === "left"
                    ? 'linear-gradient(to left, rgba(54, 60, 67, 0.1), rgba(54, 60, 67, 0.6), #96BEE7)'
                    : 'linear-gradient(139.14deg, #303439 12.4%, #161718 94.96%)',
                position: "absolute",
                top: "13px",
                left: "490px",
                boxShadow:
                    '4px 5px 30px 5px #101213, ' +
                    '-5px -3px 30px -10px #96BEE7',

                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }} 
            onClick={() => scroll('left')} 
            
            >
                {/* left Arrow Icon */}
                <ArrowBackIcon
                    sx={{
                        width: "24.19px",
                        height: "24px",
                        color: "#6F787C",
                        background: "transparent",
                        borderRadius: "50%", // Circle border
                        padding: "4px", // Adjust padding to fit inside the circle
                    }}
                />

            </Box>

            <Box sx={{
                width: "45px",
                height: "45px",
                gap: "0px",
                opacity: "0px",
                background: isClicked === "right"
                    ? 'linear-gradient(to right, rgba(54, 60, 67, 0.1), rgba(54, 60, 67, 0.3), #96BEE7)'
                    : 'linear-gradient(139.14deg, #303439 12.4%, #161718 94.96%)',
                position: "absolute",
                top: "13px",
                left: "550px",
                boxShadow:
                    '4px 5px 30px 5px #101213, ' +
                    '-5px -3px 30px -10px #96BEE7',
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",

            }} 
            onClick={() => scroll('right')}
    
            >


                {/* Right Arrow Icon */}
                <ArrowForwardIcon
                    sx={{
                        width: "24.19px",
                        height: "24px",
                        color: "#6F787C",
                        background: "transparent",
                        borderRadius: "50%", // Circle border
                        padding: "4px", // Adjust padding to fit inside the circle
                    }}
                />


            </Box>



            <Box
                ref={sliderRef}
                sx={{
                    scrollBehavior: 'smooth',
                    overflow: 'hidden',
                    position: "absolute",
                    top: "90px",
                    left: "8px",
                    width: "570px",
                    height: "180px",
                    display: 'flex',
                    background: "transparent",
                    gap: '20px', // Space between images
                    padding: '10px',
                    whiteSpace: 'nowrap', // Prevent line breaks
                    '& img': {
                        width: '180px',
                        height: '160px',
                        transition: 'transform 0.3s ease, filter 0.3s ease', // Smooth transitions for hover effects
                        filter: 'grayscale(100%)', // Black and white effect by default
                        cursor: 'pointer', // Change cursor to pointer on hover
                        borderRadius: '23px', // Optional: round the corners
                    },
                    '& img:hover': {
                        filter: 'grayscale(0%)', // Show color on hover
                        transform: 'scale(1.07) rotate(-5deg)', // Zoom and rotate (change the angle as needed)
                        transition: 'transform 0.5s ease, filter 0.3s ease', // Smooth transition for the hover effect
                        boxShadow:"10px 35px 15px 0px #00000033",
                    }
                }}
            >
                {imageUrls.map((url, index) => (
                    <img src={url} alt={`Slide ${index}`} key={index} />
                ))}
            </Box>
        </>
    );
}
