'use client'
import { useState } from 'react';
import styles from './banner.module.css'
import Image from 'next/image';
export default function Banner () {

    const covers = ['/img/cover.avif', '/img/cover2.avif', '/img/cover3.avif', '/img/cover4.avif']
    const [index, setIndex] = useState(0)
    

    return (
        <div className={styles.banner} onClick={ ()=> {setIndex(index+1)}}>
            <Image src={covers[index%4]}
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