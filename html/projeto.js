
var img = document.getElementById('img');
var cep = document.getElementById('cep');
var A = document.getElementById('A');
var musica = document.getElementById('musica');
var doaja = document.getElementById('doaja');
var moeda = document.getElementById('moeda')

// Adiciona um evento de clique à imagem
img.addEventListener('click', function() {
    // Redireciona para o projeto na pasta projeto_calculadora
    window.location.href = 'projeto_calculadora/index.html'; 
});

// Obtém o elemento com id 'cep'
var cep = document.getElementById('cep');

// Verifica se o elemento foi encontrado antes de adicionar o evento
if (cep) {
    // Adiciona um evento de clique ao elemento
    cep.addEventListener('click', function() {
        // Redireciona para o projeto React, normalmente para o endereço local
        window.location.href = 'http://localhost:8000'; 
    });
} else {
    console.error('Elemento com id "cep" não encontrado.');
}


A.addEventListener('click', function() {
    // Redireciona para o projeto na pasta projeto_calculadora
    window.location.href = 'Avengers/A.html'; 
});

musica.addEventListener('click', function() {
    // Redireciona para o projeto na pasta projeto_calculadora
    window.location.href = 'projeto_musica/index.html'; // Ajuste o caminho conforme necessário
});

doaja.addEventListener('click', function() {
    // Redireciona para o projeto na pasta projeto_calculadora
    window.location.href = 'projeto_doaja/frontend/index.html'; 
});

moeda.addEventListener('click', function() {
    // Redireciona para o projeto na pasta projeto_calculadora
    window.location.href =  'http://localhost:3000';
});


/*       sobre           */

function costs() {
    var texto = document.getElementById("texto");
    
    if (texto.style.display === "none"  || texto.style.display === "") {
      
        texto.style.display = "block";

    } else {  
        texto.style.display = "none";   
    }}

            function buscador() {
                var texto2 = document.getElementById("texto2");
                
                if (texto2.style.display === "none"  || texto2.style.display === "") {
                
                    texto2.style.display = "block";
            
                } else {  
                    texto2.style.display = "none";   
                }}
    
                            function a() {
                                var texto3 = document.getElementById("texto3");
                                
                                if (texto3.style.display === "none"  || texto3.style.display === "") {
                                
                                    texto3.style.display = "block";
                            
                                } else {  
                                    texto3.style.display = "none";   
                                }}
    
                                            function tocador() {
                                                var texto4 = document.getElementById("texto4");
                                                
                                                if (texto4.style.display === "none"  || texto4.style.display === "") {
                                                
                                                    texto4.style.display = "block";
                                            
                                                } else {  
                                                    texto4.style.display = "none";   
                                                }}
                                                            function calc() {
                                                                var texto5 = document.getElementById("texto5");
                                                                
                                                                if (texto5.style.display === "none"  || texto5.style.display === "") {
                                                                
                                                                    texto5.style.display = "block";
                                                            
                                                                } else {  
                                                                    texto5.style.display = "none";   
                                                                }}
                                                                            function tcc() {
                                                                                var texto6 = document.getElementById("texto6");
                                                                                
                                                                                if (texto6.style.display === "none"  || texto6.style.display === "") {
                                                                                
                                                                                    texto6.style.display = "block";
                                                                            
                                                                                } else {  
                                                                                    texto6.style.display = "none";   
                                                                                }}
                                        
