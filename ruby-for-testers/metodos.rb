#   def - Criar ou definir um método

#   Criando um método para imprimir Olá !
def diga_ola
    puts 'Olá !'
end

#  Invocando o método
diga_ola

#   Método com Retorno
#   No Ruby não presisamos ultilizar return para "Retornar" um valor ou informação, basta
#       incluir em aspas simples o valor que deseja retornar.
def retorna_nome
    'Railane'
end

#   Podemos simplesmente atribuir o retorno de um método a uma variável e posteriormente "imprime-la".
resultado = retorna_nome
puts resultado

def soma(v1, v2)
    total = v1 + v2
    total
end

valor1 = 0
valor2 = 0

puts 'Digite o valor 1:'
valor1 = gets.chomp.to_i
puts 'Digite o valor 2:'
valor2 = gets.chomp.to_i

res = soma(valor1,valor2)
puts "O resultado é #{res}"

#   Concatenando Olá com Valor nome que será passado no método mais tarde.
def diga_oi(nome)
    puts 'Olá, ' + nome
end

diga_oi('Railane')