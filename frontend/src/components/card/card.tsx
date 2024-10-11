import { Avatar, Card, CardContent, Typography } from "@mui/joy";
import CustomeRating from "../raiting/raiting";
import Favorite from "@mui/icons-material/Favorite";
import { CustIconButton } from "../../syled/style-icon-button";
import { MouseEventHandler, useState } from "react";
import './card.scss'
import { FavoriteBorderOutlined, FavoriteOutlined } from "@mui/icons-material";
import { tg, userData } from "../../services/init";
import { Link } from "react-router-dom";

interface IProps {
    id:string
    name: string,
    description: string,
    raiting: number,
    readOnlyRaiting: boolean
    photo_url: string | undefined,
    onClickFavorite: MouseEventHandler,
    isFavorite:boolean,
}

export default function CustomCard({
    id,
    name,
    description,
    raiting,
    readOnlyRaiting,
    photo_url,
    onClickFavorite,
    isFavorite
}: IProps) {
    const [favorite, setFavorite] = useState(isFavorite);

    const handlerFavorite=()=>{        
            setFavorite(!favorite)
    }
    
    const nameForPhoto:string = userData?.first_name.charAt(0) ?? "" + userData?.last_name?.charAt(0) ?? "";

    return (
        <Link to={`/${id}`} className="text-decoration-none">
        <Card
            variant="outlined"
            orientation="horizontal"
            sx={{
                minWidth: 350,
                maxWidth: 350,
                '&:hover': { boxShadow: 'md', borderColor: 'neutral.outlinedHoverBorder' },
            }}
        >
            
            <Avatar src={photo_url}>{nameForPhoto}</Avatar>
            <CardContent>
                <Typography textAlign='left' level="title-lg" id="card-description">
                    {name}
                </Typography>
                <Typography textAlign='left' level="body-sm" aria-describedby="card-description" mb={1}>
                    <Typography
                        sx={{ color: 'text.tertiary' }}
                    >
                        {description}
                    </Typography>
                </Typography>
                <CustomeRating defaultValue={raiting} readOnly={readOnlyRaiting} />
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