export function Gallery({ galleryItems }) {
    return (
        <div className='gallery'>
            {
                galleryItems.map(item => {
                    return (
                        <div className='gallery__card'>
                            <a href={item.link} target='__blank' className='card__link--img' >
                                <div className='card__img'>
                                    <img src={item.img} alt={item.title} />
                                </div>
                            </a>
                            <div className='card__info'>
                                <a href={item.link} target='__blank' className='card__link' >
                                    <h3 className='card__title'>{item.title}</h3>
                                </a>
                                <p className='card__subtitle'>{item.subtitle}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
}