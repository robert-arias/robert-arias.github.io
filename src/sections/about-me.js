import { ArticleTitles } from '../components/titles/titles';
import { MainButton, SecondaryButton } from '../components/buttons/buttons';
import CV from '../cv/robert-cv.pdf';

export default function AboutMe() {
    const ProfItems = [
        {
            title: 'Fullname',
            value: 'Robert Alonso Arias Castro'
        },
        {
            title: 'Birth date',
            value: 'July 07, 1999'
        },
        {
            title: 'Major',
            value: 'Bachelor\'s Degree in Informática Empresarial'
        },
        {
            title: 'Github',
            value: 'www.github.com/robert-arias'
        },
        {
            title: 'Email',
            value: 'robertariascastro@outlook.com'
        }
    ];
    const SkItems = [
        {
            language: 'C#'
        },
        {
            language: 'JavaScript'
        },
        {
            language: 'Java'
        },
        {
            language: 'PHP'
        },
        {
            language: 'Python'
        }
    ];

    return (
        <article className='about' id='about'>
            <ArticleTitles sectionTitle='About me' mainTitle='Let me introduce myself.' />
            <p className='paragraph'
                >Hi! I'm Robert Arias, a software developer. I recently finished my major at Universidad de Costa Rica, Sede del Pacífico. I was finishing my Bachelor's degree in Informática Empresarial. I consider myself to be a responsible, dynamic, and proactive person. I adapt with ease to any situation, and I am great at teamwork.
            </p>
            <section className='about-info'>
                <div className='about-profile'>
                    <div className='about-profile-titleWrapper'>
                        <h3 className='title title--sub'>Profile</h3>
                    </div>
                    <p className='paragraph'>
                        Software developer graduated from Universidad de Costa Rica, Sede del Pacífico. Majored in Informática Empresarial.
                    </p>
                    <ul className='about-profile__list'>
                        <ProfileItems items={ProfItems}/>
                    </ul>
                </div>
                <div className='about-skills'>
                    <div className='about-profile-titleWrapper'>
                        <h3 className='title title--sub'>Skills</h3>
                    </div>
                    <p className='paragraph'>
                        Throughout my major, as well as on a personal level, I have learned the necessary skills for creating software. Some of them are:
                    </p>
                    <ul className='about-skills__list'>
                        <SkillItems items={SkItems} />
                    </ul>
                </div>
            </section>
            <div class='about-buttons'>
                <MainButton link_to='#contact' title='Hire me'/>
                <SecondaryButton link_to={CV} title='Download CV' isTarget='__blank' />
            </div>
        </article>
    );
}

function SkillItems({ items }) {
    return (
        <>
            {
                items.map((item, index) => {
                    return (
                        <li key={index.toString()} className='about-skills__item'>
                            <i className='about-skills__icon fas fa-check-circle'></i>
                            <b className='about-skills__strong'>{item.language}</b>
                        </li>
                    )
                })
            }
        </>
    );
}

function ProfileItems({ items }) {
    return (
        <>
            {
                items.map((item, index) => {
                    return (
                        <li key={index.toString()} className='about-profile__item'>
                            <b className='about-profile__strong'>{item.title}:</b>
                            <span className='about-profile__span'>{item.value}</span>
                        </li>
                    )
                })
            }
        </>
    );
}