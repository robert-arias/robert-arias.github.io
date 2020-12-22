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
    const skillItems = [
        {
            'skill': 'Programming languages',
            'items': ['C#', 'JavaScript', 'Java', 'PHP', 'Python']
        },
        {
            'skill': 'Frameworks',
            'items': ['React.js', 'ASP.NET Core', 'Node.js', 'Express']
        },
        {
            'skill': 'DB Management Systems',
            'items': ['MySQL', 'Oracle SQL Developer', 'Microsoft SQL Server']
        },
        {
            'skill': 'Query languages',
            'items': ['SQL', 'PL/SQL', 'Transact-SQL']
        },
        {
            'skill': 'Web development',
            'items': ['HTML', 'CSS', 'SASS', 'Bootstrap', 'Tailwind CSS']
        },
        {
            'skill': 'Software and tools',
            'items': ['Git', 'MS Office', 'Latex']
        }
    ];

    return (
        <div className='wrapper'>
            <article className='resume' id='resume'>
                <ArticleTitles sectionTitle='Resumé' mainTitle='More of my credentials.' />
                <p className='paragraph'>
                    To get a better idea about me, in this section, relevant information about my education, experience, and skills are detailed.
                </p>
                <Timeline title='Education' iconClass='fa fa-graduation-cap' timelineItems={educationItems} />
                <Timeline title='Experience' iconClass='fas fa-business-time' timelineItems={experienceItems} />
                <section className='resume-skillsSection'>
                    <div className='wrapper--title wrapper--title--center'>
                        <h3 className='title title--sub'>Skills</h3>
                    </div>
                    <div className='resume-skillsWrapper'>
                        <SkillSet skillItems={skillItems} />
                    </div>
                </section>
            </article>
        </div>
    );
}

function SkillSet({ skillItems}) {
    return <>
            {
                skillItems.map(skill => {
                    return (
                        <div className='resume-skills'>
                            <h4 className='skills__title'>{skill.skill}</h4>
                            <ul className='skills__list'>
                                {
                                    skill.items.map((item, index) => {
                                        return (
                                            <li key={index.toString()} className='skills__item'>
                                                <i className='skills__icon fas fa-check-circle'></i>{item}
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    )
                })
            }
        </>;
}