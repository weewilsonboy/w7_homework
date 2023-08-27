const Header = ({setCatFacts, catFacts}) =>{
    const setEnglish = ()=>{
        fetch("https://meowfacts.herokuapp.com/?lang=eng")
        .then((res)=>res.json())
        .then((data)=>setCatFacts([data.data, ...catFacts]))
    }
    const setCzech = ()=>{
        fetch("https://meowfacts.herokuapp.com/?lang=ces")
        .then((res)=>res.json())
        .then((data)=>setCatFacts([data.data, ...catFacts]))
    }
    const setGerman = ()=>{
        fetch("https://meowfacts.herokuapp.com/?lang=ger")
        .then((res)=>res.json())
        .then((data)=>setCatFacts([data.data, ...catFacts]))
    }
    const setSpanish = ()=>{
        fetch("https://meowfacts.herokuapp.com/?lang=esp")
        .then((res)=>res.json())
        .then((data)=>setCatFacts([data.data, ...catFacts]))
    }
    const setRussian = ()=>{
        fetch("https://meowfacts.herokuapp.com/?lang=rus")
        .then((res)=>res.json())
        .then((data)=>setCatFacts([data.data, ...catFacts]))
    }
    const setUkrainian = ()=>{
        fetch("https://meowfacts.herokuapp.com/?lang=ukr")
        .then((res)=>res.json())
        .then((data)=>setCatFacts([data.data, ...catFacts]))
    }
    const setPortuguese = ()=>{
        fetch("https://meowfacts.herokuapp.com/?lang=por")
        .then((res)=>res.json())
        .then((data)=>setCatFacts([data.data, ...catFacts]))
    }
    const setFilipino = ()=>{
        fetch("https://meowfacts.herokuapp.com/?lang=fil")
        .then((res)=>res.json())
        .then((data)=>setCatFacts([data.data, ...catFacts]))
    }
    const setUrdu = ()=>{
        fetch("https://meowfacts.herokuapp.com/?lang=urd")
        .then((res)=>res.json())
        .then((data)=>setCatFacts([data.data, ...catFacts]))
    }
    const setItalian = ()=>{
        fetch("https://meowfacts.herokuapp.com/?lang=ita")
        .then((res)=>res.json())
        .then((data)=>setCatFacts([data.data, ...catFacts]))
    }
    const setChinese = ()=>{
        fetch("https://meowfacts.herokuapp.com/?lang=zho")
        .then((res)=>res.json())
        .then((data)=>setCatFacts([data.data, ...catFacts]))
    }
    const setKorean = ()=>{
        fetch("https://meowfacts.herokuapp.com/?lang=kor")
        .then((res)=>res.json())
        .then((data)=>setCatFacts([data.data, ...catFacts]))
    }
    const reset = ()=>{
        setCatFacts([])
    }
    return(
        <><nav><h1>Select Another Language For A Single Fact In That Language</h1>
        <span className="navSpan"><button onClick={setEnglish}>English</button>
        <button onClick={setCzech}>Czech</button>
        <button onClick={setGerman}>German</button>
        <button onClick={setSpanish}>Spanish</button>
        <button onClick={setRussian}>Russian</button>
        <button onClick={setUkrainian}>Ukrainian</button>
        <button onClick={setPortuguese}>Portuguese</button>
        <button onClick={setFilipino}>Filipino</button>
        <button onClick={setUrdu}>Urdu</button>
        <button onClick={setItalian}>Italian</button>
        <button onClick={setChinese}>Chinese</button>
        <button onClick={setKorean}>Korean</button>
        <button onClick={reset}>New Facts</button>
        
        
        
        
        
        </span>
        </nav></>
    )
}
export default Header