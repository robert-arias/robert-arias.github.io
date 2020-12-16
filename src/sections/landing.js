import LandingSVG from '../assets/landing.svg';
import ArrowSVG from '../assets/arrow.svg';
import { MainButton } from '../components/buttons/buttons';

export function Landing() {
    return (
        <section className='landing' id='#home'>
            <div className='landing-imgWrapper'>
                <img src={LandingSVG} className='landing__img' alt='Landing image' />
            </div>
            <Title />
            <p className='landing__description'>
                Hi 👋! Welcome to my portfolio. I’m Robert Arias, a Costa Rican based software developer. Down below, you will find more about my credentials; general information about me if you’re interested. Thanks for checking it out.
            </p>
            <div className='landing-btnWrapper'>
                <MainButton link_to="#about" title="See more" img={ArrowSVG}/>
            </div>
        </section>
    );
}

function Title() {
    return (
        <div className='landing-titleWrapper'>
            <h1 className='landing__title'>Robert Arias</h1>
            <h2 className='landing__subtitle'>Software Developer</h2>
        </div>
    );
}