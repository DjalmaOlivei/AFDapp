import React, {useState} from "react";
import AFN from './AFN'

export function Machine(props){
    
    let [afd, setAfd] = useState(new AFN)
    let [valor, setValor] = useState(0)
    let [a,setA] = useState(false)
    let [b,setB] = useState(false)
    let [c,setC] = useState(false)
    let [doce, setDoce] = useState('')
    let [p, setP] = useState('')
    let [est, setEst] = useState(0)
    //const input = "11528";

/*for(let i = 0; i < input.length; i++){
    //System.out.println(afn.consumir(input.charAt(i)));
    afd.consumir(input.charAt(i));
}*/
const styleOn = { background: '#ede6e6', color: '#575454' }
const styleOff = { background: '#575454', color: '#ede6e6' }
     
const restart = () =>{
    setAfd(new AFN)
    setValor(0)
    setDoce('')
    setP('')
    setEst(0)
    setA(false)
    setB(false)
    setC(false)
}

const handleC5 = () => {
    if(afd.consumir('5')<0){
        restart()
        return
    }
    if(afd.getTroco() > 5) {
        setA(true)
        if(afd.getTroco() > 6) {
            setB(true)
            if(afd.getTroco() > 7) setC(true)
        }
    }
    setValor(afd.getTroco())
    setP(afd.getPalavra())
    setEst(afd.getEstado())

}

const handleC2 = () => {
    if(afd.consumir('2')<0){
        restart()
        return
    }
    if(afd.getTroco() > 5) {
        setA(true)
        if(afd.getTroco() > 6) {
            setB(true)
            if(afd.getTroco() > 7) setC(true)
        }
    }
    setValor(afd.getTroco())
    setP(afd.getPalavra())
    setEst(afd.getEstado())
}

const handleC1 = () => {
    if(afd.consumir('1')<0){
        restart()
        return
    }
    if(afd.getTroco() > 5) {
        setA(true)
        if(afd.getTroco() > 6) {
            setB(true)
            if(afd.getTroco() > 7) setC(true)
        }
    }
    setValor(afd.getTroco())
    setP(afd.getPalavra())
    setEst(afd.getEstado())
}

const handleCA = () =>{
afd.consumir('c')
setDoce('A')
setValor(afd.getTroco()-6)
setP(afd.getPalavra())
setEst(afd.getEstado())
setA(false)
setB(false)
setC(false)
if(afd.getEstado<0){
    restart()
    return
}
}

const handleCB = () =>{
afd.consumir('b')
setDoce('B')
setValor(afd.getTroco()-7)
setP(afd.getPalavra())
setEst(afd.getEstado())
setA(false)
setB(false)
setC(false)
if(afd.getEstado<0){
    restart()
    return
}
}
    


const handleCC = () =>{
afd.consumir('c') 
setDoce('C')
setValor(afd.getTroco()-8)
setP(afd.getPalavra())
setEst(afd.getEstado())
setA(false)
setB(false)
setC(false)
if(afd.getEstado<0){
    restart()
    return
}
}
    


    return (
        <div>
            valor:{valor}
            <div>
                <button onClick={handleC5} style={styleOn}>5</button>
                <button onClick={handleC2} style={styleOn}>2</button>
                <button onClick={handleC1} style={styleOn}>1</button>
            </div>
            <div>
                <button onClick={c ? handleCC :()=>{}} style={c ? styleOn : styleOff}>c</button>
                <button onClick={b ? handleCB :()=>{}} style={b ? styleOn : styleOff}>b</button>
                <button onClick={a ? handleCA :()=>{}} style={a ? styleOn : styleOff}>a</button>
            </div>
            <p>doce:{doce}</p>
            <p>palavra:{p}</p>
            <p>estado:{est}</p>
        </div>
    )

}

export default Machine