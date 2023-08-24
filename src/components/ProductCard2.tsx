import styles from './productcard.module.css'
import Image  from 'next/image';

export default function ProductCard2() {
    return (
        <div className={styles.card}>
            <div className={styles.cardimg} > 
            <Image src={'/img/card2.jpg'}
            alt='Vaccine Picture'
            fill={true}
            objectFit='cover'
            />
            </div>
            <div className={styles.cardtext} >
                Vaccine 2
            </div>
        </div>

    );
}