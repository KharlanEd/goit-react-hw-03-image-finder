import css from "components/styles.module.css"

export const Button = ({ onClick }) => {
  //  window.scrollTo({
  //    top: document.documentElement.scrollHeight,
  //    behavior: 'smooth',
  //  });
  
  return (
    <button
      
      tupe="button"
      className={css.Button}
      onClick={onClick}
    >
      Load more
    </button>
  );
};