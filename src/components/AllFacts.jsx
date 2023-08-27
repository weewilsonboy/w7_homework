import SingleFact from "./SingleFact"
const AllFacts = ({facts})=>{

    const arrayOfFacts = facts.map((fact)=><SingleFact fact={fact}/>)
    console.log(arrayOfFacts)
    return(<>

    {arrayOfFacts}
    </>
        
    )
}
export default AllFacts
