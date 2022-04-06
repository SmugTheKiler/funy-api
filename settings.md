{
    "port" : "81",
    "tokenREQUIRED" : false,
    "RegisterPORT" : "80",
    "bannedIPS" : [ 
        "IP1",
        "IP2"
    ],
    "tokenGenerationALLOWED" : true
}

- Port stands for the port the api is gonna run on. 81 is the defult port, so its recommended.

- tokenREQUIRED is if you want the api to require a token. If not, put false. If yes, put true.

- RegisterPORT is the port that is used to register tokens for the api. If TokenREQUIRED is false, then ignore this. - doesnt have to be the same or different as the first port.

- bannedIPS is for IPS banned from registrating tokens.

- tokenGenerationALLOWED alows users to request a new token from the api.