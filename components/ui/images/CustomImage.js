import Image from 'next/image'

const CustomImage = ({
  src,
  width = '2.5rem',
  height = width,
  alt = 'Imagen',
  avoidCache,
}) => {
  let finalSrc = src ? src : '/no-image.png'

  if (avoidCache) {
    finalSrc = `${finalSrc}?updated=${avoidCache}`
  }

  return (
    <>
      <div className='image-container'>
        <Image
          src={finalSrc}
          style={{ objectFit: 'contain' }}
          fill='responsive'
          alt={alt}
        />
      </div>
      <style jsx>{`
        .image-container {
          position: relative;
          width: ${width};
          height: ${height};
          border-radius: 0.3rem;
          overflow: hidden;
          z-index: 1;
        }
      `}</style>
    </>
  )
}

export default CustomImage
