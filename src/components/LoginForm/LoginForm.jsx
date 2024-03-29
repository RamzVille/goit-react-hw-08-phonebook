import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/authOperations';
import { FaSignInAlt, FaEnvelope, FaKey } from 'react-icons/fa'; // Import FontAwesome icons
import css from './LoginForm.module.css';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
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
                <p className={css.formLabel}>Email</p>
                    <div className={css.inputContainer}>
                    <FaEnvelope className={css.icon} />
                    <input
                        type="email"
                        name="email"
                    required/>
                    </div>
            </label>
            
            <label className={css.formField}>
                <p className={css.formLabel}>Password</p>
                    <div className={css.inputContainer}>
                    <FaKey className={css.icon} />
                    <input
                        type="password"
                        name="password"
                    required/>
                    </div>
            </label>
            
                <button className={css.btnSubmit} type="submit">
                    <FaSignInAlt  /> Log In
                </button>
        </form>
    </div>
  );
};