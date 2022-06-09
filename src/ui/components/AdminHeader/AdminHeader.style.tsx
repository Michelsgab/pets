import { styled } from "@mui/material";

export const HeaderContainer = styled("header")`
    height: 115px;
    background-color: #F6F6F6;
    padding: ${({ theme }) => theme.spacing(2)};
    div {
        height: 100%;
        max-width: 970px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: ${({ theme }) => theme.spacing(2)};
    }
`;

export const Logo = styled("img")`

`;

export const LinksContainer = styled("nav")`

`;