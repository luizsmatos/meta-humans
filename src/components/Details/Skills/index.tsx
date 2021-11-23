import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import LinearProgress from '@material-ui/core/LinearProgress';
import Metahumans from '../../../types';
import capitalize from '../../../util/capitalize';
import './styles.scss';

interface SkillsProps {
  metahuman: Metahumans;
}

const Skills = ({ metahuman }: SkillsProps) => {
  const colors = ['#000', 'error', 'warning', 'primary', 'secondary', 'sucess'];
  const powerstats =
    Object.keys(metahuman).length > 0
      ? Object.entries(metahuman.powerstats)
      : [];

  return (
    <div>
      {powerstats.map(([key, value], index) => (
        <CardContent key={value}>
          <Typography sx={{ color: '#000000' }}>
            {`${capitalize(key)}: ${value}`}
          </Typography>
          <LinearProgress
            sx={{
              height: '1rem',
              borderRadius: '1rem',
              width: '60%',
            }}
            variant="determinate"
            color="info"
            value={value}
          />
        </CardContent>
      ))}
    </div>
  );
};

export default Skills;
