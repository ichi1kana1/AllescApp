import React from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import AccessibilityNewIcon from '@material-ui/icons/AccessibilityNew';

export function Notification() {
    return (
        <Box
            bgcolor="secondary.light"
            borderRadius="borderRadius"
            p={2}
        >
            <Grid container direction="row">
                <Grid item>
                    <AccessibilityNewIcon />
                </Grid>
                <Grid item>
                    <Grid container direction="column">
                        <Grid item >
                            <Box fontSize={13}>2021/4/20 10:12</Box>
                        </Grid>
                        <Grid item >
                            <Box fontSize={18}>5月分献立追加</Box>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    )
}