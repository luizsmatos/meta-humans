import Typography from '@material-ui/core/Typography';
import Infos from './Infos';
import Skills from './Skills';

import Metahumans from '../../types';
import './styles.scss';

interface DetailsProps {
  detailsMetaHuman: Metahumans;
}

const Details = ({ detailsMetaHuman }: DetailsProps) => {
  return (
    <section className="contentDetails">
      <header>
        <Typography
          sx={{ color: '#000000' }}
          gutterBottom
          variant="h4"
          component="div"
        >
          Meta Humano
        </Typography>
        <Typography
          sx={{ color: '#000000' }}
          gutterBottom
          variant="h4"
          component="div"
        >
          Habilidades
        </Typography>
      </header>
      <div className="skills-and-infos">
        <div className="container-img">
          <Infos metahuman={detailsMetaHuman} />
        </div>
        <div className="container-hab">
          <Skills metahuman={detailsMetaHuman} />
        </div>
      </div>
    </section>
  );
};

export default Details;
