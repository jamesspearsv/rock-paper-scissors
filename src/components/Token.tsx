import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Token.module.css';
import {
  faHandFist,
  faHand,
  faHandScissors,
} from '@fortawesome/free-solid-svg-icons';

type TokenProps = {
  token: 'rock' | 'paper' | 'scissors';
};

export default function Token({ token }: TokenProps) {
  const icon = {
    rock: faHandFist,
    paper: faHand,
    scissors: faHandScissors,
  };

  const tokenBackground = {
    rock: 'linear-gradient(hsl(349, 71%, 52%), hsl(349, 70%, 56%))',
    paper: 'linear-gradient(hsl(230, 89%, 62%), hsl(230, 89%, 65%))',
    scissors: 'linear-gradient(hsl(39, 89%, 49%), hsl(40, 84%, 53%))',
  };

  return (
    <div
      className={styles.tokenContainer}
      style={{ background: tokenBackground[token] }}
    >
      <div className={styles.tokenImage}>
        {/* todo: replace with challenge svg files */}
        <FontAwesomeIcon icon={icon[token]} size="5x" />
      </div>
    </div>
  );
}
