import { Link } from "@mui/material";
import NextLink from "next/link";
import { HeaderContainer, Logo, LinksContainer } from "./AdminHeader.style";

export default function AdminHeader() {
  return (
    <HeaderContainer>
      <div>
        <Logo src={"/assets/logo.svg"} alt={"Adopt a friend"} />
        <LinksContainer>
          <Link>Register Pet</Link>
          <Link>Adoption Report</Link>
        </LinksContainer>
      </div>
    </HeaderContainer>
  );
}
