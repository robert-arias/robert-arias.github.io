import { Gallery } from '../components/gallery/gallery';
import NailGarden from '../assets/nail-garden.jpg';
import MultiCare from '../assets/sistema-multicare.jpg';
import Rosales from '../assets/farmacia-rosales.jpg';
import ConnectFour from '../assets/connect-four.jpg';

export default function Projects() {
    const galleryItems = [
        {
            'link': 'https://github.com/robert-arias/NailGarden',
            'title': 'Nail Garden',
            'subtitle': 'Multimedios',
            'img': NailGarden
        },
        {
            'link': 'https://github.com/robert-arias/MultiCare',
            'title': 'Sistema MultiCare',
            'subtitle': 'Análisis y Diseño de Sistemas',
            'img': MultiCare
        },
        {
            'link': 'https://github.com/robert-arias/FarmaciaRosales',
            'title': 'Farmacia Rosales',
            'subtitle': 'Administración de Base de Datos y Lenguajes Comerciales',
            'img': Rosales
        },
        {
            'link': 'https://github.com/robert-arias/ConnectFour',
            'title': 'Connect Four',
            'subtitle': 'Hobby',
            'img': ConnectFour
        },
    ];
    return (
        <div className='wrapper'>
            <article className='projects' id='projects'>
                <h3 className='title title--mini'>Projects</h3>
                <h2 className='title title--big'>Check out some of my work.</h2>
                <p className='paragraph'>
                    These are some of the most memorable projects I've made, mostly in my time in college. They are hosted on my <a href='https://github.com/robert-arias/' className='item__link' target='__blank'>GitHub repository</a>. Check them out.
                </p>
                <Gallery galleryItems={galleryItems} />
            </article>
        </div>
    );
}