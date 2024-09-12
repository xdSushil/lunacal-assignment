import { Box } from "@mui/material";
import React from "react";
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import Navbar from "../NavBar/Navbar";
import Divider from "../Divider/Divider";
const About = () => {
    return (
        <>
        <Box
            sx={{
                width: "720px",
                height: "316px",
                borderRadius: "18.89px",
                background: "#363C43",
                boxShadow: "5.67px 5.67px 3.78px 0px #00000066",
                position: "absolute",
                top: "40px",
                left: "725px",
            }}
        >
            {/* rectangle */}
            <Box sx={{
                width: "8px",
                height: "64px",
                position: "absolute",
                top: "115px",
                left: "690px",
                gap: "0px",
                borderRadius: "8px 8px 8px 8px",
                opacity: "0px",
                background: "linear-gradient(177.32deg, #888989 5.6%, #4A4E54 93.28%)",
                boxShadow: "4px 4px 4.9px 0px #00000040",


            }}>
            </Box>

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


            {/* Navigateions */}
            <Navbar />

            
        </Box >
        {/*Divider only for about section*/}
        <Divider />
        </>
    );
};

export default About;
