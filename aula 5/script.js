/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var any = ['bruno', 17, true, 2.0, -56];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function teste(arr) {
    return arr;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(teste(any)[1]);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function two(arr, num) {
    return arr[num];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var pepe = ['bruno', 17, true, NaN, null];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
for (var i = 0; i <= 4; i++) {
    console.log(two(pepe, i));
}


/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
function book(name) {
    var obj = {
        'Biblia': {
            quantidadePaginas: 1800,
            autor: 'Vários',
            editora: 'God&Company'
        },
        'Laranja Mecanica': {
            quantidadePaginas: 280,
            autor: 'Anthony Burgess',
            editora: 'Altamira'
        },
        'Harry Potter': {
            quantidadePaginas: 460,
            autor: 'J. K. Rowling',
            editora: 'Azkaban'
        }
    }
    if (!name) {
        return obj;
    }
    return obj[name];
}
/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log('================');
console.log(book('Biblia'));
console.log('================');
/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
console.log("O livro Harry Potter tem " + book('Harry Potter').quantidadePaginas + " Páginas!");

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log("O autor do livro Biblia é " + book().Biblia.autor);

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log("O livro Laranja Mecânica foi publicado pela editora " + book('Laranja Mecanica').editora);