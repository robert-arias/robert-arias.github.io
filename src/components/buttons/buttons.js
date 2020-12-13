export function MainButton({ link_to, title, img }) {
    return (
        <a href={link_to} className={`btn ${img ? `btn--main-icon` : `btn--main`}`} title={title}>
            <span>{title}</span>
            {img ? <img className='btn__icon' src={img} alt='' /> : null}
        </a>
    );
}

export function SecondaryButton({ link_to, title }) {
    return (
        <a href={link_to} className={'btn btn--secondary'}>{title}</a>
    );
}