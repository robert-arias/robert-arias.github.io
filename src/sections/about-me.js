import { MainButton, SecondaryButton } from '../components/buttons/buttons';
import CVen from '../cv/robert-cv-en.pdf';
import CVes from '../cv/robert-cv-es.pdf';
import { useTranslation } from 'react-i18next';

export default function AboutMe() {
	const { t, i18n } = useTranslation('about');

    const ProfItems = [
        {
            title: t('fullNameTitle'),
            value: 'Robert Alonso Arias Castro'
        },
        {
            title: t('birthDateTitle'),
            value: t('birthDateValue')
        },
        {
            title: t('majorTitle'),
            value: t('majorValue')
        },
        {
            title: t('githubTitle'),
            value: 'www.github.com/robert-arias'
        },
        {
            title: t('emailTitle'),
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
        <div className='wrapper'>
            <article className='about' id='about'>
                <h3 className='title title--mini'>{t('sectionName')}</h3>
                <h2 className='title title--big'>{t('title')}</h2>
                <p className='paragraph'>{t('description')}</p>
                <section className='about-info'>
                    <div className='about-profile'>
                        <div className='wrapper--title'>
                            <h3 className='title title--sub'>{t('profileTitle')}</h3>
                        </div>
                        <p className='paragraph'>{t('profileDescription')}</p>
                        <ul className='about-profile__list'>
                            <ProfileItems items={ProfItems} />
                        </ul>
                    </div>
                    <div className='about-skills'>
                        <div className='wrapper--title'>
                            <h3 className='title title--sub'>{t('skillsTitle')}</h3>
                        </div>
                        <p className='paragraph'>{t('skillsDescription')}</p>
                        <ul className='about-skills__list'>
                            <SkillItems items={SkItems} />
                        </ul>
                    </div>
                </section>
                <div className='about-buttons'>
                    <MainButton link_to='contact' title={t('btnHire')} />
                    <SecondaryButton link_to={ i18n.language.startsWith('es') ? CVes : CVen} title={t('btnCV')} isTarget='__blank' />
                </div>
            </article>
        </div>
    );
}

function SkillItems({ items }) {
    return <>
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
    </>;
}

function ProfileItems({ items }) {
    return <>
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
    </>;
}