import { Box, Stack } from "@mui/joy";
import Slide from "@mui/material/Slide";
import { useAppSelector } from "../../hooks";
import { selectValue } from "../../states/animationSlice";
import QuiltedImageList from "../../components/image-list/imageList";

export default function Album(){
    const value = useAppSelector(selectValue);

    return <Slide in={true} direction={value?"left":"right"}>
        <Stack padding={3}>
            <QuiltedImageList />
        </Stack>
    </Slide>
}