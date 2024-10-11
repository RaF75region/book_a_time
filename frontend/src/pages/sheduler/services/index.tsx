import { Button, Stack } from '@mui/joy';
import Box from '@mui/joy/Box';
import List from '@mui/joy/List';
import ListDivider from '@mui/joy/ListDivider';
import ListItem from '@mui/joy/ListItem';
import Typography from '@mui/joy/Typography';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { setNumber } from '../../../states/stepper/slice';
import { useAppDispatch,useAppSelector } from '../../../hooks';
import { selectValues } from '../../../states/stepper/slice';
import { setIdService } from '../../../states/services/slice';

export default function Services() {
    const dispatch=useAppDispatch();
    const values = useAppSelector(selectValues)

    const onClick=(id:string)=>{
        dispatch(setNumber(values.number+1));
        dispatch(setIdService(id))
    }

    return <Box
        sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: 4,
        }}
    >
        <List
            variant="outlined"
            sx={{
                minWidth: 240,
                borderRadius: 'sm',
                borderStyle: "none"
            }}
        >
            <ListItem>
                {/* <ListItemDecorator>
                    <Avatar size="lg" src="/static/images/avatar/1.jpg" />
                </ListItemDecorator> */}
                <Button variant="outlined" sx={{borderStyle:'none'}} onClick={_=>onClick("test1")}>
                <Stack direction="column"
                    justifyContent="center"
                    alignItems="start"
                    spacing={1}
                    paddingLeft={1}>
                    <Typography level="title-sm">1. dsa</Typography>
                    <Typography level="body-sm" fontWeight={300} textAlign="left">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                    </Typography>
                    <Stack direction="row"
                        justifyContent="start"
                        alignItems="start"
                        spacing={3}
                        marginTop={2}>
                        <Typography color="success" level="body-sm">100$</Typography>
                        <Stack direction="row"
                            justifyContent="center"
                            alignItems="start"
                            spacing={1}>
                            <AccessTimeIcon fontSize="small" />
                            <Typography level="body-sm">45 min</Typography>
                        </Stack>
                    </Stack>
                </Stack>
                </Button>
            </ListItem>
            <ListDivider inset="gutter" />            
            <ListItem>
            <Button variant="outlined" sx={{borderStyle:'none'}} onClick={_=>onClick("test2")}>
                <Stack direction="column"
                    justifyContent="center"
                    alignItems="start"
                    spacing={1}
                    paddingLeft={1}>
                    <Typography level="title-sm">1. dsa</Typography>
                    <Typography level="body-sm" fontWeight={300} textAlign="left">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                    </Typography>
                    <Stack direction="row"
                        justifyContent="start"
                        alignItems="start"
                        spacing={3}
                        marginTop={2}>
                        <Typography color="success" level="body-sm">100$</Typography>
                        <Stack direction="row"
                            justifyContent="center"
                            alignItems="start"
                            spacing={1}>
                            <AccessTimeIcon fontSize="small" />
                            <Typography level="body-sm">45 min</Typography>
                        </Stack>
                    </Stack>

                </Stack>
                </Button>
            </ListItem>
        </List>
    </Box>
}