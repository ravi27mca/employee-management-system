import { Typography, Paper } from "@mui/material";

function Dashboard() {
    return (
        <Paper sx={{ p: 3 }}>
            <Typography variant="h4">
                Welcome {localStorage.getItem("username")}
            </Typography>

            <Typography sx={{ mt: 2 }}>
                Enterprise Employee Management System
            </Typography>
        </Paper>
    );
}

export default Dashboard;