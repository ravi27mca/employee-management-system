import { Box } from "@mui/material";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function MainLayout({ children }) {
    return (
        <>
            <Navbar />

            <Box sx={{ display: "flex" }}>
                <Sidebar />

                <Box
                    component="main"
                    sx={{
                        flexGrow: 1,
                        padding: 3,
                        marginLeft: "220px",
                    }}
                >
                    {children}
                </Box>
            </Box>
        </>
    );
}

export default MainLayout;