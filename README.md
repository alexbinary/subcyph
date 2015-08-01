# SubCyph

Programme interractif en ligne de commande pour aider à déchiffrer un message chiffré par substitution.

Ecrit en Javascript, nécessite Node.js.

Lancer le programme et entrer le texte chiffré :

    node index.js

    Entrer le texte chiffré sans accents (les espaces et signes de ponctuations sont autorisés) :
    > DVJ HGIMJ JNBM MXVJ WUZBNBJ, JLXMNLM DVLXJ NXVUDDVJ.

Le programme tente d'abord une résolution en utilisant une analyse fréquentielle du message chiffré.

    -- RESOLUTION AUTOMATIQUE --

    par fréquence décroissante dans le texte chiffré    : jvmdnxbluhgiwz
    par fréquence décroissante dans la langue française : esaitnrulodcpmvqfbghjxyzwk

    Résultat de la substitution :

    chiffré : dvj hgimj jnbm mxvj wuzbnbj, jlxmnlm dvlxj nxvuddvj.
    clair   : ise odcae etra anse plmrtre, eunatua isune tnsliise.

Ensuite l'utilisateur est libre d'essayer des substitutions pour tenter de déchiffrer le message.

    -- RESOLUTION MANUELLE --

    Entrer une substitution (entrer 'ab' pour remplacer a par b, entrer 'a' pour effacer la substitution enregistrée pour a) :
    > dl

    dvj hgimj jnbm mxvj wuzbnbj, jlxmnlm dvlxj nxvuddvj.
    l__ _____ ____ ____ _______, _______ l____ ____ll__.

    par fréquence décroissante dans le texte chiffré    : jvmdnxbluhgiwz
    par fréquence décroissante dans la langue française : esaitnrulodcpmvqfbghjxyzwk

    Entrer une substitution (entrer 'ab' pour remplacer a par b, entrer 'a' pour effacer la substitution enregistrée pour a) :
    > ve

    dvj hgimj jnbm mxvj wuzbnbj, jlxmnlm dvlxj nxvuddvj.
    le_ _____ ____ __e_ _______, _______ le___ __e_lle_.

    par fréquence décroissante dans le texte chiffré    : jvmdnxbluhgiwz
    par fréquence décroissante dans la langue française : esaitnrulodcpmvqfbghjxyzwk

    Entrer une substitution (entrer 'ab' pour remplacer a par b, entrer 'a' pour effacer la substitution enregistrée pour a) :
    > js

    dvj hgimj jnbm mxvj wuzbnbj, jlxmnlm dvlxj nxvuddvj.
    les ____s s___ __es ______s, s______ le__s __e_lles.

    par fréquence décroissante dans le texte chiffré    : jvmdnxbluhgiwz
    par fréquence décroissante dans la langue française : esaitnrulodcpmvqfbghjxyzwk

    Entrer une substitution (entrer 'ab' pour remplacer a par b, entrer 'a' pour effacer la substitution enregistrée pour a) :
    > hc

    dvj hgimj jnbm mxvj wuzbnbj, jlxmnlm dvlxj nxvuddvj.
    les c___s s___ __es ______s, s______ le__s __e_lles.

    par fréquence décroissante dans le texte chiffré    : jvmdnxbluhgiwz
    par fréquence décroissante dans la langue française : esaitnrulodcpmvqfbghjxyzwk

    Entrer une substitution (entrer 'ab' pour remplacer a par b, entrer 'a' pour effacer la substitution enregistrée pour a) :
    > gh

    dvj hgimj jnbm mxvj wuzbnbj, jlxmnlm dvlxj nxvuddvj.
    les ch__s s___ __es ______s, s______ le__s __e_lles.

    par fréquence décroissante dans le texte chiffré    : jvmdnxbluhgiwz
    par fréquence décroissante dans la langue française : esaitnrulodcpmvqfbghjxyzwk

    Entrer une substitution (entrer 'ab' pour remplacer a par b, entrer 'a' pour effacer la substitution enregistrée pour a) :
    > ia

    dvj hgimj jnbm mxvj wuzbnbj, jlxmnlm dvlxj nxvuddvj.
    les cha_s s___ __es ______s, s______ le__s __e_lles.

    par fréquence décroissante dans le texte chiffré    : jvmdnxbluhgiwz
    par fréquence décroissante dans la langue française : esaitnrulodcpmvqfbghjxyzwk

    Entrer une substitution (entrer 'ab' pour remplacer a par b, entrer 'a' pour effacer la substitution enregistrée pour a) :
    > mt

    dvj hgimj jnbm mxvj wuzbnbj, jlxmnlm dvlxj nxvuddvj.
    les chats s__t t_es ______s, s__t__t le__s __e_lles.

    par fréquence décroissante dans le texte chiffré    : jvmdnxbluhgiwz
    par fréquence décroissante dans la langue française : esaitnrulodcpmvqfbghjxyzwk

    Entrer une substitution (entrer 'ab' pour remplacer a par b, entrer 'a' pour effacer la substitution enregistrée pour a) :
    >

Alexandre Bintz <alexandre.bintz@gmail.com>
