
import { useState } from "react";
import { Link } from "react-router-dom";
import { Box, Typography, useTheme } from "@mui/material";
import FlexBetween from "./FlexBetween";


const Navbar = () => {
    const { palette } = useTheme();
    const [selected, setSelected] = useState("dashboard");
    return (
        <FlexBetween mb="0.5rem" p="0.5rem 0.5rem" color={palette.grey[300]} >
          
            {/* LEFT SIDE */}
            <FlexBetween gap="0.75rem" >
                <img alt="icon" src="/logo.png" width="30px" height="30px"/>
               
                <Typography variant="h4" fontSize="16px" style={{margin: '10px 0 0 0'}}>
                    ZYNCO
                </Typography>
            </FlexBetween>

            {/* RIGHT SIDE */}
            <FlexBetween gap="2rem">
                <Box 
                sx={{ "&:hover": { 
                    color: palette.primary[500],
                    textDecoration:"underline" , 
                      
                     
                       } }} >
                    <Link
                        to="/"
                        onClick={() => setSelected("dashboard")}
                        style={{
                            color:
                                selected === "dashboard"
                                    ? "inherit"
                                    : palette.grey[700],
                            textDecoration: "inherit",
                        }}
                    >
                        Dashboard
                    </Link>
                </Box>
                <Box
                sx={{ "&:hover": { 
                    color: palette.primary[500],
                    textDecoration:"underline" , 
                      
                       } }} >
                    <Link
                        to="/predictions"
                        onClick={() => setSelected("predictions")}
                        style={{
                            color:
                                selected === "predictions"
                                    ? "inherit"
                                    : palette.grey[700],
                            textDecoration: "inherit",
                        }}
                    >
                        Predictions
                    </Link>
                </Box>
            </FlexBetween>
        </FlexBetween>
    );
};

export default Navbar;