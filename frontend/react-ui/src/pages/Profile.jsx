import keycloak from "../auth/keycloak";
import { Typography } from "@mui/material";

function Profile() {
    return (
        <>
            <Typography variant="h4">
                Profile
            </Typography>

            <Typography>
                Username :
                {keycloak.tokenParsed?.preferred_username}
            </Typography>

            <Typography>
                Name :
                {keycloak.tokenParsed?.name}
            </Typography>

            <Typography>
                Email :
                {keycloak.tokenParsed?.email}
            </Typography>
        </>
    );
}

export default Profile;