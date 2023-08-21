import styles from './Button.module.scss';
import { FC } from 'react';

interface IProps {
  text: string;
  type?: 'submit';
  onClick?: () => void;
}

const Button: FC<IProps> = ({ text, type, onClick }) => {
  return (
    <button type={type} className={styles.Button} onClick={onClick}>
      {text}
    </button>
  );
};
export default Button;
