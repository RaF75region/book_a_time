import { IconButton, styled } from "@mui/joy";

export const CustIconButton = styled(IconButton)({
    position: "absolute",
    right: 0,
    top: 0,
    '& .JoyIconButton-root:hover': {
        backgroundColor: '#ff3d47 !important',
    }
});