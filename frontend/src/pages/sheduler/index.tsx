import { Slide } from "@mui/material";
import { useAppDispatch } from "../../hooks";
import { useEffect } from "react";
import { openPageTheAlbum } from "../../states/animationSlice";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import CustStepper from "../../components/scheduler/stepper";
import { Box } from "@mui/joy";

export default function Sheduler() {
    const dispatch = useAppDispatch();
    const location = useLocation();
    const navigate = useNavigate();
    useEffect(() => {
        dispatch(openPageTheAlbum(location.pathname));
        navigate(`${location.pathname}/services`);
    }, []);

    return (<>
        <Slide in={true} direction="right">
            <Box component="div">
                <CustStepper />
            </Box>
        </Slide>
        <Outlet />
    </>
    )
}