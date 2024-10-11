import React, { useEffect } from 'react';
import '../../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Avatar, Box, Divider, Stack, Typography } from '@mui/joy';
import './style.scss'
import { userData, tg } from '../../services/init';
import { useAppDispatch, useAppSelector } from '../../hooks';
import EventsForBisnessUser from '../../components/profile/bisness-user';
import EventsForUser from '../../components/profile/uset';
import { changeUserType, getUserById, handleSwitch } from '../../states/account/slice';
import { userInfo } from '../../states/account/slice';
import Switch from '@mui/material/Switch';
import { UserType } from '../../models/user_pb';

function UserProfile() {
    // tg.enableVerticalSwipes();
    // tg.MainButton.show().setParams({
    //     text: "bisness",
    // });    
    const { obj, loading, isSpecialist} = useAppSelector(userInfo);
    const user = obj.data;
    const dispatch = useAppDispatch();

    useEffect(() => {
        if(user == null)
            dispatch(getUserById(userData?.id ?? 0));
    }, [])

    useEffect(()=>{
        dispatch(changeUserType({ userId: user?.id ?? 0 , userType: isSpecialist ? UserType.SPECIALIST : UserType.USER}))
    },[isSpecialist])

    const getAvatar = () => {
        if (loading)
            return <Avatar size="lg" sx={{ height: 200, width: 200 }} />
        return <Avatar size="lg" sx={{ height: 200, width: 200 }}
            src={user?.urlPhoto ?? ""}>
        </Avatar>
    }

    return (<>
        <div className='body-profile'>
            {/* {valuesAccount.object.toObject().user} */}
        </div>
        <Box margin={2}>
            <Box width="100%" display="flex" alignContent="center" justifyContent="center">
                {getAvatar()}
            </Box>
            <Stack direction="row"
                justifyContent="space-between"
                alignItems="center"
                spacing={2}
                marginTop={2}
            >
                <Stack direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    spacing={2}
                >

                    <Stack direction="column"
                        justifyContent="center"
                        alignItems="start"
                    >
                        <Typography level="title-md">{user?.fullName}</Typography>
                        <Typography maxWidth="80%" textAlign="start" level="title-sm" color="neutral">{user?.name}</Typography>
                    </Stack>

                </Stack>

                <Switch
                    onChange={e => dispatch(handleSwitch(e.target.checked))}
                    checked={isSpecialist}
                ></Switch>
            </Stack>

            <Typography
                paddingTop={2}
                maxWidth="80%"
                textColor="success.600"
                textAlign="start"
                level="title-sm"
                color="neutral">
                Роль:
                {
                    isSpecialist
                        ?
                        " бизнес пользователь"
                        :
                        " пользователь"
                }
            </Typography>
            <Divider sx={{ marginTop: 2 }} inset="context">
                <Typography component="h1">РАСПИСАНИЕ</Typography>
            </Divider>
            {
                isSpecialist
                    ?
                    <EventsForBisnessUser />
                    :
                    <EventsForUser />
            }
        </Box>
    </>
    );
}

export default UserProfile;
