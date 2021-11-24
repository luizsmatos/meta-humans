import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAppContext } from '../../hooks/useAppContext';
import Details from '../../components/Details';
import Header from '../../components/Header';
import Loading from '../../components/Loading';
import Metahumans from '../../types';
import './styles.scss';

const DetailsMetaHuman = () => {
  const { dataMetahumans, loading } = useAppContext();
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
  }, [dataMetahumans, params.id]);

  return (
    <>
      <Header isSearch={false} />
      {loading ? (
        <Loading />
      ) : (
        <section className="details">
          <Details detailsMetaHuman={detailsMetaHuman} />
        </section>
      )}
    </>
  );
};

export default DetailsMetaHuman;
