import CardMetahumans from '../../components/CardMetahumans';
import Combat from '../../components/Combat';
import Header from '../../components/Header';
import Loading from '../../components/Loading';
import { useAppContext } from '../../hooks/useAppContext';
import './styles.scss';

const Home = () => {
  const { filteredMetahumans, loading, isCombat } = useAppContext();
  return (
    <>
      <Header isSearch />
      {isCombat && <Combat />}
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
