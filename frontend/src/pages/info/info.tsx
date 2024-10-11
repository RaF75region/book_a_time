import { Box, Divider, Stack, Typography } from "@mui/joy";
import { Slide } from "@mui/material";
import { Button } from "react-bootstrap";
import { useAppDispatch } from "../../hooks";
import { useEffect } from "react";
import { Location, useLocation } from "react-router-dom";
import { openPageTheAlbum } from "../../states/animationSlice";
import { Balance } from "@mui/icons-material";
import { CustTypographyTitle } from "../../syled/style-typography-title";
import WorkingTime from "../../components/working-time/working-time";
import { CustPaymentBox } from "../../syled/styled-box";
import SocialLink from "../../components/social/link";

export default function Info() {
    const location = useLocation();
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(openPageTheAlbum(location.pathname));
    }, [])

    return <>
        <Divider>
            <Typography component="h1">О СПЕЦИАЛИСТЕ</Typography>
        </Divider>
        <Slide in={true} direction="left">
            <Stack
                direction="column"
                justifyContent="center"
                alignItems="center"
                spacing={2}
                padding={3}
            >
                {/* Загружается из БД */}
                <Typography level="body-md" textAlign="left">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</Typography>
            </Stack>
        </Slide>
        <Divider>
            <Typography component="h1">ЧАСЫ РАБОТЫ</Typography>
        </Divider>
        <Slide in={true} direction="left">
            <Stack direction="column"
                justifyContent="center"
                alignItems="center"
                spacing={0}
                paddingLeft={3}
                paddingRight={3}
            >

                <WorkingTime isCurrentDate={false} />
                <WorkingTime isCurrentDate={false} />
                <WorkingTime isCurrentDate={false} />
                <WorkingTime isCurrentDate={true} />
                <WorkingTime isCurrentDate={false} />
                <WorkingTime isCurrentDate={false} />
                <WorkingTime isCurrentDate={false} />
            </Stack>
        </Slide>
        <Divider>
            <Typography component="h1">АДРЕСА</Typography>
        </Divider>
        <Slide in={true} direction="left">
            <Box padding={3}>
                <Typography level="body-md" textAlign="left">addetera asd a ads da s </Typography>
            </Box>
        </Slide>
        {/* <Divider>
            <Typography component="h1">PAYMENTS</Typography>
        </Divider>
        <Stack 
        spacing={1} 
        direction="row" 
        flexWrap="wrap" 
        useFlexGap
        padding={3}
        >
            <CustPaymentBox>
                <Typography level="body-sm">Item</Typography> 
            </CustPaymentBox>
            <CustPaymentBox>
                <Typography level="body-sm">Item</Typography> 
            </CustPaymentBox>
            <CustPaymentBox>
                <Typography level="body-sm">Item asd asd</Typography> 
            </CustPaymentBox>
            <CustPaymentBox>
                <Typography level="body-sm">Item asd sa</Typography> 
            </CustPaymentBox>
            <CustPaymentBox>
                <Typography level="body-sm">Ite asd asm</Typography> 
            </CustPaymentBox>
            <CustPaymentBox>
                <Typography level="body-sm">Item</Typography> 
            </CustPaymentBox>

        </Stack> */}
        <Divider>
            <Typography component="h1">СОЦИАЛЬНЫЕ СЕТИ</Typography>
        </Divider>
        <SocialLink />
        <SocialLink />
        <SocialLink />
    </>
}