import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import LinearProgress from '@material-ui/core/LinearProgress';
import { useAppContext } from '../../../hooks/useAppContext';

import Metahumans from '../../../types';
import capitalize from '../../../util/capitalize';

import './styles.scss';

interface SkillsProps {
  metahuman: Metahumans;
}

const Skills = ({ metahuman }: SkillsProps) => {
  const { characters } = useAppContext();
  const anotherCombatCharacter = characters.find(
    (m) => metahuman.id !== m.id
  )?.powerstats;
  const powerstats =
    Object.keys(metahuman).length > 0
      ? Object.entries(metahuman.powerstats)
      : [];

  return (
    <div>
      {powerstats.map(([key, value]) => {
        let valueToShow = `${capitalize(key)}: ${value}`;

        if (anotherCombatCharacter) {
          valueToShow =
            value > anotherCombatCharacter[key]
              ? `${capitalize(key)}: ${value}✔️`
              : `${capitalize(key)}: ${value}❌`;
        }
        return (
          <CardContent key={key}>
            <Typography className="skills">{valueToShow}</Typography>
            <LinearProgress
              sx={{
                height: '1rem',
                borderRadius: '1rem',
                width: '100%',
              }}
              variant="determinate"
              color="info"
              value={value}
            />
          </CardContent>
        );
      })}
    </div>
  );
};

export default Skills;
