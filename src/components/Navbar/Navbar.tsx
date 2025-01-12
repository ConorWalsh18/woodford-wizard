import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import Link from "next/link";

export default function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Box sx={{ flexGrow: 1 }}>
          <Typography variant="h6">My App</Typography>
        </Box>

        <Link href="/about" passHref>
          <Button color="inherit">About</Button>
        </Link>
        <Link href="/wizard" passHref>
          <Button color="inherit">Wizard</Button>
        </Link>
      </Toolbar>
    </AppBar>
  );
}
