export function MainButton({ link_to, title, img = null }) {
    return (
        <a href={link_to} className={`btn ${img ? `btn--main-icon` : `btn--main`}`} title={title}>
            <span>{title}</span>
            {img ? <img className='btn__icon' src={img} alt={title} /> : null}
        </a>
    );
}

export function SecondaryButton({ link_to, title, isTarget = null }) {
    return (
        <a href={link_to} className={'btn btn--secondary'} target={isTarget} >{title}</a>
    );
}