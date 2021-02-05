import { Timeline } from '../components/timeline/timeline';
import { useTranslation } from 'react-i18next';

export default function Resume() {
    const { t } = useTranslation('resume');
    
    const educationItems = [
        {
            'title': t('ucr'),
            'timeframe': t('ucrTime'),
            'subtitle': t('ucrMajor'),
            'description': <>{t('ucrDescription')} <a href='https://www.srp.ucr.ac.cr/?q=docencia/bachillerato-en-inform%C3%A1tica-empresarial' target='__blank' className='item__link'>{t('here')}</a>.</>
        },
        {
            'title': t('ljm'),
            'timeframe': t('ljmTime'),
            'subtitle': t('ljmMajor'),
            'description': t('ljmDescription')
        },
    ];
    const experienceItems = [
        {
            'title': t('kg'),
            'timeframe': t('kgTime'),
            'subtitle': t('kgExperience'),
            'description': <> {t('kgDescription1')} <a href='https://www.knogin.com/' target='__blank' className='item__link'>{t('knogin')}</a>, {t('kgDescription2')}</>
        },
        {
            'title': t('kg'),
            'timeframe': t('kgTime2'),
            'subtitle': t('kgExperience2'),
            'description': t('kgDescription02')
        }
    ]
    const skillItems = [
        {
            'skill': t('pl'),
            'items': ['C#', 'JavaScript', 'Java', 'PHP', 'Python']
        },
        {
            'skill': t('fw'),
            'items': ['React.js', 'ASP.NET Core', 'Node.js', 'Express']
        },
        {
            'skill': t('db'),
            'items': ['MySQL', 'Oracle SQL Developer', 'Microsoft SQL Server']
        },
        {
            'skill': t('ql'),
            'items': ['SQL', 'PL/SQL', 'Transact-SQL']
        },
        {
            'skill': t('wd'),
            'items': ['HTML', 'CSS', 'SASS', 'Bootstrap', 'Tailwind CSS']
        },
        {
            'skill': t('sft'),
            'items': ['Git', 'MS Office', 'Latex']
        }
    ];

    return (
        <div className='wrapper'>
            <article className='resume' id='resume'>
                <h3 className='title title--mini'>{t('sectionName')}</h3>
                <h2 className='title title--big'>{t('title')}</h2>
                <p className='paragraph'>{t('description')}</p>
                <Timeline title={t('educationTitle')} iconClass='fa fa-graduation-cap' timelineItems={educationItems} />
                <Timeline title={t('experienceTitle')} iconClass='fas fa-business-time' timelineItems={experienceItems} />
                <section className='resume-skillsSection'>
                    <div className='wrapper--title wrapper--title--center'>
                        <h3 className='title title--sub'>{t('skillsTitle')}</h3>
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
                skillItems.map((skill, index) => {
                    return (
                        <div className='resume-skills' key={index.toString()}>
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