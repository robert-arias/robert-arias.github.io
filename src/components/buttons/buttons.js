export function MainButton({ link_to, title }) {
    return (
        <a href={link_to} className="btn btn--main" title={title}>{title}</a>
    );
}