FORMAT: 1A
# VUTTR

VUTTR is an anagram of Very Useful Tools to Remember.

## Tools Collection [/tools]

### List All Tools [GET]

+ Response 200 (application/json)
    
    + Headers

            Location: /questions

    + Body

            {
                "id": 1,
                "title": "AdonisJs",
                "link": "https://adonisjs.com/",
                "description": "AdonisJs is a Node.js web framework with a breath of fresh air and drizzle of elegant syntax on top of it. We prefer developer joy and stability over anything else.",
                "tags": [
                    "javascript",
                    "adonis",
                    "web",
                    "framework",
                    "mvc"
                ]
            }
        
        
    

### Create a New Tool [POST]

+ Request (application/json)

        {
            "title" : "AdonisJs",
            "link"  : "https://adonisjs.com/",
            "description" : "AdonisJs is a Node.js web framework with a breath of fresh air and drizzle of elegant syntax on top of it. We prefer developer joy and stability over anything else.",
            "tags" : "javascript, adonis, web, framework, mvc"
        }

+ Response 201 (application/json)

    + Headers

            Location: /tools/2

    + Body

            {
                "title": "apiaryio",
                "link": "https://apiary.io/",
                "description": "Powerful API Design Stack. Built for Developers.",
                "tags": [
                    "api",
                    "blueprint",
                    "api documentation"
                ],
                "id": 2
            }

### Retrieve Tool [GET /tools/{id}]

+ Response 200 (application/json)

    + Body

            {
                "id": 2,
                "title": "apiaryio",
                "link": "https://apiary.io/",
                "description": "Powerful API Design Stack. Built for Developers.",
                "tags": [
                    "api",
                    "blueprint",
                    "api documentation"
                ]
            }


### Delete Tool [DELETE /tools/{id}]

+ Response 204 (application/json)
