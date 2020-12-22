export default function Projects() {
    return (
        <div className='wrapper'>
            <article className='projects' id='projects'>
                <h3 className='title title--mini'>Projects</h3>
                <h2 className='title title--big'>Check out some of my works.</h2>
                <p className='paragraph'>
                    These are some of the most memorable projects I've made, mostly in my time in college. Check them out.
                </p>
                <div className='projects-gallery'>
                    <a href='https://github.com/robert-arias/NailGarden' id='NailGarden' target='__blank' className='projects-gallery__image'>
                        <h3 className='projects-gallery__title'>Nail Garden</h3>
                        <p className='projects-gallery__paragraph'>Multimedios</p>
                    </a>
                    <a href='https://github.com/robert-arias/MultiCare' id='MultiCare' target='__blank' className='projects-gallery__image'>
                        <h3 className='projects-gallery__title'>Sistema MultiCare</h3>
                        <p className='projects-gallery__paragraph'>Análisis y Diseño de Sistemas</p>
                    </a>
                    <a href='https://github.com/robert-arias/FarmaciaRosales' id='Rosales' target='__blank' className='projects-gallery__image'>
                        <h3 className='projects-gallery__title'>Farmacia Rosales</h3>
                        <p className='projects-gallery__paragraph'>Administración de Base de Datos y Lenguajes Comerciales</p>
                    </a>
                    <a href='https://github.com/robert-arias/ConnectFour' id='Connect' target='__blank' className='projects-gallery__image'>
                        <h3 className='projects-gallery__title'>Connect Four</h3>
                        <p className='projects-gallery__paragraph'>Hobby</p>
                    </a>
                </div>
            </article>
        </div>
    );
}