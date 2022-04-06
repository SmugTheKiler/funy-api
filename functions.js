const config = require('./config.json')
const JSONdb = require('simple-json-db')
const db = new JSONdb('./db/profiles.json')

function getpp() {
    const random = Math.floor(Math.random() * 26) + 1
    const o = '='
    const ppSize = o.repeat(random)
    return `B${ppSize}D`
};

function howsimp() {
    const procentage = Math.floor(Math.random() * 100) + 1
    let output;
    return output = `${procentage}%`
};

function randomNumber() {
    const a = Math.floor(Math.random() * 1363456846736724);
    const b = Math.floor(Math.random() * a);
    const c = Math.floor(Math.random() * b);
    const d = Math.floor(Math.random() * c);
    const e = a + b + c + d + 1
    return e;
}

function randomString() {
    let a = Math.random().toString(36).replace(/[^a-z]+/g, '');
    let b = Math.random().toString(36).replace(/[^a-z]+/g, '');
    let c = Math.random().toString(36).replace(/[^a-z]+/g, '');
    let d = Math.random().toString(36).replace(/[^a-z]+/g, '');
    let e = Math.random().toString(36).replace(/[^a-z]+/g, '');
    let f = a + b + c + d + e;

    return f;
}

function profile(ip) {
    let user = db.get(ip);

    return user;
}

//------------------------------------------------------
//                     SYSTEM FUNCTIONS

async function addRequest(ip, requestName) {
    let user = await db.get(ip)

    db.set(user.requestsTOTAL++)

    if (requestName === 'randomNumber') {
        await db.set(user.requests.randomNumber++)
    } else if (requestName === 'pp') {
        await db.set(user.requests.pp++)
    } else if (requestName === 'howSimp') {
        await db.set(user.requests.howSimp++)
    } else if (requestName === 'howGay') {
        await db.set(user.requests.howGay++)
    } else if (requestName === 'randomString') {
        await db.set(user.requests.randomString++)
    } else if (requestName === 'profile') {
        await db.set(user.requests.profile++)
    } else if (requestName === 'mainPage') {
        await db.set(user.requests.mainPage++)
    };
};

/*
    "127.0.0.1": {
        "token": "puhncdjordpohxgfvhjocunnrsvbahnjfqhugllbo",
        "requestsTOTAL": 0,
        "requests": {
            "pp": 0,
            "howSimp": 0,
            "howGay": 0,
            "randomNumber": 30,
            "randomString": 0
        }
    }

*/
module.exports = {
    getpp,
    howsimp,
    randomNumber,
    randomString,
    addRequest,
    profile
};