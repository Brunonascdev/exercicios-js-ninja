(function () {
    /*
    Envolva todo o conteúdo desse arquivo em uma IIFE.
    */

    /*
    Crie um objeto chamado `person`, com as propriedades:
        `name`: String
        `lastname`: String
        `age`: Number
    Preencha cada propriedade com os seus dados pessoais, respeitando o tipo
    de valor para cada propriedade.
    */
    let person = {
        name: 'Bruno',
        lastname: 'Nascimento',
        age: 17
    }
    console.log('Propriedades de "person":');
    for (prop in person) {
        console.log(prop);
    }

    /*
    Mostre no console, em um array, todas as propriedades do objeto acima.
    Não use nenhuma estrutura de repetição, nem crie o array manualmente.
    */
    console.log(Object.keys(person));

    /*
    Crie um array vazio chamado `books`.
    */
    let book = [];

    /*
    Adicione nesse array 3 objetos, que serão 3 livros. Cada livro deve ter a
    seguintes propriedades:
    `name`: String
    `pages`: Number
    */
    book.push(
        {
            name: 'Biblia',
            pages: 999
        },
        {
            name: 'Harry',
            pages: 444
        },
        {
            name: 'Oto',
            pages: 232
        }
    );
    console.log('\nLista de livros:');
    console.log(book);

    console.log('\nLivro que está sendo removido:');
    console.log(book.pop());

    console.log('\nAgora sobraram somente os livros:');
    console.log(book);

    /*
    Converta os objetos que ficaram em `books` para strings.
    */
    let b = JSON.stringify(book);
    console.log('\nLivros em formato string:');

    console.log(b);


    /*
    Converta os livros novamente para objeto.
    */
    let c = JSON.parse(b);
    console.log('\nAgora os livros são objetos novamente:');
    console.log(c);
    /*
    Mostre no console todas as propriedades e valores de todos os livros,
    no formato abaixo:
        "[PROPRIEDADE]: [VALOR]"
    */

    for (var count = 0; count < book.length; count++) {
        for (props in book[count]) {
            console.log(`${props}: ${book[count][props]}`);
        }
    }

    /*
    Crie um array chamado `myName`. Cada item desse array deve ser uma letra do
    seu nome. Adicione seu nome completo no array.
    */
    let myName = ['B', 'r', 'u', 'n', 'o'];
    console.log('\nMeu nome é:');

    /*
    Juntando todos os itens do array, mostre no console seu nome.
    */
    console.log(myName.join(''));

    console.log('\nMeu nome invertido é:');
    /*
    Ainda usando o objeto acima, mostre no console seu nome invertido.
    */
    console.log(myName.reverse().join(''));

    console.log('\nAgora em ordem alfabética:');
    /*
    Mostre todos os itens do array acima, odenados alfabéticamente.
    */
    console.log(myName.sort());
})();