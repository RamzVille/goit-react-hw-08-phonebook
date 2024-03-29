import css from './Footer.module.css';

export const Footer = () => {
  return (
    <footer className={css.container}>
      &copy; {new Date().getFullYear()} BY: RAMZ VILLE | goit-react-hw-08-phonebook
    </footer>
  );
};