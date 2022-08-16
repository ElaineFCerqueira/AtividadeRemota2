//Mostrar nome dos alunos

let nomeDosAlunos = ["odirlei","elaine","antonio","gabriel","vinicius","isaac"]

 nomeDosAlunos.forEach(cadaItem => {
     console.log("O nome do aluno é" + (cadaItem)) 
});

//Mostrar o numero


for(let contador = 0;contador < nomeDosAlunos.length; contador++){
    
    if (contador == 0) 
    { console.log("Zero")
    
}   else if (contador % 2 == 0)
    {console.log(`o numero ${contador} é par`)}
    
    else {
        console.log(`o numero ${contador} é impar`)}
};
