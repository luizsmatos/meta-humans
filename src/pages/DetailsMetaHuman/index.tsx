import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CardMedia, CardContent, Typography } from '@material-ui/core';
import Header from '../../components/Header';
import { useAppContext } from '../../hooks/useAppContext';

import Metahumans from '../../types';
import './styles.scss';
import Infos from './Infos';

const DetailsMetaHuman = () => {
  const { dataMetahumans } = useAppContext();
  const [detailsMetaHuman, setDetailsMetaHuman] = useState({} as Metahumans);
  const params = useParams();

  useEffect(() => {
    function getMetaHuman() {
      const getDetailsMetaHuman = dataMetahumans.find((metahuman) => {
        return metahuman.id === Number(params.id);
      });

      if (getDetailsMetaHuman) {
        setDetailsMetaHuman(getDetailsMetaHuman);
      }
    }
    getMetaHuman();
  }, []);

  return (
    <>
      <Header isSearch={false} />
      <section className="contentDetails">
        <div className="container-img">
          <Infos metahuman={detailsMetaHuman} />
        </div>
        <div className="container-hab">
          <Typography
            sx={{ color: '#000000' }}
            gutterBottom
            variant="h4"
            component="div"
          >
            Habilidades
          </Typography>
          <div />
        </div>
      </section>
    </>
  );
};

export default DetailsMetaHuman;
