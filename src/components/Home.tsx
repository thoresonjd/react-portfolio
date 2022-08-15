import React from "react";
import { Grid, Typography } from "@mui/material";

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
        <Grid xl={4} textAlign='center' sx={{color: 'white'}}>
            <Typography fontSize={50} fontWeight='bold'>Left</Typography>
        </Grid>
        <Grid xl={4} textAlign='center' sx={{color: 'white'}}>
            <Typography fontSize={50} fontWeight='bold'>Right</Typography>
        </Grid>
    </Grid>
  );
}
