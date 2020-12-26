export function Gallery({ galleryItems }) {
    return (
        <div className='gallery'>
            {
                galleryItems.map((item, index) => {
                    return (
                        <div className='card' key={index.toString()}>
                            <a href={item.link} target='__blank' className='card__img' >
                                <img src={item.img} alt={item.title} />
                            </a>
                            <div className='card__info'>
                                <a href={item.link} target='__blank' className='card__link' >
                                    <h3 className='card__title'>{item.title}</h3>
                                    <p className='card__subtitle'>{item.subtitle}</p>
                                </a>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
}