import styles from './banner.module.css'
import Image from 'next/image';
export default function Banner () {
    return (
        <div className={styles.banner}>
            <Image src={'/img/cover.avif'}
            alt='cover'
            fill={true}
            priority
            objectFit='cover'
            />
            <div className={styles.bannerText}>
                <h1 className='text-4xl font-medium '>Vaccine service center</h1>
                <h3 className='text-xl font-serif'>Vaccine service center</h3>
            </div>
        </div>
    );
}