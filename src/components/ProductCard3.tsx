import styles from './productcard.module.css'
import Image  from 'next/image';

export default function ProductCard3() {
    return (
        <div className={styles.card}>
            <div className={styles.cardimg} > 
            <Image src={'/img/card3.jpg'}
            alt='Vaccines Picture'
            fill={true}
            objectFit='cover'
            />
            </div>
            <div className={styles.cardtext} >
                Vaccine 3
            </div>
        </div>

    );
}