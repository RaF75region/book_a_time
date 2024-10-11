import { Stack, Typography } from "@mui/joy";

interface IProps {
    // isLoad: boolean
    // startDateTime: Date,
    // endDateTime: Date,
    isCurrentDate:boolean
}

export default function WorkingTime(
    {isCurrentDate}
    :
    IProps
) {
    return <Stack direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={0}
        minHeight={50}
        sx={{
            width:'100%',
            backgroundColor: isCurrentDate ? "#f5f5f5" : "transparent",
            borderRadius:10
        }}
        paddingLeft={1}
            paddingRight={1}>
        <Typography>Monday</Typography>
        <Stack direction="row"
            justifyContent="flex-end"
            alignItems="center"
            spacing={0.5}>
            <Typography>9:00</Typography>
            <Typography>-</Typography>
            <Typography>18:00</Typography>
        </Stack>
    </Stack>
}