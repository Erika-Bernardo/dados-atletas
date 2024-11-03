class Atleta {
    constructor(nome, idade, peso, altura, notas) {
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
        this.altura = altura;
        this.notas = notas;
    }

    // Calcular categoria do atleta
    calculaCategoria() {
        if (this.idade >= 9 && this.idade <= 11) {
            return "Infantil";
        } else if (this.idade >= 12 && this.idade <= 13) {
            return "Juvenil";
        } else if (this.idade >= 14 && this.idade <= 15) {
            return "Intermediário";
        } else if (this.idade >= 16 && this.idade <= 30) {
            return "Adulto";
        } else {
            return "Sem categoria";
        }
    }

    //Calculara IMC do atleta
    calculaIMC() {
        return this.peso / (this.altura * this.altura);
    }

    // Cálculo da média válida (desconsidera a maior e menor nota)
    calculaMediaValida() {

        //Ordenar as notas em ordem crescente
        let notasOrdenadas = this.notas.sort(function (a, b) {
            return a - b;
        });

        //Elimina a maior e a menor nota
        let notasValidas = notasOrdenadas.slice(1, 4);

        // Calcula a média das notas Válidas
        let soma = 0;

        notasValidas.forEach(function (nota) {
            soma = soma + nota;
        });

        let media = soma / notasValidas.length;

        return media
    }

    obtemNomeAtleta() {
        return this.nome;
    }

    obtemIdadeAtleta() {
        return this.idade;
    }

    obtemPesoAtleta() {
        return this.peso;
    }

    obtemNotasAtleta() {
        return this.notas;
    }

    obtemCategoria() {
        return this.calculaCategoria();
    }

    obtemIMC() {
        return this.calculaIMC();
    }

    obtemMediaValida() {
        return this.calculaMediaValida();
    }
}

// Exemplo de uso
const atleta = new Atleta("Cesar Abascal", 30, 80, 1.70, [10, 9.34, 8.42, 10, 7.88]);
// const atleta = new Atleta("Fernando Puntel", 15, 45, 1.50, [7, 10, 9.5, 9.5, 8]);
// const atleta = new Atleta("Daiane Jelinsky", 12, 29, 1.10, [7, 10, 9.5, 9.5, 8]);
// const atleta = new Atleta("Bruno Castro", 9, 13, 0.90, [10, 10, 10, 9, 9.5]);


console.log(`Nome: ${atleta.obtemNomeAtleta()}`);
console.log(`Idade: ${atleta.obtemIdadeAtleta()}`);
console.log(`Peso: ${atleta.obtemPesoAtleta()}`);
console.log(`Altura: ${atleta.altura}`);
console.log(`Notas: ${atleta.obtemNotasAtleta().join(',')}`);
console.log(`Categoria: ${atleta.obtemCategoria()}`);
console.log(`IMC: ${atleta.obtemIMC()}`);
console.log(`Média válida: ${atleta.obtemMediaValida()}`);
