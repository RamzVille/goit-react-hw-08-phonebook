import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/authOperations';
import css from './RegisterForm.module.css';
import { FaUser, FaEnvelope , FaKey } from 'react-icons/fa'; // Import FontAwesome icons

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <div className={css.container}>
      <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
          <label className={css.formField}>
              <p className={css.formLabel}>Username</p>
                  <div className={css.inputContainer}>
                  <FaUser className={css.icon} />
                  <input
                      type="text"
                      name="name"
                  />
                  </div>
          </label>
        
          <label className={css.formField}>
              <p className={css.formLabel}>Email</p>
                  <div className={css.inputContainer}>
                  <FaEnvelope className={css.icon} />
                  <input
                      type="email"
                      name="email"
                  />
                  </div>
            </label>
            
            <label className={css.formField}>
                <p className={css.formLabel}>Password</p>
                    <div className={css.inputContainer}>
                    <FaKey className={css.icon} />
                    <input
                        type="password"
                        name="password"
                    />
                    </div>
            </label>
            
            <button className={css.btnSubmit} type="submit">Register</button>
      </form>
    </div>
  );
};