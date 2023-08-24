// Les différents layouts selon les types de posts - ["categories", "layout"]
var postLayouts = [
    ["places", "places"],
    ["log", ""],
    ["projects", "post"],
    ["works", "post"]
]

// Si site bilingue, les différents contenus à remplir - ["id", "label innerHTML", "préfixe de langue"]
var postContents = [
    ["contentfr", "Contenu en français", "fr"],
    ["contenten", "Contenu en anglais", "en"]
]

// Les différents éléments de la head du markdown, selon les catégories - ["categories", ["id", "label", required (boolean) - field type (input/select) - [array of options (if select)] - input type (if input)]]
var postfields = [
    ["places",
        ["title", "Titre : ", true, "input", "text"],
        ["lang-ref", "Mot-clef commun aux deux langues : ", true, "input", "text"],
        ["draft", "Brouillon : ", true, "select", 
            ["no", "yes"],
        ],
        ["date", "Date : ", true, "input", "date"],
        ["link", "Lien : ", true, "input", "text"],
        ["fav", "Favori : ", true, "select",
            ["no", "yes"],
        ],
    ],
    ["log",
        ["title", "Titre : ", true, "input"],
        ["lang-ref", "Mot-clef commun aux deux langues : ", true, "input"],
        ["draft", "Brouillon : ", true, "select", 
            ["no", "yes"],
        ],
        ["date", "Date : ", true, "input", "date"],
    ],
    ["projects",
        ["title", "Titre : ", true, "input"],
        ["lang-ref", "Mot-clef commun aux deux langues : ", true, "input"],
        ["draft", "Brouillon : ", true, "select", 
            ["no", "yes"],
        ],
        ["date", "Date : ", true, "input", "date"], 
        ["ext_link", "Lien du projet : ", false, "input"],
        ["no_link", "Légende si le projet n'est pas en ligne : ", false, "input"],
        ["github", "Repo Github du projet : ", false, "input"],
        ["img", "Nom de l'image du projet : ", true, "input"],
    ],
    ["works",
        ["title", "Titre : ", true, "input"],
        ["lang-ref", "Mot-clef commun aux deux langues : ", true, "input"],
        ["draft", "Brouillon : ", true, "select", 
            ["no", "yes"],
        ], 
        ["date", "Date : ", true, "input", "date"],
        ["ext_link", "Lien du projet : ", false, "input", ],
        ["no_link", "Légende si le projet n'est pas en ligne : ", false, "input"],
        ["github", "Repo Github du projet : ", false, "input"],
        ["img", "Nom de l'image du projet : ", true, "input"],
        ["features", "Fonctionnalités du projet : ", true, "input"],
        ["languages", "Langages du projet : ", true, "input"],
    ]
]