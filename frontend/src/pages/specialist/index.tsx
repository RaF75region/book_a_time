import { IconButton, Stack, Typography } from "@mui/joy";
import { Link, Outlet, useNavigate, useParams } from "react-router-dom"
import { ArrowBack } from "@mui/icons-material";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import { useEffect, useState } from "react";
import ArtTrackIcon from '@mui/icons-material/ArtTrack';
import InfoIcon from '@mui/icons-material/Info';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';


export default function Specialist() {
    const { id } = useParams();
    const [value, setValue] = useState(0);

    const navigate = useNavigate();
    useEffect(() => {
        switch (value) {
            case 0:
                navigate(`/${id}/info`)
                break;
            case 1:
                navigate(`/${id}/album`)
                break;
            case 2:
                navigate(`/${id}/sheduler`)
                break
        }
    }, [value]);

    return <>
        <Stack direction="row"
            justifyContent="start"
            alignItems="center"
            spacing={1}
            paddingLeft={3}
            paddingRight={3}>
            <Link to="/">
                <IconButton>
                    <ArrowBack fontSize="large" color="action" />
                </IconButton>
            </Link>
            <Typography fontSize={20} variant="plain" fontWeight="bold" textAlign="center" width='100%' paddingRight={5}>
                About specialist
            </Typography>
        </Stack>
        <Stack>
            <BottomNavigation
                showLabels
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            >
                <BottomNavigationAction label="Инфо" icon={<InfoIcon />} />
                <BottomNavigationAction label="Альбом" icon={<ArtTrackIcon />} />
                <BottomNavigationAction label="Бронь времени" icon={<CalendarMonthIcon />} />
            </BottomNavigation>
            <Outlet />
        </Stack>
    </>
}