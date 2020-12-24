import { Link } from 'react-scroll';

export function MainButton({ link_to, title, img = null }) {
    return (
        <Link to={link_to} className={`btn ${img ? `btn--main-icon` : `btn--main`}`} smooth={true} duration={500} >
            <span>{title}</span>
            {img ? <img className='btn__icon' src={img} alt={title} /> : null}
        </Link>
    );
}

export function SecondaryButton({ link_to, title, isTarget = null }) {
    return (
        <a href={link_to} className={'btn btn--secondary'} target={isTarget} >{title}</a>
    );
}

export function FormButton({ buttonName }) {
    return (
        <button className='btn btn--main btn--formBtn'>{buttonName}</button>
    );
}