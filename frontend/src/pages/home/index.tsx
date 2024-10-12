import React, { useEffect } from 'react';
import '../../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomCard from '../../components/card/card';
import { Box, CircularProgress, Input, Stack } from '@mui/joy';
import DrawerNavigation from '../../components/drawer/drawer';
import { Search } from '@mui/icons-material';
import { inputStyleSearch } from '../../syled/style-input-search';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { valuesSpecialists } from '../../states/specialists/slice';
import { getSpecialists } from '../../states/specialists/slice';
import { UserType } from '../../models/user_pb';
import SyncIcon from '@mui/icons-material/Sync';

const isDebug = process.env.NODE_ENV == 'development';

function SpeciaLists() {
    const dispatch = useAppDispatch();
    const specialists = useAppSelector(valuesSpecialists);

    useEffect(() => {
        dispatch(getSpecialists(isDebug ? UserType.USER : UserType.SPECIALIST));
    }, [])

    const GetListComponent = () => {
        if (specialists.loading.isLoadData)
            return <Box sx={{ display: 'flex' }}>
                <CircularProgress
                    color="success"
                    value={60}
                    variant="plain"
                >
                    <SyncIcon />
                </CircularProgress>
            </Box>

        return <>
            {
                specialists.specialists.map(s =>
                    <CustomCard
                        key={s.id}
                        id={s.id}
                        photo_url={s.urlPhoto}
                        fullname={s.fullName}
                        title={s.title}
                        description={s.about}
                        raiting={s.rating}
                        readOnlyRaiting={true}
                        tags = {s.tags != null ? s.tags.split(',').map(item => item.trim()) : []}
                        onClickFavorite={e => {
                            console.log(e)
                        }}
                        isFavorite={true}
                    />)
            }
        </>
    }

    return (
        <>
            <Stack direction="row"
                justifyContent="space-between"
                alignItems="stretch"
                spacing={1}
                paddingLeft={3}
                paddingRight={3}>
                <DrawerNavigation />
                <Input
                    fullWidth
                    placeholder="Search a specialist"
                    variant="plain"
                    endDecorator={<Search />}
                    slotProps={{
                        input: {
                            'aria-label': 'Search a specialist',
                        },
                    }}
                    sx={{
                        inputStyleSearch
                    }}
                />

            </Stack>

            <Stack
                direction="column"
                justifyContent="center"
                alignItems="center"
                spacing={0.5}
                paddingTop={1}
                // marginBottom={9}
                height={specialists.loading.isLoadData ? 500 : 'auto'}
            >
                <GetListComponent />


                {/* <CustomCard
                    id={2}
                    photo_url={window.Telegram.WebApp.initDataUnsafe.user?.photo_url}
                    name='naвфывфыв фыв фыв фыв фы вфы вфы вф me1'
                    description='manikur'
                    raiting={1}
                    readOnlyRaiting={true}
                    onClickFavorite={e => {
                        console.log(e)
                    }}
                    isFavorite={true}
                />
                <CustomCard
                    id={3}
                    photo_url={window.Telegram.WebApp.initDataUnsafe.user?.photo_url}
                    name='naвфывфыв фыв фыв фыв фы вфы вфы вф me1'
                    description='manikur'
                    raiting={1}
                    readOnlyRaiting={true}
                    onClickFavorite={e => {
                        console.log(e)
                    }}
                    isFavorite={false}
                /> */}


                {/* <CustomCard name='name 2' description='manikur' raiting={4} readOnlyRaiting={true} />
            <CustomCard name='tjknjknkjnkj' description='mk kj k kjkn' raiting={2.4} readOnlyRaiting={true} />
            <CustomCard name='name1' description='manikur' raiting={1} readOnlyRaiting={true} />
            <CustomCard name='name 2' description='manikur' raiting={4} readOnlyRaiting={true} />
            <CustomCard name='tjknjknkjnkj' description='mk kj k kjkn' raiting={2.4} readOnlyRaiting={true} /> */}
                {/* <CustomCard title='t' description='m' raiting={5} />

                 <CustomCard title='t' description='m' raiting={0} /> */}


            </Stack>
        </>
    );
}

export default SpeciaLists;
