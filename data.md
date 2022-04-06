All the data is being stored locally, in a json file called tokens under the db folder. 
Unless the api is gonna be gigantic, it should be small. It's main purpose is to see if there are users who are 
constantly spaming the api, and see what is being used more than other.

All profiles should look something like this:

```
    "127.0.0.1": {
        "token": "TOKEN",
        "requestsTOTAL": 5,
        "requests": {
            "pp": 0,
            "howsimp": 0,
            "howgay": 0,
            "randomNumber": 1,
            "randomString": 0,
            "profile": 2,
            "howGay": 1
        }
    }```

    You might see that theres an extra on "requestsTOTAL", and thats becuase one was counted when the user was requesting for the token.
    All numbers will certinly not be the same like they are in the example, but I'm sure you got the idea.