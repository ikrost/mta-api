-- Exemplo para alterar o valor para offline na API quando o usuário sai do servidor
addEventHandler("onPlayerJoin", root, function() 

    -- Exemplo de como pegar o ID do usuário e inserir na requesição
    local ID = getElementData(source, "ID") 

    local postData = {
        online = false, -- valor que vai ser alterado na API
    }

    -- Converta a tabela de dados em uma string JSON
    local jsonData = toJSON(postData)

    -- Crie um cabeçalho para especificar que você está enviando JSON
    local headers = {
        ["Authorization"] = "123A"
        ["Content-Type"] = "application/json"
    }

    -- POST
    fetchRemote("http://localhost:3000/user/update/"..ID.."/", {
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

end)