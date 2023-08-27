import SingleFact from "./SingleFact"

const AllFacts = ({facts})=>{
    console.log(facts)
    return(<>

    <SingleFact fact={facts[0]}/>
    <SingleFact fact={facts[1]}/>
    <SingleFact fact={facts[2]}/>
    <SingleFact fact={facts[3]}/>
    <SingleFact fact={facts[4]}/>
    </>
        
    )
}
export default AllFacts
