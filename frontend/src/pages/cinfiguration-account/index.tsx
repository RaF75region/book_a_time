import { Box, Button, IconButton } from "@mui/joy";
import Checkbox from "@mui/joy/Checkbox";
import Divider from "@mui/joy/Divider";
import Stack from "@mui/joy/Stack";
import Typography from "@mui/joy/Typography";
import dayjs, { Dayjs } from "dayjs";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import "./style.scss"
import { MobileTimePicker } from '@mui/x-date-pickers/MobileTimePicker';
import Switch from '@mui/material/Switch';
import Paper from '@mui/material/Paper';
import Slide from '@mui/material/Slide';
import FormControlLabel from '@mui/material/FormControlLabel';
import ListServices from "./components/list";
import { tg } from "../../services/init";
import { useEffect, useState } from "react";
import { selectValues } from "../../states/services/slice";
import { handlerOpened } from "../../states/services/slice";
import { useAppDispatch, useAppSelector } from "../../hooks";
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';
import CustInput from "../../components/input/component";
import CustTextarea from "../../components/textarea/component";
import Input from '@mui/joy/Input';
import SlideMenu from "./components/slide";
import LoadData from "../../services/initPage";
import { addServiceForUser } from "../../states/services/slice";
import { MessageService } from "../../models/service_pb";

interface IDay {
    isSelected: boolean,
    title: string,
    startTime: Dayjs,
    endTime: Dayjs
}


export default function Index() {
    const [checked, setChecked] = useState(false);
    const dispatch = useAppDispatch();
    const data: IDay[] = [
        { isSelected: true, title: "Пн.", startTime: dayjs(), endTime: dayjs() },
        { isSelected: true, title: "Вт.", startTime: dayjs(), endTime: dayjs() },
        { isSelected: true, title: "Ср.", startTime: dayjs(), endTime: dayjs() },
        { isSelected: true, title: "Чт.", startTime: dayjs(), endTime: dayjs() },
        { isSelected: true, title: "Пт.", startTime: dayjs(), endTime: dayjs() },
        { isSelected: true, title: "Сб.", startTime: dayjs(), endTime: dayjs() },
        { isSelected: true, title: "Вc.", startTime: dayjs(), endTime: dayjs() },
    ]

    const handlerAddService = () => {
        setChecked(!checked);
    }

    return <> <Box margin={2}>
        {/* <Divider sx={{ marginTop: 2 }} inset="context">
            <Typography component="h1">ГРАФИК РАБОТЫ</Typography>
        </Divider>
        <Stack direction="column"
            justifyContent="space-between"
            alignItems="flex-start"
            spacing={2}>
            {
                data.map((obj, index) => {
                    return <Stack
                        key={`timer_${index}`}
                        sx={{
                            width: "100%"
                        }}
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center">
                        <Checkbox label={obj.title} variant="outlined" defaultChecked={obj.isSelected} />
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <Stack direction="row"
                                justifyContent="space-between"
                                alignItems="flex-start"
                                spacing={0}
                                sx={{
                                    padding: 0
                                }}>
                                <MobileTimePicker
                                    minutesStep={15}
                                    className="time-picker"
                                    defaultValue={obj.startTime}
                                    ampm={false}
                                />
                                <Typography paddingRight={1}>-</Typography>
                                <MobileTimePicker
                                    minutesStep={15}
                                    className="time-picker"
                                    defaultValue={obj.endTime}
                                    ampm={false}
                                />
                            </Stack>
                        </LocalizationProvider>
                    </Stack>
                }

                )
            }
            <Box sx={{ width: "100%" }} display="flex" justifyContent="start">
                <Button fullWidth color="success">Сохранить график</Button>
            </Box>
        </Stack> */}
        <Divider sx={{ marginTop: 2 }} inset="context">
            <Typography component="h1">УСЛУГИ</Typography>
        </Divider>
        <Stack direction="row"
            justifyContent="space-between"
            alignItems="center"
            spacing={2}
            sx={{ width: "100%" }}>
            <Button
                fullWidth
                variant="solid"
                color="success"
                onClick={_ => setChecked(!checked)}
                startDecorator={<AddIcon />}
            >
                Добавить услугу
            </Button>
        </Stack>
        <ListServices />
    </Box>
        <SlideMenu
            checked={checked}
            setChecked={setChecked}
            handlerAddService={handlerAddService}
        />
    </>
}

