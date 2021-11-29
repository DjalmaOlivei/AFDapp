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
    let [troco, setTroco] = useState()
    
    //const input = "11528";

/*for(let i = 0; i < input.length; i++){
    //System.out.println(afn.consumir(input.charAt(i)));
    afd.consumir(input.charAt(i));
}*/
const styleOn = { background: '#ede6e6', color: '#575454' }
const styleOff = { background: '#575454', color: '#ede6e6' }
     
const restart = (newValue) =>{
    let newAfd = new AFN();
    //console.log(p)
    setDoce('')
    setP('')
    setEst(0)
    setTroco('')
    setA(false)
    setB(false)
    setC(false)
    newAfd.consumir(newValue)
    setValor(newAfd.getTroco())
    setP(newAfd.getPalavra())
    setEst(newAfd.getEstado())
    //setTroco(newAfd.getTroco())
    console.log(newAfd.getPalavra()+' | '+newAfd.getEstado())
    setAfd(newAfd)
   
}

const handleC5 = () => {
    
    if(afd.consumir('5')<0){
        restart('5')
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
    console.log(afd.getPalavra()+' | '+afd.getEstado())
}

const handleC2 = () => {
    
    if(afd.consumir('2')<0){
        restart('2')
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
    console.log(afd.getPalavra()+' | '+afd.getEstado())
}

const handleC1 = () => {
    
    if(afd.consumir('1')<0){
        restart('1')
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
    console.log(afd.getPalavra()+' | '+afd.getEstado())
}

const handleCA = () =>{
    
afd.consumir('a')

setDoce((<div onClick={() => {setDoce(''); }}
    style={{            
    width: '50px',
    height: '50px',
    background: 'red',
    position: 'absolute',
    //top: '45%',
    //left: '30%',
    bottom: '15%',
    right: '30%'
    }}><h3 style={{textAlign: 'center'}}>A</h3></div>
       ))

setTroco(<div>
    <p style={{floating: 'left',
               height:'10px'}}>Troco:</p>
     <div onClick={() => {setTroco('')}} style={{ 
                   background : "#008a12",
                   width: '50px',
                   height: '20px',
                   marginLeft: 'auto',
                   marginRight: 'auto'
                   }}><p style={{textAlign: 'center'}}>R${afd.getTroco()-6}</p>
     </div>
     </div>)

setValor(0)
setP(afd.getPalavra())

setEst(afd.getEstado())
setA(false)
setB(false)
setC(false)
console.log(afd.getPalavra()+' | '+afd.getEstado())
if(afd.getEstado<0){
    restart()
    return
}
}

const handleCB = () =>{
    
afd.consumir('b')

setDoce((<div onClick={() => {setDoce('')}} 
    style={{            
    width: '50px',
    height: '50px',
    background: 'chocolate',
    position: 'absolute',
    //top: '45%',
    //left: '30%',
    bottom: '15%',
    right: '30%'
    }}><h3 style={{textAlign: 'center'}}>B</h3></div>))

setTroco(<div>
    <p style={{floating: 'left',
               height:'10px'}}>Troco:</p>
     <div onClick={() => {setTroco('')}} style={{ 
                   background : "#008a12",
                   width: '50px',
                   height: '20px',
                   marginLeft: 'auto',
                   marginRight: 'auto',
                   //top: '45%',
                  //left: '30%',
                  bottom: '15%',
                  right: '30%'
                   }}><p style={{textAlign: 'center'}}>R${afd.getTroco()-7}</p>
     </div>
     </div>)

setValor(0)
setP(afd.getPalavra())
setEst(afd.getEstado())
setA(false)
setB(false)
setC(false)
console.log(afd.getPalavra()+' | '+afd.getEstado())
if(afd.getEstado<0){
    restart()
    return
}
}
    


const handleCC = () =>{
    
afd.consumir('c') 

setDoce((<div onClick={() => {setDoce('')}}
                style={{            
                width: '50px',
                height: '50px',
                background: 'purple',
                position: 'absolute',
                //top: '45%',
                //left: '30%',
                bottom: '15%',
                right: '30%'
                }}>
                <h3 style={{textAlign: 'center'}}>C</h3>
          </div>))

setTroco(<div>
        <p style={{floating: 'left',
                   height:'10px'}}>Troco:</p>
         <div onClick={() => {setTroco('')}} style={{ 
                       background : "#008a12",
                       width: '50px',
                       height: '20px',
                       marginLeft: 'auto',
                       marginRight: 'auto'
                       }}><p style={{textAlign: 'center'}}>R${afd.getTroco()-8}</p>
         </div>
         </div>)
setValor(0)
setP(afd.getPalavra())
setEst(afd.getEstado())
setA(false)
setB(false)
setC(false)
console.log(afd.getPalavra()+' | '+afd.getEstado())
if(afd.getEstado<0){
    restart()
    return
}
}
    


    return (<div>

    <div style={{
            position:'absolute',
            top: '0%',
            left: '30%',
            background: 'orange',
            width: '30%',
            height: '80%',
            padding: "20px"
            }}> 


        <div>
                    
            <div style={{
                width: "80%",
                height: 462,
                
                float: 'left'
            }}>
                
            </div>
            
            <div >
                
                <div style={{
                   position:'absolute',
                   float: 'left',
                    width: '60%',
                    height: '380px',
                    background: 'grey',
                    padding: "20px",
                    borderRadius : '25px'
                    }}>
                        <div>
                            <div style={{
                            
                            width: '45%',
                            height: '100px',
                            background: 'red',
                            marginLeft: 'auto',
                            marginRight: 'auto'
                             }}>
                            <h2 style={{textAlign: 'center'}}>A</h2>
                            <h3 style={{textAlign: 'center'}}>R$6,00</h3>
                            </div>
                        </div>

                        <div>
                            <div style={{
                            
                            width: '45%',
                            height: '100px',
                            background: 'chocolate',
                            marginLeft: 'auto',
                            marginRight: 'auto'
                            }}>
                            <h2 style={{textAlign: 'center'}}>B</h2>
                            <h3 style={{textAlign: 'center'}}>R$7,00</h3>
                            </div>
                        </div>

                        <div>
                            <div style={{
                            
                            
                            width: '45%',
                            height: '100px',
                            background: 'purple',
                            marginLeft: 'auto',
                            marginRight: 'auto'
                            }}>
                            <h2 style={{textAlign: 'center'}}>C</h2>
                            <h3 style={{textAlign: 'center'}}>R$8,00</h3>
                            </div>
                        </div>

                </div>

                <div >

                        <div style={{height: '30px'}}></div>
                        
                        <div style={{
                            
                            float: 'right',
                            color: "green",
                            width: '75px',
                            height: '25px',
                            background: 'black'
                            }}>
                           valor : {valor}
                        </div>
                        
                        <div style={{float: 'left', padding: "7px"}}>
                        
                            <div><button onClick={handleC1} style={styleOn}>1</button></div>
                            <div><button onClick={handleC2} style={styleOn}>2</button></div>
                            <div><button onClick={handleC5} style={styleOn}>5</button></div>
                        </div>
                        
                        <div style={{float: 'right', padding: "7px"}}>
                            <div><button onClick={a ? handleCA :()=>{}} style={a ? styleOn : styleOff}>a</button></div>
                            <div><button onClick={b ? handleCB :()=>{}} style={b ? styleOn : styleOff}>b</button></div>
                            <div><button onClick={c ? handleCC :()=>{}} style={c ? styleOn : styleOff}>c</button></div>


                        </div>
                
                </div>
                
                <div style={{
                    position: 'absolute',
                    bottom: 0,
                    right: 0,
                    padding: "20px"
                    }}>
                            <div style={{ background: 'yellow',
                                          width : '60px',
                                          height: '50px'}}>
                                          {troco}</div>
                    <div style={{height: '10px'}}></div>
                    <div style={{ width: '70px', 
                                  height: '80px', 
                                  background:'white',
                                  }}>
                            {doce}
                    </div>
                    
                </div>

                
                
            </div>


        </div>

        
                                  
    </div>
<p>Palavra:# {p}</p>
<p>Estado :# {est}</p>
    </div>)

}

