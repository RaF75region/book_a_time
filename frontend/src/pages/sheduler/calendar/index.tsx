import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import dayjs, { Dayjs } from 'dayjs';
import { MutableRefObject, useEffect, useRef } from 'react';
import { Box, Divider, Grid, Stack, Typography } from '@mui/joy';
import Time from '../../../components/times/time';
import './style.scss'
import { start } from 'repl';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../../hooks';
import { selectValues } from '../../../states/stepper/slice';
import { setNumber } from '../../../states/stepper/slice';
import { MobileTimePicker } from '@mui/x-date-pickers/MobileTimePicker';

export default function Calendar() {
    const refCaledar = useRef<HTMLDivElement>(null);
    const select = useAppSelector(selectValues);
    const dispatch = useAppDispatch();
    let startData: Dayjs = dayjs('2024-04-13 09:00')
    const endData: Dayjs = dayjs('2024-04-13 20:00')
    const defaultValue = dayjs()

    useEffect(() => {
        // console.log(startData.toString())
        // console.log(endData.toString())
        getTime()
    }, [])

    const getTime = (): Dayjs[] => {
        const r: Dayjs[] = [];
        r.push(startData);
        do {
            startData = startData.add(15, 'minute');
            r.push(startData);
        } while (startData < endData)
        return r;
    }

    const getZeroForMinute = (value: number) => {
        if (value.toString().length === 1) {
            return "0" + value.toString();
        }
        return value.toString();
    }

    const handlerDataChange = (date: Dayjs) => {
        console.log(date)
    }

    const nextStepper = () => {
        dispatch(setNumber(2));
    }

    return <Box>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateCalendar
                views={['day']}
                ref={refCaledar}
                showDaysOutsideCurrentMonth
                fixedWeekNumber={6}
                defaultValue={defaultValue}
                shouldDisableDate={e => e.startOf('day') < dayjs().startOf('day')}
                onChange={handlerDataChange}
                sx={{ padding: 1 }}
            />
            <Divider sx={{ marginTop: 2 }} inset="context">
                <Typography component="h1">ВЫБЕРИТЕ ВРЕМЯ</Typography>
            </Divider>
            <Box sx={{
                padding: 1
            }}>
                <MobileTimePicker
                    minutesStep={5}
                    sx={{
                        width: "100%",
                    }}
                    label="Время"
                    defaultValue={dayjs()}
                    ampm={false}
                />
            </Box>
            <Divider sx={{ marginTop: 2 }} inset="context">
                <Typography component="h1">ЗАНЯТОЕ ВРЕМЯ</Typography>
            </Divider>
        </LocalizationProvider>
        <Stack padding={1} spacing={1} direction="row" flexWrap="wrap" useFlexGap>
            <Time event={nextStepper} hour="10" minute="10" />
            <Time event={nextStepper} hour="10" minute="10" />
            <Time event={nextStepper} hour="09" minute="10" />
            <Time event={nextStepper} hour="01" minute="10" />
            <Time event={nextStepper} hour="10" minute="10" />

        </Stack>
    </Box>
}