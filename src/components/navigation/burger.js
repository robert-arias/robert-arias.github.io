/*
* Original burger. Pure CSS
* To make it work, the scss import must be uncommented from the main.scss file.
*/
export function DefaultBurger() {
    return (
        <div className="default-burger">
            <div className="default-burger__line"></div>
        </div>
    );
}

/*
* Burger with SVG
*/
export function Burger(props) {
    return (
        <button className='burger' type={props.type} onClick={props.onClick}>
            <svg className="burger__img" width="200" height="140" viewBox="0 0 200 140" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect y="61.6522" width="200" height="17.3913" rx="8.69565" fill="#4169E1" />
                <rect y="122.522" width="100" height="17.3913" rx="8.69565" fill="#4169E1" />
                <rect y="0.782623" width="200" height="17.3913" rx="8.69565" fill="#4169E1" />
            </svg>
        </button>
    );
}