import styles from './productcard.module.css'
import Image  from 'next/image';

export default function ProductCard( { hospitalName, imgSrc } : {hospitalName:string, imgSrc: string}) {
    return (
        <div className='w-1/5 h-[300px] rounded-lg shadow-lg'>
            <div className='w-full h-[70%] relative rounded-t-lg'  > 
            <Image src={imgSrc}
            alt='Hospital Picture'
            fill={true}
            className='object-cpver rounded-t-lg'
            />
            </div>
            <div className='w-full h-[30%] p-[10px]' >
                {hospitalName}
            </div>
        </div>

    );
}