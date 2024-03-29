import { Helmet, HelmetProvider } from 'react-helmet-async';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import css from './ContactsPage.module.css';

const ContactsPage = () => {
  return (
    <div className={css.container}>
      <HelmetProvider>
        <Helmet>
          <title>Phonebook</title>
        </Helmet>
      <ContactForm />
      

      <h2 className={css.textContact}>Contacts</h2>
      <Filter />
        <ContactList />
      
      </HelmetProvider>
    </div>
  );
};

export default ContactsPage;