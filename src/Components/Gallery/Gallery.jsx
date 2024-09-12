import React from "react";
import { Box, Typography } from "@mui/material";
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

import Slide from "../ImageSlide/Slide"
const gallery = () => {
    return (
        <>
            <Box
                sx={{
                    width: "720px",
                    height: "300px",
                    borderRadius: "18.89px",
                    background: "#363C43",
                    boxShadow: "5.67px 5.67px 3.78px 0px #00000066",
                    position: "absolute",
                    top: "385px",
                    left: "725px",
                    
                }}
            >
                {/*Frame*/}
                <Box sx={{
                    width: "24px",
                    height: "159.69px",
                    position: "absolute",
                    top: "17px",
                    left: "12px",
                    gap: "105px",
                    opacity: "0px",
                    background: "transparent"
                }}>
                    <HelpOutlineIcon
                        sx={{
                            width: '24px',
                            height: '24px',
                            gap: '0px',
                            opacity: 1,
                            background: "linear-gradient(327.89deg, #4A4E54 -1.73%, #A3ADBA 89.26%)",

                        }}
                    />

                    {/*Container for small boxes */}

                    <Box sx={{
                        width: "24px",
                        height: "30.69px",
                        gap: "1.50px",
                        borderRadius: "2.33px 0px 0px 0px",
                        opacity: "0px",
                        marginTop: "80px",
                        background: "transparent",
                        display: "flex",
                        flexWrap: 'wrap',
                        padding: "2px"
                    }}>
                        {/* small boxes */}
                        <Box sx={{
                            width: "9.31px",
                            height: "9.31px",
                            gap: "0px",
                            borderRadius: "1.16px 0px 0px 0px",
                            opacity: "0px",
                            background: "#4A4E54",

                        }}>

                        </Box>
                        <Box sx={{
                            width: "9.31px",
                            height: "9.31px",
                            gap: "0px",
                            borderRadius: "1.16px 0px 0px 0px",
                            opacity: "0px",
                            background: "#4A4E54",

                        }}>

                        </Box>
                        <Box sx={{
                            width: "9.31px",
                            height: "9.31px",
                            gap: "0px",
                            borderRadius: "1.16px 0px 0px 0px",
                            opacity: "0px",
                            background: "#4A4E54",

                        }}>

                        </Box>
                        <Box sx={{
                            width: "9.31px",
                            height: "9.31px",
                            gap: "0px",
                            borderRadius: "1.16px 0px 0px 0px",
                            opacity: "0px",
                            background: "#4A4E54",

                        }}>

                        </Box>
                        <Box sx={{
                            width: "9.31px",
                            height: "9.31px",
                            gap: "0px",
                            borderRadius: "1.16px 0px 0px 0px",
                            opacity: "0px",
                            background: "#4A4E54",

                        }}>

                        </Box>
                        <Box sx={{
                            width: "9.31px",
                            height: "9.31px",
                            gap: "0px",
                            borderRadius: "1.16px 0px 0px 0px",
                            opacity: "0px",
                            background: "#4A4E54",

                        }}>

                        </Box>

                    </Box>


                </Box>

                <Box sx={{
                    width: "149px",
                    height: "62px",
                    position: "absolute",
                    top: "17px",
                    left: "55px",
                    gap: "0px",
                    borderRadius: "20px 20px 20px 20px",
                    opacity: "0px",
                    background: "#171717",
                    boxShadow: "0px 4px 10px 2px #00000040 inset",


                }}>
                    <Typography
                        sx={{
                            width: "72px",
                            height: "30px",
                            position: "absolute",
                            top: "17px",
                            left: "40px",
                            gap: "0px",
                            opacity: "0px",

                            fontFamily: "Poppins",
                            fontSize: "19px",
                            fontWeight: "450",
                            lineHeight: "30px",
                            textAlign: "left",
                            color: "#FFFFFF",
                            background: "transparent",


                        }}>
                        Gallery
                    </Typography>

                </Box>

                </Box>


            {/*Image Slider*/}
            <Box 
            sx={{
                position:"absolute",
                top: "400px",
                left: "790px",
                width: "600px",
                height: "300px",
                background:"transparent",
                
            }}>
                <Slide />

            </Box>

            



            {/*Divider*/}
            <Box sx={{
                width: "612px",
                height: "4px",
                position: "absolute",
                top: "697px",
                left: "780px",
                gap: "0px",
                borderRadius: "2.46px 0px 0px 0px",
                opacity: "0px",
                background: "linear-gradient(180deg, rgba(40, 40, 40, 0.1) 0%, rgba(248, 248, 248, 0.1) 100%)",
                boxShadow: "0px 4px 4px 0px #00000054",


            }}>

            </Box>
        </>
    )
}

export default gallery;