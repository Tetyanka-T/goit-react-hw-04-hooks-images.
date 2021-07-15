import s from 'components/Button/Button.module.css';

export default function Button({ onClick }) {
  const onloadMore = e => onClick();
  return (
    <button
      type="button"
      data-action="load-more"
      className={s.Button}
      onClick={onloadMore}
    >
      Load more
    </button>
  );
}
