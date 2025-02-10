import styles from "./toggle-button.module.css";
import cn from "clsx";

export const ToggleButton = ({ isShow, toggle, children }) => {
  return (
    <button
      className={cn("btn", !isShow && styles.danger, isShow && styles.success)}
      onClick={toggle}
    >
      {children}
    </button>
  );
};
