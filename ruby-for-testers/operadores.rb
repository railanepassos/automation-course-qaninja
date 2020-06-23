#   Declarando variáveis para trabalharmos com operadores aritiméticos
numero1 = 0
numero2 = 0
total = 0

#   Ao informar o nome da variável estamos atribuindo uma "string" a ela, ou seja, estamos alterando seu tipo. 
#       Ao realizar a "soma" dos valores, na verdade ele irá "concatenar" e não realizar a operação.
#   Para converter esse valor "string" para "inteiro" usamos o método "to_i" que deverá converter o maximo
#       possivel o valor recebido para inteiro, possibilitando as operações aritiméticas.
#   https://stackoverflow.com/questions/10093493/difference-between-integervalue-and-value-to-i
#   Para capturar os valores digitados no teclado basta ultilizar "gets.chomp"
#   https://stackoverflow.com/questions/23193813/how-to-use-gets-and-gets-chomp-in-ruby
puts 'Informe o valor 1: '
numero1 = gets.chomp.to_i
puts 'Informe o valor 2: '
numero2 = gets.chomp.to_i

###################################################################################################
##################################  OPERADORES DE ARITIMÉTICOS   ##################################
###################################################################################################

total = numero1 + numero2
#   Para concatenar texto e variável é necessário ultilizar aspas dupla e dentro dela jogo da velha e 
#       cochetes para fazer referência.
#   https://wetools.wordpress.com/2016/01/03/concatenar-strings/
puts "A soma dos valores é #{total}."

#   Subtraindo
total = numero1 - numero2
puts "A subtração dos valores é #{total}."

#   Multiplicando 
total = numero1 * numero2
puts "A multiplicação dos valores é #{total}."

#   Dividindo 
total = numero1 / numero2
puts "A divisão dos valores é #{total}."

#   Calculando o resto da divisão
total = numero1 % numero2
puts "Resto da Divisão(módulo) inteira é #{total}."

#   Calando uma potência
total = numero1 ^ numero2
puts "Expoênte(potênciação) é #{total}."

###################################################################################################
##################################   OPERADORES DE COMPARAÇÃO    ##################################
###################################################################################################

#   Declarando variáveis
valor1 = 12
valor2 = 12.0

#   Verificando se a variavel "valor1" é maior que "valor2"
#   Operador ultilizado é ">"
puts valor1 > valor2

#   Verificando se a variavel "valor1" é maior ou igual a "valor2"
#   Operador ultilizado é ">="
puts valor1 >= valor2

#   Verificando se a variavel "valor1" diferente "valor2"
#   Operador ultilizado é "!="
puts valor1 != valor2

#   Verificando se a variavel "valor1" menor que "valor2"
#   Operador ultilizado é "<"
puts valor1 < valor2

#   Verificando se a variavel "valor1" menor que ou igual "valor2"
#   Operador ultilizado é "<="
puts valor1 <= valor2

#   Verificando se a variavel "valor1" igual a "valor2"
#   Operador ultilizado é "=="
puts valor1 == valor2

#   Verificando se a variavel "valor1" exatamente igual "valor2" inclusive em tipo
#   Operador ultilizado é "eql?"
#   https://medium.com/@khalidh64/difference-between-eql-equal-in-ruby-2ffa7f073532
puts valor1.eql?(valor2)