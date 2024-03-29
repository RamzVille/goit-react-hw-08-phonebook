import { RevolvingDot } from 'react-loader-spinner';
import css from './Loader.module.css';

export const Loader = () => {
  return (
    <div className={css.loaderWrap}>
      <RevolvingDot
          visible={true}
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="revolving-dot-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};
