import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Typography from '@mui/material/Typography';


interface IProps{
    defaultValue:number,
    readOnly:boolean
}

const StyledRating = styled(Rating)({
  '& .MuiRating-iconFilled': {
    color: '#ff6d75',
  },
  '& .MuiRating-iconHover': {
    color: '#ff3d47',
  },
});

export default function CustomeRating({defaultValue,readOnly}:IProps) {
  return (
       
      <StyledRating
        name="customized-color"
       // defaultValue={defaultValue}
        value={defaultValue}
        getLabelText={(value: number) => `${value} Heart${value !== 1 ? 's' : ''}`}
        precision={0.1}
        readOnly={readOnly}
        max={5}
        // icon={<FavoriteIcon fontSize="inherit" />}
        // emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
      />
    
  );
}
