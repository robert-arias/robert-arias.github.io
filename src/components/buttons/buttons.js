export function MainButton({ link_to, title, img }) {
  return (
    <a
      href={link_to}
      className={`btn ${img ? `btn--main-img` : `btn--main`}`}
      title={title}
    >
      <span>{title}</span>
      {img ? <img className="btn__img" src={img} alt="" /> : null}
    </a>
  );
}