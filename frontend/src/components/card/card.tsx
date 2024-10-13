import { AspectRatio, Avatar, Box, Card, CardContent, Chip, Typography } from "@mui/joy";
import CustomeRating from "../raiting/raiting";
import Favorite from "@mui/icons-material/Favorite";
import { CustIconButton } from "../../syled/style-icon-button";
import { MouseEventHandler, useState } from "react";
import './card.scss'
import { FavoriteBorderOutlined, FavoriteOutlined } from "@mui/icons-material";
import { tg, userData } from "../../services/init";
import { Link } from "react-router-dom";

interface IProps {
    id: number | undefined
    fullname: string | null | undefined,
    title: string | null | undefined,
    description: string | null | undefined,
    raiting: number | undefined,
    readOnlyRaiting: boolean
    photo_url: string | undefined | null,
    tags: string[] | undefined,
    onClickFavorite: MouseEventHandler,
    isFavorite: boolean,
}

export default function CustomCard({
    id,
    fullname,
    title,
    description,
    raiting,
    readOnlyRaiting,
    photo_url,
    tags,
    onClickFavorite,
    isFavorite
}: IProps) {
    const [favorite, setFavorite] = useState(isFavorite);

    const handlerFavorite = () => {
        setFavorite(!favorite)
    }

    const nameForPhoto: string = userData?.first_name.charAt(0) ?? "" + userData?.last_name?.charAt(0) ?? "";

    return (
        <Link key={id} to={`/${id}`} className="text-decoration-none">
            <Card
                key={id}
                variant="outlined"
                orientation="horizontal"
                sx={{
                    alignItems:"center",
                    minWidth: 350,
                    maxWidth: 350,
                    '&:hover': { boxShadow: 'md', borderColor: 'neutral.outlinedHoverBorder' },
                }}
            >

                <Avatar sx={{width:90, height:90}} src={photo_url ?? ""} srcSet={`${photo_url ?? ""} 2x`}>{nameForPhoto}</Avatar>
                <CardContent>
                    <Typography textAlign='left' level="title-lg" id="card-description">
                        {title}
                    </Typography>
                    <Typography textAlign='left' level="title-sm" id="card-description">
                        {fullname}
                    </Typography>
                    <Typography textAlign='left' level="body-sm" aria-describedby="card-description" mb={1}>
                        <Typography
                            sx={{ color: 'text.tertiary' }}
                        >
                            {description}
                        </Typography>
                    </Typography>
                    <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
                        {
                            tags?.map(t => <Chip
                                color="success"
                                size="sm"
                                variant="outlined"
                            >
                                {t}
                            </Chip>)
                        }
                    </Box>
                    <CustomeRating defaultValue={raiting ?? 0} readOnly={readOnlyRaiting} />
                    <CustIconButton className="color-transparent" onClick={handlerFavorite}>
                        {
                            favorite
                                ?
                                <FavoriteOutlined color="error" />
                                :
                                <FavoriteBorderOutlined />
                        }
                        {/* <Favorite  /> */}
                    </CustIconButton>

                </CardContent>
            </Card>
        </Link>
    )
}