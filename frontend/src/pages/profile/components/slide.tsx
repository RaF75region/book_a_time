import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import IconButton from "@mui/joy/IconButton";
import Input from "@mui/joy/Input";
import Stack from "@mui/joy/Stack";
import Slide from "@mui/material/Slide";
import CloseIcon from '@mui/icons-material/Close';
import CustInput from "../../../components/input/component";
import CustTextarea from "../../../components/textarea/component";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { Dispatch, SetStateAction } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import {
changeDescription,
changeTitle,
changePrice,
changeTimeProgress,
} from "../../../states/services/slice";
import { dataService } from "../../../states/services/slice";
import { addServiceForUser } from "../../../states/services/slice";
import { userData } from "../../../services/init";
import { Divider, List, Typography } from "@mui/joy";
import SocialLink from "../../../components/social/link";
import CustSpeedDial from "./speed-dial";

interface IProps {
    checked: boolean,
    setChecked: Dispatch<SetStateAction<boolean>>,
    handlerAddService: () => void,
}


export default function SlideMenu({
    checked,
    setChecked,
    handlerAddService,
}: IProps) {

    const dispatch = useAppDispatch();
    const reactDataService = useAppSelector(dataService)

    const onSubmit = () => {
        // dispatch(addServiceForUser({... reactDataService, userId: userData?.id ?? 0}));
        handlerAddService();
    }

    return <Slide direction="up" in={checked} mountOnEnter unmountOnExit>
        <Box sx={{
            position: 'fixed',
            left: 0,
            bottom: 0,
            width: '100vw',
            height: '100%',
            boxShadow: "-1px 13px 20px",
            backgroundColor: "white",
            zIndex: 9999
        }} >
            <Box sx={{ width: '100%' }} padding={2} display="flex" justifyContent='end'>
                <IconButton variant="soft" onClick={_ => setChecked(!checked)}>
                    <CloseIcon />
                </IconButton>
            </Box>
            <Stack direction="column"
                justifyContent="center"
                alignItems="end"
                spacing={2}
                paddingLeft={2}
                paddingRight={2}
                sx={{ width: '100%' }}>
                {/* <CustInput
                    value={reactDataService.title}
                    onChange={e => dispatch(changeTitle(e.target.value))}
                    name="about"
                    label="О себе"
                    placeholder="..."
                    fullWidth={true}
                /> */}
                <CustTextarea
                    value={reactDataService.description}
                    onChange={e => dispatch(changeDescription(e.target.value))}
                    name="about"
                    label="Расскажите о себе..."
                    placeholder=""
                    minRows={6}
                />
                {/* <Stack direction="row"
                    justifyContent="space-between"
                    spacing={1}
                    sx={{ width: "100%" }}>
                    <Input
                        value={reactDataService.price == 0 ? "" : reactDataService.price}
                        onChange={e => dispatch(changePrice(Number(e.target.value)))}
                        fullWidth
                        type="number"
                        placeholder="цена"
                        startDecorator='$'
                        slotProps={{
                            input: {
                                min: 1,
                                max: 999,
                                step: 1,
                            },
                        }}
                    />
                    <Input
                        value={reactDataService.timeProgress == 0 ? "" : reactDataService.timeProgress}
                        onChange={e => dispatch(changeTimeProgress(Number(e.target.value)))}
                        type="number"
                        fullWidth
                        placeholder="mm"
                        startDecorator=<AccessTimeIcon />
                        slotProps={{
                            input: {
                                min: 1,
                                max: 999,
                                step: 1,
                            },
                        }}
                    />
                </Stack> */}
                {/* <Button onClick={onSubmit} variant="solid" color="success">
                    Сохранить
                </Button> */}
                
                
            </Stack>
            <Box width="100%" padding={0} margin={0}>
                <SocialLink />
                <SocialLink />
                <SocialLink />
                </Box>
            <CustSpeedDial />
        </Box>

    </Slide>
}