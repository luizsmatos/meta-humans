import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
} from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import Metahumans from '../../types';

interface MetahumanProps {
  metahuman: Metahumans;
}

const CardMetahumans = ({ metahuman }: MetahumanProps) => {
  const navigate = useNavigate();
  return (
    <Card sx={{ borderRadius: '1rem' }}>
      <CardActionArea
        sx={{ ':hover': { filter: 'contrast(0.7)' } }}
        onClick={() => navigate(`/metahumans/${metahuman.id}`)}
      >
        <CardMedia
          component="img"
          height="340"
          image={metahuman.images.sm}
          alt={metahuman.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {metahuman.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {`${metahuman.appearance.gender}, ${
              metahuman.appearance.race ?? 'Unknown'
            }`}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CardMetahumans;