import { ArticleTitles } from '../components/titles/titles';
import { Timeline } from '../components/timeline/timeline';

export default function Resume() {
    const educationItems = [
        {
            'title': 'Universidad de Costa Rica',
            'timeframe': '2017 - 2020',
            'subtitle': 'Bachelor\'s Degree in Informática Empresarial',
            'description': <>After obtaining my high school diploma, I enrolled at Universidad de Costa Rica, Sede del Pacífico to study Bachelor's Degree in Informática Empresarial. I complete the whole major in 4 years, finishing it in December 2020. For more information about this major, click <a href='https://www.srp.ucr.ac.cr/?q=docencia/bachillerato-en-inform%C3%A1tica-empresarial' target='__blank' className='item__link'>here</a>.</>
        },
        {
            'title': 'Benemérito Liceo José Martí',
            'timeframe': '2012 - 2016',
            'subtitle': 'High School Diploma',
            'description': 'After spending five years in secondary school, I get a high school diploma that allows me to enroll at any university in Costa Rica.'
        }
    ];
    const experienceItems = [
        {
            'title': 'Knogin S.A.',
            'timeframe': 'July 2020 - December 2020',
            'subtitle': 'Internship as Software Developer',
            'description': <>As part of my degree, I have to acquire experience through an internship. I have the opportunity to work as an intern at <a href='https://www.knogin.com/' target='__blank' className='item__link'>Knogin</a>, where I participated in multiple projects as a full-stack software developer.</>
        }
    ]

    return (
        <div className='wrapper'>
            <article className='resume' id='resume'>
                <ArticleTitles sectionTitle='Resumé' mainTitle='More of my credentials.' />
                <p className='paragraph'>
                    To get a better idea about me, in this section, relevant information about my education, experience, and skills are detailed.
                </p>
                <Timeline title='Education' iconClass='fa fa-graduation-cap' timelineItems={educationItems} />
                <Timeline title='Experience' iconClass='fas fa-business-time' timelineItems={experienceItems} />
                <section className='resume-skills'>
                    <h3 className='resume-skills__title'>Skills</h3>
                    <div className='resume-skills-information-container'>
                        <div className='resume-skills-information resume-skills-information--1'>
                            <h4 className='resume-skills-information__title'>Programming languages</h4>
                            <ul className='resume-skills-information__list'>
                                <li className='resume-skills-information__item'>
                                    <i className='resume-skills-information__icon fas fa-check-circle'></i>Java
                                    </li>
                                <li className='resume-skills-information__item'>
                                    <i className='resume-skills-information__icon fas fa-check-circle'></i>C#
                                    </li>
                                <li className='resume-skills-information__item'>
                                    <i className='resume-skills-information__icon fas fa-check-circle'></i>JavaScript
                                    </li>
                                <li className='resume-skills-information__item'>
                                    <i className='resume-skills-information__icon fas fa-check-circle'></i>Python
                                    </li>
                            </ul>
                        </div>
                        <div className='resume-skills-information resume-skills-information--2'>
                            <h4 className='resume-skills-information__title'>Frameworks</h4>
                            <ul className='resume-skills-information__list'>
                                <li className='resume-skills-information__item'>
                                    <i className='resume-skills-information__icon fas fa-check-circle'></i>Express
                                    </li>
                                <li className='resume-skills-information__item'>
                                    <i className='resume-skills-information__icon fas fa-check-circle'></i>.NET
                                    </li>
                                <li className='resume-skills-information__item'>
                                    <i className='resume-skills-information__icon fas fa-check-circle'></i>ASP.NET
                                    </li>
                            </ul>
                        </div>
                        <div className='resume-skills-information resume-skills-information--3'>
                            <h4 className='resume-skills-information__title'>DB Managament Systems</h4>
                            <ul className='resume-skills-information__list'>
                                <li className='resume-skills-information__item'>
                                    <i className='resume-skills-information__icon fas fa-check-circle'></i>MySQL
                                    </li>
                                <li className='resume-skills-information__item'>
                                    <i className='resume-skills-information__icon fas fa-check-circle'></i>Oracle SQL Developer
                                    </li>
                                <li className='resume-skills-information__item'>
                                    <i className='resume-skills-information__icon fas fa-check-circle'></i>Microsoft SQL Server
                                    </li>
                            </ul>
                        </div>
                        <div className='resume-skills-information resume-skills-information--4'>
                            <h4 className='resume-skills-information__title'>Query languages</h4>
                            <ul className='resume-skills-information__list'>
                                <li className='resume-skills-information__item'>
                                    <i className='resume-skills-information__icon fas fa-check-circle'></i>SQL
                                    </li>
                                <li className='resume-skills-information__item'>
                                    <i className='resume-skills-information__icon fas fa-check-circle'></i>PL/SQL
                                    </li>
                                <li className='resume-skills-information__item'>
                                    <i className='resume-skills-information__icon fas fa-check-circle'></i>Transact-SQL
                                    </li>
                            </ul>
                        </div>
                        <div className='resume-skills-information resume-skills-information--5'>
                            <h4 className='resume-skills-information__title'>Web development</h4>
                            <ul className='resume-skills-information__list'>
                                <li className='resume-skills-information__item'>
                                    <i className='resume-skills-information__icon fas fa-check-circle'></i>HTML
                                    </li>
                                <li className='resume-skills-information__item'>
                                    <i className='resume-skills-information__icon fas fa-check-circle'></i>CSS
                                    </li>
                                <li className='resume-skills-information__item'>
                                    <i className='resume-skills-information__icon fas fa-check-circle'></i>SASS
                                    </li>
                            </ul>
                        </div>
                        <div className='resume-skills-information resume-skills-information--6'>
                            <h4 className='resume-skills-information__title'>Software and tools</h4>
                            <ul className='resume-skills-information__list'>
                                <li className='resume-skills-information__item'>
                                    <i className='resume-skills-information__icon fas fa-check-circle'></i>Git
                                    </li>
                                <li className='resume-skills-information__item'>
                                    <i className='resume-skills-information__icon fas fa-check-circle'></i>MS Office
                                    </li>
                                <li className='resume-skills-information__item'>
                                    <i className='resume-skills-information__icon fas fa-check-circle'></i>Latex
                                    </li>
                            </ul>
                        </div>
                    </div>
                </section>
            </article>
        </div>
    );
}