import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import Metahumans from '../../../types';

interface InfosProps {
  metahuman: Metahumans;
}

const Infos = ({ metahuman }: InfosProps) => {
  return (
    <div>
      <CardMedia
        component="img"
        height="340"
        image={metahuman.images?.sm}
        alt={metahuman.name}
      />
      <CardContent>
        <Typography
          sx={{ color: '#000000' }}
          gutterBottom
          variant="h5"
          component="div"
        >
          {metahuman.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {`${metahuman.appearance?.gender}, ${
            metahuman.appearance?.race ?? 'Unknown'
          }`}
        </Typography>
      </CardContent>
    </div>
  );
};

export default Infos;
