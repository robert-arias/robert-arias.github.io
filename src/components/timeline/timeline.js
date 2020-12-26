export function Timeline({ title, timelineItems, iconClass }) {
    return (
        <section className='timeline'>
            <div className='wrapper--title wrapper--title--center'>
                <h3 className='title title--sub'>{title}</h3>
            </div>
            <div className='timeline__line'>
                <TimelineItem timelineItems={timelineItems} iconClass={iconClass} />
            </div>
        </section>
    );
}

function TimelineItem({ timelineItems, iconClass }) {
    return <>
        {
            timelineItems.map((item, index) => {
                return (
                    <div className='timeline__item' key={index.toString()}>
                        <div className='item__icon'>
                            <i className={iconClass}></i>
                        </div>
                        <div className='item__header'>
                            <h4 className='item__title'>{item.title}</h4>
                            <p className='item__time'>{item.timeframe}</p>
                        </div>
                        <div className='item__content'>
                            <h5 className='item__subtitle'>{item.subtitle}</h5>
                            <p className='item__description'>{item.description}</p>
                        </div>
                    </div>
                )
            })
        }
    </>;
}