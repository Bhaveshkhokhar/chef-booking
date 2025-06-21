import styles from "./Container.module.css";
const Container = ({ children }) => {
  return (
    <>
      <center>
        <div class={`${styles["container"]}`}>{children}</div>
      </center>
    </>
  );
};
export default Container;
