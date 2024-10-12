import * as React from 'react';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import DeleteIcon from '@mui/icons-material/Delete';
import { TransitionGroup } from 'react-transition-group';
import { Box, ListItemContent, Stack, Typography } from '@mui/joy';
import EditIcon from '@mui/icons-material/Edit';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { getServices, removeService, removeServiceAsync } from '../../../states/services/slice';
import { userData } from '../../../services/init';
import { listServices } from '../../../states/services/slice';
import { Service } from '../../../types/types';
import CurrencyRubleIcon from '@mui/icons-material/CurrencyRuble';

const FRUITS = [
    '🍏 Apple',
    '🍌 Banana',
    '🍍 Pineapple',
    '🥥 Coconut',
    '🍉 Watermelon',
];

interface RenderItemOptions {
    item: Service;
    handleRemoveItem: (idItem: string) => void;
}

function renderItem({ item, handleRemoveItem }: RenderItemOptions) {
    return (
        <ListItem
            secondaryAction={
                <Stack
                    spacing={0.1}
                    direction="row"
                    alignItems="flex-end"
                >
                    <IconButton
                        edge="end"
                        aria-label="edit"
                        title="Edit"
                    // onClick={() => handleRemoveFruit(item)}
                    >
                        <EditIcon />
                    </IconButton>
                    <IconButton
                        edge="end"
                        aria-label="delete"
                        title="Delete"
                        onClick={() => handleRemoveItem(item.id ?? "")}
                    >
                        <DeleteIcon />
                    </IconButton>
                </Stack>
            }
        >
            <ListItemContent>
                <Stack spacing={0.1}
                    direction="column"
                    alignItems="start"
                    justifyContent="center"
                >
                    <Typography textAlign='left' level="title-lg" id="card-description">
                        {item.title}
                    </Typography>
                    <Typography textAlign='left' level="body-sm" aria-describedby="card-description" mb={1}>
                        <Typography
                            sx={{ color: 'text.tertiary' }}
                        >
                            {item.description}
                        </Typography>
                    </Typography>
                    <Stack direction="row"
                        justifyContent="start"
                        alignItems="start"
                        spacing={3}
                        marginTop={2}>
                        <Typography color="success" level="body-sm">{item.price}<CurrencyRubleIcon sx={{ fontSize: 14 }} /></Typography>
                        <Stack direction="row"
                            justifyContent="center"
                            alignItems="start"
                            spacing={1}>
                            <AccessTimeIcon fontSize="small" />
                            <Typography level="body-sm">{item.timeProgress} min</Typography>
                        </Stack>
                    </Stack>
                </Stack>
            </ListItemContent>
        </ListItem>
    );
}

export default function ListServices() {

    const [fruitsInBasket, setFruitsInBasket] = React.useState(FRUITS.slice(0, 3));
    const list = useAppSelector(listServices);

    const handleAddFruit = () => {
        const nextHiddenItem = FRUITS.find((i) => !fruitsInBasket.includes(i));
        if (nextHiddenItem) {
            setFruitsInBasket((prev) => [nextHiddenItem, ...prev]);
        }
    };

    const handleRemoveItem = (idItem: string) => {
        if (idItem !== undefined) {
            dispatch(removeService(idItem))
            dispatch(removeServiceAsync(list.filter(s => s.id == idItem)[0]));
        }
    };

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getServices(userData?.id ?? 0))
    }, [])

    return (
        <Box sx={{ width: "100%" }}>
            <List
                sx={{ width: "100%" }}
                disablePadding>
                <TransitionGroup>
                    {list.map((item) => (
                        <Collapse key={item.id}>{renderItem({ item, handleRemoveItem })}</Collapse>
                    ))}
                </TransitionGroup>
            </List>
        </Box>
    );
}
