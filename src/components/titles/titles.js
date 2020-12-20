export function ArticleTitles({ sectionTitle, mainTitle }) {
    return (
        <>
            <h3 className='title title--mini'>{sectionTitle}</h3>
            <h2 className='title title--big'>{mainTitle}</h2>
        </>
    );
}