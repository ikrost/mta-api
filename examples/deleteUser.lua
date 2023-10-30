-- Exemplo para deletar um usuário na API pelo ID
-- GET
local headers = {
    ["Authorization"] = "123A",
    ["Content-Type"] = "application/json",
}

fetchRemote("http://localhost:3000/user/delete/1", {
    method = "GET",
    headers = headers
}, function(data, info)
    if data == "OK" then
    
        iprint("Usuário deletado com sucesso")

    else

        iprint("Ocorreu um erro ao deletar o usuário")

    end
end)
