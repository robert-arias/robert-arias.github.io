import { Gallery } from '../components/gallery/gallery';
import NailGarden from '../assets/nail-garden.jpg';
import MultiCare from '../assets/sistema-multicare.jpg';
import Rosales from '../assets/farmacia-rosales.jpg';
import ConnectFour from '../assets/connect-four.jpg';
import { useTranslation } from 'react-i18next';

export default function Projects() {
    const { t } = useTranslation('projects');

    const galleryItems = [
        {
            'link': 'https://github.com/robert-arias/NailGarden',
            'title': t('ng'),
            'subtitle': t('ngDescription'),
            'img': NailGarden
        },
        {
            'link': 'https://github.com/robert-arias/MultiCare',
            'title': t('mc'),
            'subtitle': t('mcDescription'),
            'img': MultiCare
        },
        {
            'link': 'https://github.com/robert-arias/FarmaciaRosales',
            'title': t('fr'),
            'subtitle': t('frDescription'),
            'img': Rosales
        },
        {
            'link': 'https://github.com/robert-arias/ConnectFour',
            'title': t('cf'),
            'subtitle': t('cfDescription'),
            'img': ConnectFour
        },
    ];
    return (
        <div className='wrapper'>
            <article className='projects' id='projects'>
                <h3 className='title title--mini'>{t('sectionName')}</h3>
                <h2 className='title title--big'>{t('title')}</h2>
                <p className='paragraph'>
                {t('description1')} <a href='https://github.com/robert-arias/' className='item__link' target='__blank'>{t('gh')}</a> {t('description2')}
                </p>
                <Gallery galleryItems={galleryItems} />
            </article>
        </div>
    );
}