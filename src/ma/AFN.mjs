export default class AFN {

    constructor(){
        
    this.troco = 0;
    //estados finais
    this.aceitacao = [10,11,12,13,14,15];
    //estado inicial
	 this.estadoInicial = 0;
    //estado atual
     this.estado = this.estadoInicial;
     //palavra
     this.palavra = " ";
     this.regeitado = false;
      
     //tabela de transição
     this.transicao = [

                            		/*q0*/  [-1, 1, 2, 0,0, 5,-1,-1,-1], 
								    /*q1*/  [-1, 2, 3, 0,0, 6,-1,-1,-1],
								    /*q2*/  [-1, 3, 4, 0,0, 7,-1,-1,-1],
								    /*q3*/  [-1, 4, 5, 0,0, 8,-1,-1,-1],
								    /*q4*/  [-1, 5, 6, 0,0, 9,-1,-1,-1],
								    /*q5*/  [-1, 6, 7, 0,0, 9,-1,-1,-1],
								    /*q6*/  [-1, 7, 8, 0,0, 9,10,-1,-1],
								    /*q7*/  [-1, 8, 9, 0,0, 9,11,12,-1],
								    /*q8*/  [-1, 9, 9, 0,0, 9,11,13,14],
								    /*q9*/  [-1, 9, 9, 0,0, 9,11,13,15],
								    /*qFAS*/[-1,-1,-1, 0,0,-1,-1,-1,-1],
								    /*qFAT*/[-1,-1,-1, 0,0,-1,-1,-1,-1],
								    /*qFBS*/[-1,-1,-1, 0,0,-1,-1,-1,-1],
								    /*qFBT*/[-1,-1,-1, 0,0,-1,-1,-1,-1],
								    /*qFCS*/[-1,-1,-1, 0,0,-1,-1,-1,-1],
								    /*qFCT*/[-1,-1,-1, 0,0,-1,-1,-1,-1],
								    /*0*/	[-1,-1,-1, 0,0,-1,-1,-1,-1],
                                    ];

    }
                                /*
		                        			    1	2	5	A(6) B(7)C(8)		 
		                            0 (q0)		1	2	5	-1	 -1	 -1
		                            1 (q1)		2	3	6	-1	 -1	 -1
		                            2 (q2)		3	4	7	-1	 -1	 -1
		                            3 (q3)		4	5	8	-1	 -1	 -1
		                            4 (q4)		5	6	9	-1	 -1	 -1
		                            5 (q5)		6	7	9	-1	 -1	 -1
		                            6 (q6)		7	8	9	10	 -1	 -1
		                            7 (q7)		8	9	9	11	 12	 -1
		                            8 (q8)		9	9	9	11	 13	 14
		                            9 (q9)		9	9	9	11	 13	 15
		                            10 (qFAS)	-1	-1	-1	-1	 -1	 -1
		                            11 (qFAT)	-1	-1	-1	-1	 -1	 -1
		                            12 (qFBS)	-1	-1	-1	-1	 -1	 -1
		                            13 (qFBT)	-1	-1	-1	-1	 -1	 -1
		                            14 (qFCS)	-1	-1	-1	-1	 -1	 -1
		                            15 (qFCT)	-1	-1	-1	-1	 -1	 -1	
		                            -1 (NULO)	-1	-1	-1	-1	 -1	 -1
	                            */ 

 getEstado(){
    if(this.regeitado)return -1;
    return this.estado;
 }
 getTroco(){
    return this.troco;
 }
 getPalavra(){
    return this.palavra;
 }
 consumir( elemento){
	let elementoInt

	if(elemento == '5' || elemento == '2' || elemento == '1') elementoInt = parseInt(elemento+"");
	else if(elemento == 'a') elementoInt = 6
	else if(elemento == 'b') elementoInt = 7
	else if(elemento == 'c') elementoInt = 8
    /*if(elementoInt <= 5)*/if(elemento == '5' || elemento == '2' || elemento == '1') this.troco += elementoInt;
   // else {
   //     if (this.troco > elementoInt) this.troco -= elementoInt;
   //      }
    this.palavra += elemento;
    this.estado = this.transicao[this.estado][elementoInt];
    //if(parseInt(this.palavra.charAt(this.palavra.length - 1)+"") >= 8) this.regeitado = true;
    //if(this.regeitado)return -1;
    return this.estado;
    }
}
