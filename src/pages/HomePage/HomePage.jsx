import { Helmet, HelmetProvider } from 'react-helmet-async';
import css from './HomePage.module.css';
import myProfileImage from 'images/profile.jpg'; // Import your profile image

const HomePage = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Phonebook</title>
      </Helmet>
      <div className={css.container}>
        <img src={myProfileImage} alt="My Profile" className={css.profileImage} />
        <br/>
        <h1 className={css.title}>Welcome to My Phonebook</h1>
        <h5 className={css.dev}>BY: RAMZ VILLE</h5>
      </div>
    </HelmetProvider>
  );
};

export default HomePage;