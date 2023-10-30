-- Exemplo para inserir o usuário na API quando ele entra no servidor
local postData = {
    id = 2, -- valor que vai ser inserido na API
    name = "Teste", -- valor que vai ser inserido na API
    online = true, -- valor que vai ser inserido na API
}
-- É possivel alterar multiplos valores

-- Converta a tabela de dados em uma string JSON
local jsonData = toJSON(postData)

-- Crie um cabeçalho para especificar que você está enviando JSON
local headers = {
    ["Authorization"] = "123A",
    ["Content-Type"] = "application/json"
}

addEventHandler("onPlayerJoin", root, function()

    fetchRemote("http://localhost:3000/user/add/", {
        method = "POST",
        postData = jsonData,
        headers = headers
    }, function(data, info)
        if data == "OK" then
    
            iprint("Usuário adicionado com sucesso")
    
        else
    
            iprint("Ocorreu um erro ao adicionar o usuário")
    
        end
    end)
end)