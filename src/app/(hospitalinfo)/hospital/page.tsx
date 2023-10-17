/* import HospitalPanel from '@/components/HopitalPanel' */
import getHospitals from "@/lips/getHospitals"
import HospitalCatalog from "@/components/HospitalCatalog"
import { Suspense } from "react"
import { LinearProgress } from "@mui/material" 
export default function Hospital(){

    const hospitals = getHospitals()

    return (
        <main className="text-center p-5" >
            <h1 className="text-xl font-medium">Select Hospital</h1>
            {/* <HospitalPanel/> */}
            <Suspense fallback={<p>Loading ..... <LinearProgress/></p>}>
                <HospitalCatalog hospitalJson={hospitals} />
            </Suspense>

        </main>
    )
}