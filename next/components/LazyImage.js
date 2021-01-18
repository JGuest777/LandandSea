import { useState, useEffect, useRef } from 'react';
import clsx from 'clsx';

export default function LazyImage({
  className,
  src,
  alt,
  lqip,
  aspectRatio = 2 / 3,
}) {
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef();
  useEffect(() => {
    if (imgRef.current && imgRef.current.complete) {
      setLoaded(true);
    }
  }, []);
  return (
    <div className={clsx('wrapper', className)}>
      <div style={{ paddingBottom: `${100 / aspectRatio}%` }} />
      <img src={lqip} aria-hidden="true" className={clsx(loaded && 'lqip')} />
      <img
        loading="lazy"
        src={src}
        alt={alt}
        ref={imgRef}
        onLoad={() => setLoaded(true)}
        className={clsx('source', loaded && 'loaded')}
      />
    </div>
  );
}
