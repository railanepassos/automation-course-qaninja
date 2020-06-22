# -- Tipos Ruby --
#   -> dinâmica -> definido no momento em que a variável recebe o valor

produto = 'Macbook Air'
#   No momento que a variável produto recebeu o seu valor "Macbook Air" seu tipo deverá ser string.
#   Para descobrir o tipo da variável definida para produto basta executar o "puts" chamando o metodo "class".
#   Para executar o programa Ruby, deverá abrir o "cmeder", navegar até a pasta onde está o arquivo "tipos.rb"
#       executar o comando "ruby tipos.rb"
puts produto.class
#   String

#   Outras variáveis.
preco = 5999.00
quantidade = 10
disponivel = true

puts preco.class
puts quantidade.class
puts disponivel.class
#   Float       ->  Real
#   Integer     ->  Inteiro
#   TrueClass   ->  Boleano

#   Imprimindo Variáveis
puts produto
puts preco
puts quantidade
puts disponivel

#   Alterarndo variável
quantidade = '5'
puts quantidade.class