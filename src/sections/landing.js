import LandingSVG from '../assets/landing.svg';
import ArrowSVG from '../assets/arrow.svg';
import { MainButton } from '../components/buttons/buttons';

export default function Landing() {
    return (
        <section className='landing' id='home'>
            <div className='landing-wrapper'>
                <div className='landing-imgWrapper'>
                    <img src={LandingSVG} className='landing__img' alt='Landing' />
                </div>
                <div className='landing-infoWrapper'>
                    <div className='landing-titleWrapper'>
                        <h1 className='landing__title'>Robert Arias</h1>
                        <h2 className='landing__subtitle'>Software Developer</h2>
                    </div>
                    <p className='landing__description'>
                        Hi 👋! Welcome to my portfolio. I’m Robert Arias, a Costa Rican based software developer. Down below, you will find more about my credentials; general information about me if you’re interested. Thanks for checking it out.
                    </p>
                    <div className='landing-btnWrapper'>
                        <MainButton link_to='about' title='See more' img={ArrowSVG} />
                    </div>
                </div>
            </div>
        </section>
    );
}