import styles from './productcard.module.css'
import Image  from 'next/image';

export default function ProductCard() {
    return (
        <div className={styles.card}>
            <div className={styles.cardimg} > 
            <Image src={'/img/card1.jpg'}
            alt='Vacine Picture'
            fill={true}
            objectFit='cover'
            />
            </div>
            <div className={styles.cardtext} >
                Vaccine 1
            </div>
        </div>

    );
}