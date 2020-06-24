#   Hashes no Ruby é um objeto no qual temos uma coloeção de dados feitas através de chave e valor
#       Consigo ter acesso a um registro através du uma "Chave"

carro = Hash[nome: 'Civic', marca: 'Honda', cor: 'Vermelho']
puts carro[:marca]

carro[:modelo] = 'SI'

# puts carro

#   Hashe de forma implicita
#   https://ruby-doc.org/core-2.7.0/Hash.html
grades = { "Jane Doe" => 10, "Jim Doe" => 6 }
puts grades["Jane Doe"]