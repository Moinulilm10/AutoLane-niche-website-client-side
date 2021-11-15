import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import MakeAdmin from '../MakeAdmin/MakeAdmin';


const DashboardAdmin = () => {
    return (
        <div>
            <Typography paragraph>
                <Grid item xs={12}>
                    <MakeAdmin></MakeAdmin>
                </Grid>
            </Typography>
        </div>
    );
};

export default DashboardAdmin;