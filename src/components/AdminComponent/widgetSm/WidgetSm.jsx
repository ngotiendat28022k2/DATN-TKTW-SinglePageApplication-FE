import styles from "./widgetSm.module.css";
import { Visibility } from "@mui/icons-material";

export default function WidgetSm() {
  return (
    <div className={styles.widgetSm}>
      <span className={styles.widgetSmTitle}>New Join Members</span>
      <ul className={styles.widgetSmList}>
        <li className={styles.widgetSmListItem}>
          <img
            src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className={styles.widgetSmImg}
          />
          <div className={styles.widgetSmUser}>
            <span className={styles.widgetSmUsername}>Anna Keller</span>
            <span className={styles.widgetSmUserTitle}>Software Engineer</span>
          </div>
          <button className={styles.widgetSmButton}>
            <Visibility className={styles.widgetSmIcon} />
            Display
          </button>
        </li>
        <li className={styles.widgetSmListItem}>
          <img
            src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className={styles.widgetSmImg}
          />
          <div className={styles.widgetSmUser}>
            <span className={styles.widgetSmUsername}>Anna Keller</span>
            <span className={styles.widgetSmUserTitle}>Software Engineer</span>
          </div>
          <button className={styles.widgetSmButton}>
            <Visibility className={styles.widgetSmIcon} />
            Display
          </button>
        </li>
        <li className={styles.widgetSmListItem}>
          <img
            src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className={styles.widgetSmImg}
          />
          <div className={styles.widgetSmUser}>
            <span className={styles.widgetSmUsername}>Anna Keller</span>
            <span className={styles.widgetSmUserTitle}>Software Engineer</span>
          </div>
          <button className={styles.widgetSmButton}>
            <Visibility className={styles.widgetSmIcon} />
            Display
          </button>
        </li>
        <li className={styles.widgetSmListItem}>
          <img
            src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className={styles.widgetSmImg}
          />
          <div className={styles.widgetSmUser}>
            <span className={styles.widgetSmUsername}>Anna Keller</span>
            <span className={styles.widgetSmUserTitle}>Software Engineer</span>
          </div>
          <button className={styles.widgetSmButton}>
            <Visibility className={styles.widgetSmIcon} />
            Display
          </button>
        </li>
        <li className={styles.widgetSmListItem}>
          <img
            src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className={styles.widgetSmImg}
          />
          <div className={styles.widgetSmUser}>
            <span className={styles.widgetSmUsername}>Anna Keller</span>
            <span className={styles.widgetSmUserTitle}>Software Engineer</span>
          </div>
          <button className={styles.widgetSmButton}>
            <Visibility className={styles.widgetSmIcon} />
            Display
          </button>
        </li>
      </ul>
    </div>
  );
}
