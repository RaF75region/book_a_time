import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Divider from "@mui/joy/Divider";
import Stack from "@mui/joy/Stack";
import Textarea from "@mui/joy/Textarea";
import Typography from "@mui/joy/Typography";
import AddCommentOutlinedIcon from '@mui/icons-material/AddCommentOutlined';

export default function EventsForUser() {
    return <Stack direction="column"
        justifyContent="center"
        alignItems="start"
    >
        <Box display="flex"
            sx={{
                margin: 2,
                boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.19)"
            }}>
            <Stack
                direction="column"
                justifyContent="center"
                alignItems="start"
                spacing={1}
                margin={2}
            >
                <Typography level="title-sm">1. dsa</Typography>
                <Stack
                    direction="row"
                    justifyContent="space-between"
                    width="100%"
                >
                    <Typography color="success" level="body-sm">100$</Typography>
                    <Typography level="body-sm">8:15 - 9:00 (45min)</Typography>
                </Stack>
                <Typography level="body-sm" fontWeight={300} textAlign="left">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                </Typography>

            </Stack>
            <Stack direction="column"
                justifyContent="center"
                alignItems="center"
                margin={2}>
                <Typography level="h1">30</Typography>
                <Typography level="title-md">JUL</Typography>
            </Stack>
        </Box>
        <Divider sx={{ marginLeft: 2, marginRight: 2, marginBottom: 2 }} inset="context" />
    </Stack>
}