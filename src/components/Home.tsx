import React from "react";
import { Grid } from "@mui/material";

export const Home: React.FC = () => {
  return (
    <Grid 
        container 
        columnGap={10}
        justifyContent='center'
        sx={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)'
        }}
    >
        <Grid xl={4} textAlign='center' sx={{backgroundColor: 'red'}}>
            First
        </Grid>
        <Grid xl={4} textAlign='center' sx={{backgroundColor: 'green'}}>
            Second
        </Grid>
    </Grid>
  );
}
