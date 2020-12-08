var geschichte = {
    situationen: [
        {
            id: 0,
            auswahlText: "Im Museum",
            "text":
            "<br> *** Die Mumie des Schreckens ***<br>\
            Ein Textadventure<br>Version 2.16 Pug-Software",
            ziele: [1]
        },
        {
            id: 1,
            auswahlText: "Du betrittst das Museum",
            text: "Du bist viel zu spät in das alte Museum gekommen. \
            Dir bleibt nur noch wenig Zeit, bis das Museum schließt.\
            Der erste Gong ist ertönt, Zeit, sich zum Ausgang zu begeben.",
            ziele: [2, 3]
        },
        {
            id: 2,
            auswahlText: "Du schaust Dir ganz schnell noch den Nebenraum an?",
            text: "Du gehst noch schnell in den Gang, der von dem Hauptraum abzweigt. \
            Zahlreiche Artefakte einer vergangenen Epoche sind ausgestellt.\
            Du vergisst die Zeit und überhörst sogar den letzten Gong. \
            Plötzlich wird es dunkel, als alle Lichter ausgeschaltet werden.",
            ziele: [4]
        },
        {
            id: 3,
            auswahlText: "Du gehst zum Ausgang?",
            text: "Du machst dich schnellen Schrittes auf den Weg zum Ausgang. \
            Du willst dich beeilen, doch durch deine große Hast rutscht du aus und stürzt.\
            Du schlägst mit dem Kopf auf und wirst bewusstlos.",
            ziele: [4]
        },
        {
            id: 4,
            auswahlText: "In die Dunkelheit?",
            text: "Es ist vollkommen dunkel. Für einen Moment bist du orientierungslos. \
            Du willst Dein Handy herausholen um Licht zu machen, als du Geräusche hörst.\
            Sie kommen offenbar aus einem Nebenraum. Es hört sich an, als würde jemand \
            schwere Gegenstände verschieben oder einen schweren Sack über den Boden \
            schleifen?",
            ziele: [5, 6]
        },
        {
            id: 5,
            auswahlText: "Du machst das Licht an?",
            text: "Du holst Dein Handy aus der Gesäßtasche und aktivierst die Beleuchtung.\
            Wenigstens kannst Du jetzt sehen was sich direkt in der Nähe befindet. Die Geräusche aus dem \
            Nebenraum sind nicht mehr zu hören.",
            ziele: [7, 8]
        },
        {
            id: 6,
            auswahlText: "Du rufst um Hilfe?",
            text: "Erst leise, dann immer lauter rufst Du \"Hallo, hallo?! Ist da jemand?\"\
            Niemand antwortet, auch die Geräusche aus dem Nebenraum sind nicht mehr zu hören.",
            ziele: [7, 8]
        },
        {
            id: 7,
            auswahlText: "Du gehst langsam und vorsichtig zum Ausgang?",
            text: "Du gehst leise und vorsichtig in Richtung Ausgang. Du hast das Gefühl, \
            als wärst Du nicht alleine, aber Du kannst niemanden sehen oder hören. \
            <br>Du erreichst den Ausgang und schaffst es eine Fluchttür zu öffnen, die laut \
            hinter Dir zuschlägt. Du atmest tief durch, die Luft ist kalt.\
            <br>Du bist froh aus dem Museum herausgekommen zu sein, aber Du fragst Dich was diese \
            seltsamen Geräusche verursacht haben mag. Es fröstelt Dich beim Gedanken daran. \
            Leider wirst Du es wohl nie herausfinden.<br><br>\
            Das ist das Ende der Geschichte...",
            ziele: []
        },
        {
            id: 8,
            auswahlText: "Du gehst in den Raum aus dem die Geräusche kamen?",
            text: "Es ist dunkel als Du den Raum betrittst. Dein Handy leuchtet den Raum \
            kaum aus. Auf den ersten Blick fällt Dir nur auf, dass einige Vitrinen scheinbar  \
            etwas verrückt sind. \
            Erst nach einem Moment bemerkst Du, dass \
            der Deckel eines alten ägyptischen Sarkophags verschoben ist und den Blick in \
            das leere Innere ermöglicht.",
            ziele: [7, 9]
        },
        {
            id: 9,
            auswahlText: "Du durchsuchst den Raum weiter?",
            text: "Du kannst in der Dunkelheit kaum etwas erkennen. Das Licht Deines Handys \
            leuchtet kaum zwei, drei Meter weit. Plötzlich wird Dir wird schwindelig \
            und alles vor Dir scheint sich zu drehen. Weiter hinten im Raum kannst Du schemenhaft eine große \
            Gestalt erkennen.",
            ziele: [10, 20]
        },
        {
            id: 10,
            auswahlText: "Du gehst in die Richtung der Gestalt?",
            text: "Langsam gehst Du auf die Gestalt zu, als Du plötzlich erkennen kannst wer da steht. \
            Ein dicker Mann im Weihnachtskostüm steht vor Dir. Zu seinen Füßen steht ein \
            großer Sack. Mit einem lauten \"Hohoho\" hält er Dir grinsend ein großes \
            Paket entgegen. Er sieht genauso aus, wie Du Dir als Kind den Weihnachtsmann \
            vorgestellt hast.",
            ziele: [12, 11]
        },
        {
            id: 11,
            auswahlText: "Du reibst Dir verwundert die Augen?",
            text: "Verwundert reibst Du Dir die Augen. Da stimmt etwas nicht. \
            Es gibt keine Weihnachtsmänner, die nachts in einem geschlossenen Museum \
            Geschenke verteilen. Und da ist immer noch dieses seltsame Schwindelgefühl. \
            Das kann alles nicht sein! Als Du wieder zu dem Weihnachtsmann blickst, \
            ist er verschwunden. Zu Deinem Entsetzen siehst Du eine lebendige Mumie, dort \
            wo gerade noch der Weihnachtsmann stand. Statt eines Geschenks, greifen lange \
            Arme nach Dir.",
            ziele: [20, 30]
        },
        {
            id: 12,
            auswahlText: "Du nimmst das Geschenk?",
            text: "Oh, wie wundervoll! Freudig willst Du das Geschenk nehmen, aber das Schwindelgefühl \
            wird immer schlimmer. Du sackst bewusstlos in Dich zusammen.<br>Am nächsten Morgen wird man \
            eine mumifizierte Leiche in diesem Raum finden.<br>\
            Das ist das Ende - das ist Dein Ende!",
            ziele: []
        },
        {
            id: 20,
            auswahlText: "Du rennst panisch davon?",
            text: "Du rennst panisch in Richtung der Tür. Fast hast Du die Tür erreicht, als Du seltsame \
            Laute hinter Dir hörst, fast so als würde etwas in einer alten Sprache gerufen. \
            Du sackst bewusstlos in Dich zusammen.<br>Am nächsten Morgen wird man \
            eine mumifizierte Leiche in diesem Raum finden.<br>\
            Das ist das Ende - das ist Dein Ende!",
            ziele: []
        },
        {
            id: 20,
            auswahlText: "Du gehst drehst Dich um und gehst zum Ausgang?",
            text: "Du gehst rasch in Richtung Ausgang. Als Du durch die Gänge gehst, hast Du das Gefühl \
            als ob Dir jemand folgen würde, aber Du kannst niemanden sehen oder hören. \
            <br>Du erreichst den Ausgang und schaffst es eine Fluchttür zu öffnen, die laut \
            hinter Dir zuschlägt. Müde kommst Du schließlich zu Hause an.\
            <br>Auch wenn Du froh bist aus dem Museum herausgekommen zu sein, fragst Du Dich was diese \
            seltsamen Geräusche verursacht haben mag. Nun, leider wirst Du es wohl nie herausfinden denn... <br><br>\
            ...das ist das Ende der Geschichte.",
            ziele: []
        },
        {
            id: 30,
            auswahlText: "Du musst Dir ganz schnell etwas Originelles überlegen?",
            text: "Du überlegst fieberhaft was Du tun könntest, als Dir ein großes, \
            rot schimmerndes Amulett auffällt, dass um den Hals der Mumie hängt.",
            ziele: [31, 40]
        },
        {
            id: 31,
            auswahlText: "Du greifst nach dem Amulett?",
            text: "Du stürzt Dich nach vorne um der Mumie die Kette mit dem Amulett vom Hals zu reißen. \
            Die Mumie bewegt sich erschreckend schnell, aber Du bist schneller. Du ergreifst das Amulett.\
            Als Du es berührst spürst Du eine unglaubliche Hitze, die von dem roten Stein auszugehen scheint.",
            ziele: [40, 32]
        },
        {
            id: 32,
            auswahlText: "Du greifst trotzdem nach dem Amulett?",
            text: "Als Du das Amulett der Mumie von Hals reißt, durchströmt Dich eine unglaubliche Hitze \
            und alles ist in ein strahlend helles Licht getaucht. Ein Licht \
            so hell, dass Du glaubst es körperlich zu spüren.\
            Es erscheint Dir als wäre eine Ewigkeit vergangen, als es plötzlich wieder dunkel wird. \
            Die Mumie ist verschwunden und als Du Dich umblickst ist auch der Sarkophag \
            verschlossen. Alle Gegenstände und Vitrinen stehen scheinbar unberührt im Raum.",
            ziele: [35, 36]
        },
        {
            id: 35,
            auswahlText: "Du gehst drehst Dich um und gehst zum Ausgang?",
            text: "Du gehst rasch in Richtung Ausgang. \
            <br>Du erreichst den Ausgang und öffnest eine Fluchttür, die laut \
            hinter Dir zuschlägt. Müde kommst Du schließlich zu Hause an.\
            <br>Du bist froh unversehrt aus dem Museum herausgekommen zu sein... <br><br>\
            ...das ist das Ende der Geschichte.",
            ziele: []
        },
        {
            id: 36,
            auswahlText: "Du öffnest den Sarkophag der Mumie?",
            text: "Du musst wissen was hier passiert ist und was hier vor sich geht!\
            \"Koste es was es wolle\", aber bei diesem Gedanken bekommst Du Angst vor Dir selbst.\
            Das muss ein unheilvoller Einfluss sein, der von dem Sarkophag ausgeht. Du atmest \
            tief ein und beschließt zu gehen.",
            ziele: [35]
        },
        {
            id: 40,
            auswahlText: "Du rennst zu dem offenen Sarkophag der Mumie?",
            text: "Du rennst zu dem offenen Sarkophag, denn hier hat das Übel seinen Ursprung und \
            hier muss es auch wieder zu einem Ende gebracht werden. Du blickst zur Mumie, doch sie ist \
            nicht mehr zu sehen - als Du plötzlich eine Berührung auf Deiner Schulter spürst. Entsetzt \
            blickst Du Dich um und blickst in die toten Augen der Mumie. <br>\
            Du sackst bewusstlos in Dich zusammen.<br>Am nächsten Morgen wird man \
            eine mumifizierte Leiche in diesem Raum finden.<br>\
            Das ist das Ende - das ist Dein Ende!",
            ziele: []
        },

    ]
};
