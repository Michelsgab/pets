import { Link, Box } from "@mui/material";
import NextLink from "next/link";
import { HeaderContainer, Logo, LinksContainer } from "./AdminHeader.style";

export default function AdminHeader() {
  return (
    <HeaderContainer>
      <div>
        <Logo src={"/assets/logo.svg"} alt={"Adopt a friend"} />
        <LinksContainer>
          <Link component={NextLink} href={"/pets/register"}>
            <a>Register Pet</a>
          </Link>
          <Link component={NextLink} href={"/pets/report"}>
            <a>
              Adoption{" "}
              <Box
                component={"span"}
                sx={{ display: { sm: "initial", xs: "none" } }}
              >
                Report
              </Box>
            </a>
          </Link>
          <Link>Adoption Report</Link>
        </LinksContainer>
      </div>
    </HeaderContainer>
  );
}
