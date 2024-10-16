import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import IconButton from "@mui/joy/IconButton";
import Stack from "@mui/joy/Stack";
import Slide from "@mui/material/Slide";
import CloseIcon from '@mui/icons-material/Close';
import CustInput from "../../../components/input/component";
import CustTextarea from "../../../components/textarea/component";
import { Dispatch, SetStateAction, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { userInfo } from "../../../states/account/slice";
import { changeDescription, addNewTag, changeTitle, changeAbout, removeTag, changeIsUpdateUser } from "../../../states/account/slice";
import { updateUser } from "../../../states/account/slice";
import AddIcon from '@mui/icons-material/Add';
import { Chip } from "@mui/joy";
import ChipDelete from '@mui/joy/ChipDelete';
import DeleteForever from '@mui/icons-material/DeleteForever';

interface IProps {
    checked: boolean,
    setChecked: Dispatch<SetStateAction<boolean>>,
}


export default function SlideMenu({
    checked,
    setChecked
}: IProps) {
    const [newTag, setNewTag] = useState("");
    const dispatch = useAppDispatch();
    const user = useAppSelector(userInfo).obj.data;
    const tags = useAppSelector(userInfo).tags;
    const isUpdateUser = useAppSelector(userInfo).isUpdateUser;

    const onSubmit = () =>
    {
        dispatch(updateUser({ user: user! }));
        dispatch(changeIsUpdateUser(false));
        setChecked(false);
        setNewTag("");
    }

    const addTag = () => {
        dispatch(addNewTag(newTag));
        dispatch(updateUser({ user: user! }));
        setNewTag("");
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
            zIndex: 9999,
        }} >
            <Box sx={{ width: '100%' }} padding={2} display="flex" justifyContent='end'>
                <IconButton variant="soft" onClick={_ => {
                    if(!isUpdateUser)
                    {
                        setChecked(!checked);
                        dispatch(changeIsUpdateUser(false));
                        setNewTag("");
                    }
                    else
                        alert("Вы изменили инфомрацию. Сохраните пожалуйста изменения )))");
                }}>
                    <CloseIcon />
                </IconButton>
            </Box>
            <Stack direction="column"
                justifyContent="center"
                alignItems="end"
                spacing={2}
                paddingLeft={2}
                paddingRight={2}
                sx={{ width: '100%', height: "80%", overflow: "scroll" }}>
                <CustInput
                    value={user?.title ?? ''}
                    onChange={e => dispatch(changeTitle(e.target.value))}
                    name="title"
                    label="Кто вы?"
                    fullWidth={true}
                />
                <CustTextarea
                    value={user?.about ?? ''}
                    onChange={e => dispatch(changeAbout(e.target.value))}
                    name="about"
                    label="Расскажите о себе..."
                    placeholder=""
                    minRows={4}
                />
                <CustTextarea
                    value={user?.description ?? ''}
                    onChange={e => dispatch(changeDescription(e.target.value))}
                    name="description"
                    label="Что умеете?"
                    placeholder=""
                    minRows={2}
                />
                <CustInput
                    value={newTag}
                    onChange={e => setNewTag(e.target.value)}
                    name="title"
                    label="Tags"
                    fullWidth={true}
                    endIcon={<IconButton onClick={addTag} variant="solid" color="danger"><AddIcon /></IconButton>}
                />
                <Box sx={{ display: "flex", gap: 1, justifyContent: "start", width: "100%", flexWrap:"wrap"}}>
                    {
                        tags.map((t, i) =>
                            <Chip
                                key = {`tag_${i}`}
                                color="success"
                                size="lg"
                                variant="outlined"
                                endDecorator={
                                    <ChipDelete
                                        color="danger"
                                        variant="plain"
                                        onClick={() =>
                                            {
                                                dispatch(removeTag(t));
                                                dispatch(updateUser({ user: user! }));
                                            }}
                                    >
                                        <DeleteForever />
                                    </ChipDelete>
                                }

                            >
                                {t}
                            </Chip>)
                    }
                </Box>
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
                <Button onClick={onSubmit} variant="solid" color="success">
                    Сохранить
                </Button>


            </Stack>
            {/* <Box width="100%" padding={0} margin={0}>
                <SocialLink />
                <SocialLink />
                <SocialLink />
                </Box>
            <CustSpeedDial /> */}
        </Box>

    </Slide>
}