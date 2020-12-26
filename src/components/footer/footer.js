import { useTranslation } from 'react-i18next';

export default function Footer() {
    const { t } = useTranslation('footer');

    return (
        <footer className='wrapper wrapper--footer'>
            <div className='footer'>
                <div className='footer-information'>
                    <i className='footer__icon fas fa-map-marker-alt'></i>
                    <h3 className='footer__title'>{t('wtf')}</h3>
                    <p className='footer__paragraph'>Puntarenas</p>
                    <p className='footer__paragraph'>60101 CR</p>
                </div>
                <div className='footer-information'>
                    <i className='footer__icon fas fa-envelope'></i>
                    <h3 className='footer__title'>{t('em')}</h3>
                    <p className='footer__paragraph'>robert.arias@ucr.ac.cr</p>
                    <p className='footer__paragraph'>robertariascastro@outlook.com</p>
                </div>
                <div className='footer-information'>
                    <i className='footer__icon fas fa-phone-alt'></i>
                    <h3 className='footer__title'>{t('cm')}</h3>
                    <p className='footer__paragraph'>{t('mb')}: (+506) 8320-8691</p>
                </div>
            </div>
        </footer>
    );
}