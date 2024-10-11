import { Box, Stack, Typography } from "@mui/joy";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkIcon from '@mui/icons-material/Link';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { Link } from "react-router-dom";
import "./style.scss"
interface IProps {
    isLoad: boolean,
    type: number,
    name: string,
    link: string
    isCurrentDate: boolean
}

export default function SocialLink(

) {
    return <Link to="/" className="link-social"><Stack direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={0}
        minHeight={50}
        paddingLeft={3}
        paddingRight={3}>
        <Box display="flex" gap={1} justifyItems="center" alignItems="center">
            <InstagramIcon />
            <Typography>name</Typography>
        </Box>

        <OpenInNewIcon/>
    </Stack>
    </Link> 
}