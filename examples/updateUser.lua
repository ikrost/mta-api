-- Exemplo para alterar qualquer valor na API
local postData = {
    id = 2,
    name = "Teste", -- valor que vai ser alterado na API
    online = false, -- valor que vai ser alterado na API
}
-- É possivel alterar multiplos valores

-- Converta a tabela de dados em uma string JSON
local jsonData = toJSON(postData)

-- Crie um cabeçalho para especificar que você está enviando JSON
local headers = {
    ["Authorization"] = "123A"
    ["Content-Type"] = "application/json"
}

-- POST
fetchRemote("http://localhost:3000/user/update/1/", {
    method = "POST",
    postData = jsonData,
    headers = headers
}, function(data, info)
    if data == "OK" then

        iprint("Valor alterado com sucesso")

    else

        iprint("Ocorreu um erro ao alterar o valor")

    end
end)