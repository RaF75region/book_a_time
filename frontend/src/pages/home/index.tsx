import React, { useEffect } from 'react';
import '../../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomCard from '../../components/card/card';
import { Input, Stack } from '@mui/joy';
import DrawerNavigation from '../../components/drawer/drawer';
import { Search } from '@mui/icons-material';
import { inputStyleSearch } from '../../syled/style-input-search';
import LoadData from '../../services/initPage';
import { userInfo } from '../../states/account/slice';
import { useAppSelector } from '../../hooks';

function SpeciaLists() {
    // const {user} = useAppSelector(userInfo);
    // if(!user.user)
    //     LoadData();

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
            marginBottom={9}
        >


            <CustomCard
                id="ddd"
                photo_url={window.Telegram.WebApp.initDataUnsafe.user?.photo_url}
                name='naвфывфыв фыв фыв фыв фы вфы вфы вф me1'
                description='manikur'
                raiting={1}
                readOnlyRaiting={true}
                onClickFavorite={e=>{
                    console.log(e)
                }}
                isFavorite={true}
            />
            <CustomCard
                id="123"
                photo_url={window.Telegram.WebApp.initDataUnsafe.user?.photo_url}
                name='naвфывфыв фыв фыв фыв фы вфы вфы вф me1'
                description='manikur'
                raiting={1}
                readOnlyRaiting={true}
                onClickFavorite={e=>{
                    console.log(e)
                }}
                isFavorite={false}
            />
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
