import React, { Box, TextField } from "@mui/material";
import { FC, useState } from "react";

export const Header: FC = () => {
    const [route, setRoute] = useState("Home");

    return <Box sx={{ width: '100vw', height: '80px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px', position: 'sticky', top: 0, zIndex: '10', backgroundColor: 'white', borderBottom: 'grey' }}>
        <Box
            sx={{ ...styles.Button, ...(route === "Home" && styles.ButtonSelected) }}
            onClick={() => setRoute("Home")}
        >Home</Box>
        <Box onClick={() => setRoute("Explore")} sx={{ ...styles.Button, ...(route === "Explore" && styles.ButtonSelected) }}>Explore</Box>
        <Box onClick={() => setRoute("Create")} sx={{ ...styles.Button, ...(route === "Create" && styles.ButtonSelected) }}>Create</Box>
        <input style={styles.TextInput} placeholder="&#128269;  Search" type='text' />
        <Box sx={styles.Button} >🔔</Box>
        <Box sx={styles.Button} >💬</Box>
        <Box sx={styles.Button} >J</Box>
    </Box>
}

const styles = {
    Button: {
        backgroundColor: 'rgba(0, 0, 0, 0)',
        color: '#221D23',
        fontWeight: '600',
        borderRadius: '40px',
        padding: '13px 15px',
        "&:hover": {
            backgroundColor: 'darkgray',
            cursor: 'pointer'
        },
    },
    ButtonSelected: {
        backgroundColor: 'black',
        color: 'white'
    },
    TextInput: {
        width: '50vw',
        borderRadius: '30px',
        backgroundColor: 'lightgrey',
        border: '0px',
        height: '50px',
        textIndent: '20px',
        "&:focus": {
            outline: 'none',
            border: '5px solid blue'
        }
    }

}
