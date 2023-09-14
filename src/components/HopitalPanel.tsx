'use client'
import { useReducer } from "react"
import ProductCard from "./ProductCard"
export default function HospitalPanel() {
    const  compareRedure = (compareList:Set<String>, action:{type:String, hopitalName:String}) => {
        switch(action.type){
            case 'add' : {
                return new Set(compareList.add(action.hopitalName))
            }
            case 'remove' : {
                compareList.delete(action.hopitalName)
                return new Set(compareList)
            }
            default: return compareList
        }
    }
    const [ compareList, dispatchCompare ] = useReducer(compareRedure, new Set<String>())
    return (
        <div>
            <div style={{ margin:"20px", display:"flex", flexDirection:"row", flexWrap:"wrap", justifyContent:"space-around", alignContent:"space-around"}} >
                <ProductCard hospitalName='Chulalongkorn Hospital' imgSrc='/img/chula.jpg' 
                onCompare={ (hopital:string)=>dispatchCompare({type:'add', hopitalName:hopital}) }/>
                <ProductCard hospitalName='Rajavithi Hospital' imgSrc='/img/rajavithi.jpg'
                onCompare={ (hopital:string)=>dispatchCompare({type:'add', hopitalName:hopital}) }/>
                <ProductCard hospitalName='Thammasat University Hospital' imgSrc='/img/thammasat.jpg'
                onCompare={ (hopital:string)=>dispatchCompare({type:'add', hopitalName:hopital}) }/>
            </div>
            <div className="w-full text-x1 font-medium">
                Compare List: { compareList.size}
            </div>
            { Array.from(compareList).map( (hopital)=><div key='{hopital}' 
                onClick={ ()=> dispatchCompare({type:'remove', hopitalName:hopital})}>
                    {hopital}
                </div>)
            }
        </div>
    )
}