import LandingSVG from '../assets/landing.svg';
import ArrowSVG from '../assets/arrow.svg';
import { MainButton } from '../components/buttons/buttons';
import { useTranslation } from 'react-i18next';

export default function Landing() {
	const { t } = useTranslation('landing');
    
    return (
        <section className='landing' id='home'>
            <div className='landing-wrapper'>
                <div className='landing-imgWrapper'>
                    <img src={LandingSVG} className='landing__img' alt='Landing' />
                </div>
                <div className='landing-infoWrapper'>
                    <div className='landing-titleWrapper'>
                        <h1 className='landing__title'>Robert Arias</h1>
                        <h2 className='landing__subtitle'>{t('occupation')}</h2>
                    </div>
                    <p className='landing__description'>{t('description')}</p>
                    <div className='landing-btnWrapper'>
                        <MainButton link_to='about' title={t('btnMore')} img={ArrowSVG} />
                    </div>
                </div>
            </div>
        </section>
    );
}