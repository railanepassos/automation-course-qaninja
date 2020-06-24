#   Ruby é uma linguagem considerada puramente orientada a objetos
#   No Ruby tudo são objetos

#   Classe possui atributos e métodos
#   Caracteristicas e ações

#   Caracteristicas/ atributos -> Carro (Nome, Marca, Modelo, Cor, Quantidade de Portas, etc ...)
#   Ações/ métodos -> Ligar, Businar, Parar, etc...

class Carro
    attr_accessor :nome
    attr_accessor :marca
    attr_accessor :modelo
    attr_accessor :cor

    def ligar 
        puts 'O carro está pronto para iniciar o trajeto.'
    end

    def businar
        puts 'O carro está businando.'
    end

end

civic = Carro.new
civic.nome = 'Civic'
civic.marca = 'Honda'
civic.modelo = '2020'
civic.cor = 'Black'

puts "Nome do Carro: " + civic.nome + " Cor do carro: " + civic.cor

civic.ligar
civic.businar