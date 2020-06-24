#####################################
#   Estruturas de Repetição         #
#####################################
#####################################
#   Loop ultilizando o método Times #
#####################################

cont = 1

5.times do
    puts "Repetindo Mensagem #{cont}."
    cont += 1
end

5.times do |i|
    puts "Repetindo a mensagem " + i.to_s + "vez(es)."
end

#####################################
#####   Loop ultilizando while ######
#####################################
#   while true do
#       puts 'Lopping Infinito'
#   end

init = 0
while init <= 10 do
    puts 'Repetindo a mensagem ' + init.to_s + ' vez(es).'
    init += 1
end

#####################################
#####   Loop ultilizando for ########
#####################################

for item in (0...10)
    puts 'Repetindo a mensagem ' + item.to_s + ' vez(es).'
end

##############################################
#####   Estrutura de Repetição Arrays ########
##############################################
#   Criando variável que recebe array de strings
vingadores = ['Ironman', 'Hulk', 'Spiderman']
#   Mostrando o tipo da variavel ou objeto
puts vingadores.class

vingadores.each do |v|
    puts v
end