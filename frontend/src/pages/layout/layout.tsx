import React, { useEffect } from 'react';
import '../../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Box } from '@mui/joy';
import { BottomNavigation, BottomNavigationAction, Paper, Slide } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import { useNavigate, Outlet } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getUserById, userInfo } from '../../states/account/slice';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import LoadData from '../../services/initPage';
import { tg } from '../../services/init';
const icon = (
    <Paper sx={{ m: 1, width: 100, height: 100 }} elevation={4}>
        <svg>
            <Box
                component="polygon"
                points="0,100 50,00, 100,100"
                sx={{
                    fill: (theme) => theme.palette.common.white,
                    stroke: (theme) => theme.palette.divider,
                    strokeWidth: 1,
                }}
            />
        </svg>
    </Paper>
);

export default function Layout() {
    
    const [value, setValue] = React.useState(0);
    const navigate = useNavigate();
    const user = useAppSelector(userInfo);
    const dispatch = useAppDispatch();
    
    useEffect(() => {
        const loadData = async () => {
          await dispatch(getUserById(tg.initDataUnsafe?.user?.id ?? 0));
          tg.ready();
        };
        loadData();
      }, [dispatch]);

    useEffect(() => {
        switch (value) {
            case 0:                
                navigate(!user.isSpecialist ? "/":"/config")
                break;
            // case 1:
            //     navigate("/favorites")
            //     break;
            case 1:
                navigate("/profile")
                break
        }
    }, [value, user.isSpecialist]);

    return (
        <div className="App">
            <header>
                

                {/* <img src={logo} className="App-logo" alt="logo" />
                <p>
                    {process.env.REACT_APP_DEFAULT_URL}
                    {window.Telegram.WebApp.initDataUnsafe?.user?.username}

                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a> */}
            </header>
            <Box sx={{paddingBottom:10}}>
                <Outlet />
            </Box>
            <footer>
                <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 9999 }} elevation={3}>
                    <BottomNavigation
                        showLabels
                        value={value}
                        onChange={(event, newValue) => {
                            setValue(newValue);
                        }}
                    >
                        {
                            user.isSpecialist
                            ?
                            <BottomNavigationAction label="Configuration" icon={<ManageAccountsIcon />} />
                            :
                            <BottomNavigationAction label="Specialists" icon={<FormatListBulletedIcon />} />
                        }                        
                        {/* <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} /> */}
                        <BottomNavigationAction label="Account" icon={<AccountCircleIcon />} />
                    </BottomNavigation>
                </Paper>
            </footer>
            {/* <Slide  direction="up" in={true} mountOnEnter unmountOnExit>
                <Box minHeight={900} sx={{
                    
                    width:"100%",
                    backgroundColor:"red",
                    position:"absolute",
                    zIndex:9999
                }} >dddd</Box>
            </Slide>     */}
        </div>
    );
}