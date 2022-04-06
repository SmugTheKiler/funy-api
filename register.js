const express = require('express');
const config = require('./config.json')
const JSONdb = require('simple-json-db')
const db = new JSONdb('./db/tokens.json')
const {
    randomString
} = require('./functions.js')
const app = express()
const port = config.RegisterPORT;
const bannedIPS = config.bannedIPS;

app.get('/register', (req, res, next) => {

    if (config.tokenGenerationALLOWED == false) {

        res.json({
            message: "Token generation is disabled!",
            info: "The owner has disabled token generation.",
            error: true
        })

    } else if (bannedIPS.includes(req.ip)) {

        res.json({
            message: "Your IP adress was Permanently banned from registrating tokens.",
            info: "You are unable to register tokens.",
            error: true
        });

    } else if (db.get(req.ip)) {

        res.json({
            message: "This IP already has a token!",
            info: "The IP already has a token generated and attached to it. If you wanna regenorate it, ask the staff.",
            error: true
        })

    } else {

        let token;
        token = randomString();

        const user = {
            token: token,
            requestsTOTAL: 1,
            requests: {
                pp: 0,
                howsimp: 0,
                howgay: 0,
                randomNumber: 0,
                randomString: 0,
                profile: 0
            },
        };

        db.set(req.ip, user)

        res.json({
            message: `New API token created! (In the info header) - Its generated only for your current IP adress (${req.ip})`,
            info: token,
            error: false
        })

    };
});

app.listen(port, '0.0.0.0', () => {
    console.log(`Example app listening at http://localhost:${port}/register`)
});