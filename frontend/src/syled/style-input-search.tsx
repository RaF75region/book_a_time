import { Input, styled } from "@mui/joy";

export const CustIconButton = styled(Input)({
    position: "absolute",
    right: 0,
    top: 0,
    '& .JoyIconButton-root:hover': {
        backgroundColor: '#ff3d47 !important',
    }  
});

export const inputStyleSearch = {    
    m: 3,
    borderRadius: 0,
    borderBottom: '2px solid',
    borderColor: 'neutral.outlinedBorder',
    '&:hover': {
        borderColor: 'neutral.outlinedHoverBorder',
    },
    '&::before': {
        border: '1px solid var(--Input-focusedHighlight)',
        transform: 'scaleX(0)',
        left: 0,
        right: 0,
        bottom: '-2px',
        top: 'unset',
        transition: 'transform .15s cubic-bezier(0.1,0.9,0.2,1)',
        borderRadius: 0,
    },
    '&:focus-within::before': {
        transform: 'scaleX(1)',
    },
}