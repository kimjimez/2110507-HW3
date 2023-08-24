import Image from 'next/image'
import Banner from '@/components/Banner'
import ProductCard from '@/components/ProductCard'
import ProductCard2 from '@/components/ProductCard2'
import ProductCard3 from '@/components/ProductCard3'
import ProductCard4 from '@/components/ProductCard4'
import styles from './page.module.css'

export default function Home() {
  return (
    <main>
      <Banner/>
      <div style={{ margin:"20px", display:"flex", flexDirection:"row", flexWrap:"wrap", justifyContent:"space-around", alignContent:"space-around"}} >
        <ProductCard/>
        <ProductCard2/>
        <ProductCard3/>
        <ProductCard4/>
      </div>
    </main>
  )
}
