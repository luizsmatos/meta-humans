import CardMetahumans from '../../components/CardMetahumans';
import Header from '../../components/Header';
import Loading from '../../components/Loading';
import { useAppContext } from '../../hooks/useAppContext';
import './styles.scss';

const Home = () => {
  const { filteredMetahumans, loading } = useAppContext();
  return (
    <>
      <Header isSearch />
      <section className="contentHumans">
        {loading ? (
          <Loading />
        ) : (
          filteredMetahumans.map((metahuman) => (
            <CardMetahumans metahuman={metahuman} key={metahuman.id} />
          ))
        )}
      </section>
    </>
  );
};

export default Home;
