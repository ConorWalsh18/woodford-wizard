import { Typography, Button } from "@mui/material";
import Link from "next/link";

export default function Home() {
  const test = () => {
    console.log("here");
  };

  return (
    <div>
      <Typography variant="h4">Welcome to My App!</Typography>

      <Link href="/about" passHref>
        <Button variant="contained" color="primary">
          Go to About
        </Button>
      </Link>

      {/* <Button color="inherit" onClick={() => test()}>
        About
      </Button> */}
    </div>
  );
}
