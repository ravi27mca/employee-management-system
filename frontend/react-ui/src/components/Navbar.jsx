import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import keycloak from "../auth/keycloak";

function Navbar() {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                    EMS Portal
                </Typography>

                <Typography sx={{ mr: 2 }}>
                    {keycloak.tokenParsed?.preferred_username}
                </Typography>

                <Button
                    color="inherit"
                    onClick={() => keycloak.logout()}
                >
                    Logout
                </Button>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;