-- Exemplo para pegar informações de um player na API pelo ID
-- GET
local headers = {
    ["Authorization"] = "123A",
    ["Content-Type"] = "application/json",
}

-- GET
fetchRemote("http://localhost:3000/user/get/1", {
    method = "GET",
    headers = headers
}, function(data, info)
    if #data > 0 then

        iprint(fromJSON(data))

    else

        iprint("data is empty")

    end
end)
