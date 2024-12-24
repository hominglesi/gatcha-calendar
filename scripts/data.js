var eventTemplates = JSON.parse(`
{
    "templates": [
        {   "template": "leyLineOverflow", "name": "Ley Line Overflow", "game": "genshin", 
            "image": "layline-overflow", "color": "#172B4B"    
        },
        {   "template": "spiralAbyss", "name": "Spiral Abyss", "game": "genshin", 
            "category": "abyss", "image": "spiral-abyss", "color": "#2F2B60"    
        },
        {   "template": "imaginariumTheather", "name": "Imaginarium Theather", "game": "genshin",
            "category": "theather", "image": "imaginarium-theather", "color": "#1E2973" 
        },
        {   "template": "memoryOfChaos", "name": "Memory of Chaos", "game": "starrail",
            "category": "moc", "image": "memory-chaos", "color": "#221F39"
        },
        {   "template": "apocalypticShadow", "name": "Apocalyptic Shadow", "game": "starrail",
            "category": "apocalyptic", "image": "apocalyptic-shadow", "color": "#2C2A61"
        },
        {   "template": "pureFiction", "name": "Pure Fiction", "game": "starrail",
            "category": "pf", "image": "pure-fiction", "color": "#122747"
        },
        {   "template": "towerOfAdversity", "name": "Tower of Adversity", "game": "wuwa",
            "category": "tower", "image": "adversity-tower", "color": "#223958"
        },
        {
            "template": "planarFissure", "name": "Planar Fissure", "game": "starrail", 
            "image": "planar-fissure", "color": "#151B4D"
        },
        {
            "template": "gardenOfPlenty", "name": "Garden of Plenty", "game": "starrail", 
            "image": "garden-plenty", "color": "#383A4B"
        },
        {
            "template": "realmOfTheStrange", "name": "Realm of the Strange", "game": "starrail", 
            "image": "realm-strange", "color": "#131D4C"
        },
        {
            "template": "chordCleansing", "name": "Chord Cleansing", "game": "wuwa", 
            "image": "chord-clensing", "color": "#05161E"
        },
        {
                "template": "bountifulCrescendo", "name": "Bountiful Crescendo", "game": "wuwa", 
                "image": "bountiful-crescendo", "color": "#101115"
        }
    ]
}`);

function processEventData(eventData){
    for (let i = 0; i < eventData.events.length; i++) {
        var event = eventData.events[i];

        for (let j = 0; j < eventTemplates.templates.length; j++) {
            var template = eventTemplates.templates[j];
            
            if(event.template == template.template){
                Object.keys(template).forEach(key => {
                    if(event[key] == undefined)
                        event[key] = template[key];
                })
            }
        }
    }

    return eventData;
};

var eventData = processEventData(JSON.parse(`
{
    "events": [
        {
            "name": "Mutual Security Enhancing Simulation", "game": "genshin", "image": "mutual-security", "color": "#B48A72",
            "category": "event", "startTime": "2024-06-07T09:00:00Z", "endTime": "2024-06-17T02:59:59Z",
            "link": "https://www.hoyolab.com/article/29523218"
        },
        {
            "name": "Record of Reflective Writing", "game": "genshin", "image": "recollective-writing", "color": "#7F8866",
            "category": "event", "startTime": "2024-06-18T09:00:00Z", "endTime": "2024-06-24T02:59:59Z",
            "link": "https://www.hoyolab.com/article/29958398"
        },
        {
            "name": "Endless Forms Most Martial", "game": "genshin", "image": "endless-forms", "color": "#515277",
            "category": "event", "startTime": "2024-06-25T09:00:00Z", "endTime": "2024-07-01T02:59:59Z",
            "link": "https://www.hoyolab.com/article/30192615"
        },
        {
            "name": "Spino Doubleblaster", "game": "genshin", "image": "spino-doubleblaster", "color": "#89B3D2",
            "category": "event", "startTime": "2024-07-02T09:00:00Z", "endTime": "2024-07-08T02:59:00Z",
            "link": "https://www.hoyolab.com/article/30443958"
        },
        {   
            "template": "leyLineOverflow", "category": "event",
            "startTime": "2024-07-08T03:00:00Z", "endTime": "2024-07-15T02:59:00Z",
            "link": "https://www.hoyolab.com/article/30689501" 
        },
        {
            "name": "Summertide Scales and Tales", "game": "genshin", "image": "summertide-scales", "color": "#559CDB",
            "category": "event", "startTime": "2024-07-17T03:00:00Z", "endTime": "2024-08-27T22:59:59Z",
            "link": "https://www.hoyolab.com/article/31070415"
        },
        {
            "name": "Traces of Artistry", "game": "genshin", "image": "traces-artistry", "color": "#D17A43",
            "category": "event", "startTime": "2024-08-28T03:59:59Z", "endTime": "2024-09-16T02:59:59Z",
            "link": "https://www.hoyolab.com/article/32490642"
        },
        {
            "name": "Of Thorns and Crowns", "game": "genshin", "image": "thorns-crowns", "color": "#CC764B",
            "category": "event", "startTime": "2024-09-20T09:00:00Z", "endTime": "2024-09-30T02:59:59Z",
            "link": "https://www.hoyolab.com/article/33358228"
        },
        {
            "name": "Aphid Treasure Trace", "game": "genshin", "image": "aphid-treasure", "color": "#BD556D",
            "category": "event", "startTime": "2024-10-08T09:00:00Z", "endTime": "2024-10-21T02:59:59Z",
            "link": "https://www.hoyolab.com/article/34043094"
        },
        {
            "name": "Chromatic Ode of Candies and Roses", "game": "genshin", "image": "chromatic-ode", "color": "#B2D5B7",
            "category": "event", "startTime": "2024-10-23T09:00:00Z", "endTime": "2024-11-07T02:59:59Z",
            "link": "https://www.hoyolab.com/article/34402598"
        },
        {
            "name": "Marvelous Merchandise", "game": "genshin", "image": "marvelous-merchandise", "color": "#B2D5B7",
            "category": "event", "startTime": "2024-11-11T09:00:00Z", "endTime": "2024-11-18T02:59:59Z",
            "link": "https://www.hoyolab.com/article/34826357"
        },
        {
            "name": "Iktomi Spiritseeking Scrolls", "game": "genshin", "image": "iktomi-scrolls", "color": "#0a285e",
            "category": "event", "startTime": "2024-11-28T09:00:00Z", "endTime": "2024-12-16T02:59:59Z",
            "link": "https://www.hoyolab.com/article/35194805"
        },
        {
            "name": "Exercise Surging Storm", "game": "genshin", "image": "surging-storm", "color": "#171725",
            "category": "event", "startTime": "2024-12-18T09:00:00Z", "endTime": "2024-12-30T02:59:59Z",
            "link": "https://www.hoyolab.com/article/35621396"
        },
        {
            "name": "Outside the Canvas", "game": "genshin", "image": "outside-canvas", "color": "#94C5E4",
            "category": "event2", "startTime": "2024-07-29T09:00:00Z", "endTime": "2024-08-08T02:59:59Z",
            "link": "https://www.hoyolab.com/article/31507365"
        },
        {
            "name": "Energy Amplifier: Lemma", "game": "genshin", "image": "energy-amplifier", "color": "#198CA3",
            "category": "event2", "startTime": "2024-08-12T09:00:00Z", "endTime": "2024-08-26T02:59:59Z",
            "link": "https://www.hoyolab.com/article/31982879"
        },
        {
            "name": "Dodoco's Boom-Bastic Escapades", "game": "genshin", "image": "dodocos-escapades", "color": "#93CABD",
            "category": "event2", "startTime": "2024-09-09T09:00:00Z", "endTime": "2024-09-23T02:59:59Z",
            "link": "https://www.hoyolab.com/article/33001020"
        },
        {
            "name": "Mementos of Teyvat", "game": "genshin", "image": "mementos-teyvat", "color": "#18244E",
            "category": "event2", "startTime": "2024-09-28T09:00:00Z", "endTime": "2024-10-08T02:59:59Z",
            "link": "https://www.hoyolab.com/article/33642499"
        },
        {
            "name": "Reminiscent Regimen: Thrill", "game": "genshin", "image": "reminiscent-regimen", "color": "#B7C455",
            "category": "event2", "startTime": "2024-10-17T09:00:00Z", "endTime": "2024-10-28T02:59:59Z",
            "link": "https://www.hoyolab.com/article/34259331"
        },
        {
            "name": "Feast of Pursuit", "game": "genshin", "image": "feast-pursuit", "color": "#b27696",
            "category": "event2", "startTime": "2024-11-01T09:00:00Z", "endTime": "2024-11-15T02:59:59Z",
            "link": "https://www.hoyolab.com/article/34613230"
        },
        {
            "name": "Claw Convoy", "game": "genshin", "image": "claw-convoy", "color": "#B2D5B7",
            "category": "event2", "startTime": "2024-11-22T09:00:00Z", "endTime": "2024-12-02T02:59:59Z",
            "link": "https://www.hoyolab.com/article/35053992"
        },
        {
            "name": "Adventurer's Trials: Metamorphosis", "game": "genshin", "image": "adventurers-trials", "color": "#4587a3",
            "category": "event2", "startTime": "2024-12-11T09:00:00Z", "endTime": "2024-12-23T02:59:59Z",
            "link": "https://www.hoyolab.com/article/35477560"
        },
        {   
            "template": "leyLineOverflow", "category": "event2",
            "startTime": "2024-12-23T03:00:00Z", "endTime": "2024-12-30T02:59:00Z",
            "link": "https://www.hoyolab.com/article/35743130" 
        },
        {
            "name": "Bing-Bang Finchball", "game": "genshin", "image": "bing-bang", "color": "#9ABC1E",
            "category": "event3", "startTime": "2024-08-06T09:00:00Z", "endTime": "2024-08-19T02:59:59Z",
            "link": "https://www.hoyolab.com/article/31777295"
        },
        {
            "name": "Illuminating Lightning", "game": "genshin", "image": "char/clorinde", "color": "#5243B1",
            "category": "character", "startTime": "2024-06-05T03:00:00Z", "endTime": "2024-06-25T16:59:59Z",
            "link": "https://www.hoyolab.com/article/29435758"
        },
        {
            "name": "Caution in Confidence", "game": "genshin", "image": "char/alhaitham", "color": "#2D736C",
            "category": "character2", "startTime": "2024-06-05T03:00:00Z", "endTime": "2024-06-25T16:59:59Z",
            "link": "https://www.hoyolab.com/article/29435758"
        },
        {
            "name": "Romaritime Meluserenity", "game": "genshin", "image": "char/sigewinne", "color": "#3F8CC4",
            "category": "character", "startTime": "2024-06-25T17:00:00Z", "endTime": "2024-07-16T13:59:59Z",
            "link": "https://www.hoyolab.com/article/30071782"
        },
        {
            "name": "Chanson of Many Waters", "game": "genshin", "image": "char/furina", "color": "#5375ED",
            "category": "character2", "startTime": "2024-06-25T17:00:00Z", "endTime": "2024-07-16T13:59:59Z",
            "link": "https://www.hoyolab.com/article/30071782"
        },
        {
            "name": "In the Name of the Rosula", "game": "genshin", "image": "char/navia", "color": "#DB985D",
            "category": "character", "startTime": "2024-07-17T03:00:00Z", "endTime": "2024-08-06T16:59:59Z",
            "link": "https://www.hoyolab.com/article/31070419"
        },
        {
            "name": "Twirling Lotus", "game": "genshin", "image": "char/nilou", "color": "#95BCD0",
            "category": "character2", "startTime": "2024-07-17T03:00:00Z", "endTime": "2024-08-06T16:59:59Z",
            "link": "https://www.hoyolab.com/article/31070419"
        },
        {
            "name": "Ambrosial Essence", "game": "genshin", "image": "char/emilie", "color": "#34795E",
            "category": "character", "startTime": "2024-08-06T17:00:00Z", "endTime": "2024-08-27T13:59:59Z",
            "link": "https://www.hoyolab.com/article/31676908"
        },
        {
            "name": "Discerner of Enigmas", "game": "genshin", "image": "char/yelan", "color": "#6471D1",
            "category": "character2", "startTime": "2024-08-06T17:00:00Z", "endTime": "2024-08-27T13:59:59Z",
            "link": "https://www.hoyolab.com/article/31676908"
        },
        {
            "name": "Sharktacular Surfari", "game": "genshin", "image": "char/mualani", "color": "#6BACDD",
            "category": "character", "startTime": "2024-08-28T03:00:00Z", "endTime": "2024-09-17T16:59:59Z",
            "link": "https://www.hoyolab.com/article/32490651"
        },
        {
            "name": "Leaves in the Wind", "game": "genshin", "image": "char/kazuha", "color": "#8CC8CB",
            "category": "character2", "startTime": "2024-08-28T03:00:00Z", "endTime": "2024-09-17T16:59:59Z",
            "link": "https://www.hoyolab.com/article/32490651"
        },
        {
            "name": "Seeker of Flame-Wrought Secrets", "game": "genshin", "image": "char/kinich", "color": "#326E78",
            "category": "character", "startTime": "2024-09-17T17:00:00Z", "endTime": "2024-10-08T13:59:59Z",
            "link": "https://www.hoyolab.com/article/33183044"
        },
        {
            "name": "Reign of Serenity", "game": "genshin", "image": "char/raiden", "color": "#724EBC",
            "category": "character2", "startTime": "2024-09-17T17:00:00Z", "endTime": "2024-10-08T13:59:59Z",
            "link": "https://www.hoyolab.com/article/33183044"
        },
        {
            "name": "Forgefire's Blessing", "game": "genshin", "image": "char/xilonen", "color": "#E5A344",
            "category": "character", "startTime": "2024-10-09T03:00:00Z", "endTime": "2024-10-29T16:59:59Z",
            "link": "https://www.hoyolab.com/article/34010550"
        },
        {
            "name": "Of Silken Clouds Woven", "game": "genshin", "image": "char/chiori", "color": "#C77C4A",
            "category": "character2", "startTime": "2024-10-09T03:00:00Z", "endTime": "2024-10-29T16:59:59Z",
            "link": "https://www.hoyolab.com/article/34010550"
        },
        {
            "name": "The Moongrass' Enlightenment", "game": "genshin", "image": "char/nahida", "color": "#81a65c",
            "category": "character", "startTime": "2024-10-29T17:00:00Z", "endTime": "2024-11-19T13:59:59Z",
            "link": "https://www.hoyolab.com/article/34470331"
        },
        {
            "name": "Moment of Bloom", "game": "genshin", "image": "char/hutao", "color": "#6e2c2e",
            "category": "character2", "startTime": "2024-10-29T17:00:00Z", "endTime": "2024-11-19T13:59:59Z",
            "link": "https://www.hoyolab.com/article/34470331"
        },
        {
            "name": "Piercing Shot's Crimson Wake", "game": "genshin", "image": "char/chasca", "color": "#4a0d1b",
            "category": "character", "startTime": "2024-11-20T03:00:00Z", "endTime": "2024-12-10T16:59:59Z",
            "link": "https://www.hoyolab.com/article/35015713"
        },
        {
            "name": "Conjuring Chiaroscuro", "game": "genshin", "image": "char/lyney", "color": "#591b2e",
            "category": "character2", "startTime": "2024-11-20T03:00:00Z", "endTime": "2024-12-10T16:59:59Z",
            "link": "https://www.hoyolab.com/article/35015713"
        },
        {
            "name": "Decree of the Deeps", "game": "genshin", "image": "char/neuvillette", "color": "#5b9cbf",
            "category": "character", "startTime": "2024-12-10T17:00:00Z", "endTime": "2024-12-31T13:59:59Z",
            "link": "https://www.hoyolab.com/article/35393826"
        },
        {
            "name": "Gentry of Hermitage", "game": "genshin", "image": "char/zhongli", "color": "#83462b",
            "category": "character2", "startTime": "2024-12-10T17:00:00Z", "endTime": "2024-12-31T13:59:59Z",
            "link": "https://www.hoyolab.com/article/35393826"
        },
        {   "template": "spiralAbyss", "startTime": "2024-06-01T03:00:00Z", "endTime": "2024-06-16T02:59:59Z" },
        {   "template": "spiralAbyss", "startTime": "2024-06-16T03:00:00Z", "endTime": "2024-07-16T02:59:59Z" },
        {   "template": "spiralAbyss", "startTime": "2024-07-16T03:00:00Z", "endTime": "2024-08-16T02:59:59Z" },
        {   "template": "spiralAbyss", "startTime": "2024-08-16T03:00:00Z", "endTime": "2024-09-16T02:59:59Z" },
        {   "template": "spiralAbyss", "startTime": "2024-09-16T03:00:00Z", "endTime": "2024-10-16T02:59:59Z" },
        {   "template": "spiralAbyss", "startTime": "2024-10-16T03:00:00Z", "endTime": "2024-11-16T02:59:59Z" },
        {   "template": "spiralAbyss", "startTime": "2024-11-16T03:00:00Z", "endTime": "2024-12-16T02:59:59Z" },
        {   "template": "spiralAbyss", "startTime": "2024-12-16T03:00:00Z", "endTime": "2025-01-16T02:59:59Z" },
        {   "template": "imaginariumTheather", "startTime": "2024-07-01T03:00:00Z", "endTime": "2024-08-01T02:59:59Z" },
        {   "template": "imaginariumTheather", "startTime": "2024-08-01T03:00:00Z", "endTime": "2024-09-01T02:59:59Z" },
        {   "template": "imaginariumTheather", "startTime": "2024-09-01T03:00:00Z", "endTime": "2024-10-01T02:59:59Z" },
        {   "template": "imaginariumTheather", "startTime": "2024-10-01T03:00:00Z", "endTime": "2024-11-01T02:59:59Z" },
        {   "template": "imaginariumTheather", "startTime": "2024-11-01T03:00:00Z", "endTime": "2024-12-01T02:59:59Z" },
        {   "template": "imaginariumTheather", "startTime": "2024-12-01T03:00:00Z", "endTime": "2025-01-01T02:59:59Z" },
        {
            "name": "Heartfelt Doodlings", "game": "genshin", "image": "heartfelt-doodlings", "color": "#076288",
            "category": "web", "startTime": "2024-06-20T04:00:00Z", "endTime": "2024-06-26T15:59:59Z",
            "link": "https://www.hoyolab.com/article/30066358"
        },
        {
            "name": "Fragrant Fantasy", "game": "genshin", "image": "fragrant-fantasy", "color": "#6AA2BB",
            "category": "web", "startTime": "2024-07-08T16:00:00Z", "endTime": "2024-07-15T15:59:59Z",
            "link": "https://www.hoyolab.com/article/30815333"
        },
        {
            "name": "An Introduction to Perfumery", "game": "genshin", "image": "introduction-perfumery", "color": "#8EA831",
            "category": "web", "startTime": "2024-08-01T04:00:00Z", "endTime": "2024-08-07T15:59:59Z",
            "link": "https://www.hoyolab.com/article/31671442"
        },
        {
            "name": "Off We Go to the Nation of Pyro!", "game": "genshin", "image": "nation-pyro", "color": "#A84F1F",
            "category": "web", "startTime": "2024-08-21T16:00:00Z", "endTime": "2024-09-24T15:59:59Z",
            "link": "https://www.hoyolab.com/article/32370310"
        },
        {
            "name": "Teyvat's Special Delivery", "game": "genshin", "image": "teyvats-delivery", "color": "#87AFC9",
            "category": "web", "startTime": "2024-09-27T04:00:00Z", "endTime": "2024-10-07T15:59:59Z",
            "link": "https://www.hoyolab.com/article/33673565"
        },
        {
            "name": "The Meaning of Flight", "game": "genshin", "image": "meaning-flight", "color": "#4e95ea",
            "category": "web", "startTime": "2024-11-15T04:00:00Z", "endTime": "2024-11-21T15:59:59Z",
            "link": "https://www.hoyolab.com/article/34952162"
        },
        {
            "name": "Stand With Mavuika", "game": "genshin", "image": "stand-mavuika", "color": "#fc7737",
            "category": "web", "startTime": "2024-12-20T03:00:00Z", "endTime": "2025-01-08T02:59:59Z",
            "link": "https://www.hoyolab.com/article/35726568"
        },
        {
            "name": "Starlight Reverie", "game": "genshin", "image": "starlight-reverie", "color": "#ACBAB4",
            "category": "event3", "startTime": "2024-09-28T16:00:00Z", "endTime": "2024-10-12T15:59:59Z",
            "link": "https://www.hoyolab.com/article/33700041"
        },
        {
            "name": "Guide to Wondrous Sights", "game": "genshin", "image": "wondrous-sights", "color": "#3C7AD5",
            "category": "web2", "startTime": "2024-08-23T04:00:00Z", "endTime": "2024-08-30T15:59:59Z",
            "link": "https://www.hoyolab.com/article/32404017"
        },
        {
            "name": "Saurian Egg Adventures", "game": "genshin", "image": "saurian-adventures", "color": "#39C7B4",
            "category": "web2", "startTime": "2024-09-12T04:00:00Z", "endTime": "2024-09-19T15:59:59Z",
            "link": "https://www.hoyolab.com/article/33177470"
        },
        {
            "name": "Urgent Orders", "game": "genshin", "image": "urgent-orders", "color": "#6C5C4D",
            "category": "web2", "startTime": "2024-10-04T04:00:00Z", "endTime": "2024-10-11T15:59:59Z",
            "link": "https://www.hoyolab.com/article/33914247"
        },
        {
            "name": "Clockie: Dreamjoy Memoir", "game": "starrail", "image": "dreamjoy-memoir", "color": "#302F32",
            "category": "event", "startTime": "2024-05-08T03:00:00Z", "endTime": "2024-06-17T02:59:59Z",
            "link": "https://www.hoyolab.com/article/28249917"
        },
        {
            "name": "Origami Bird Clash", "game": "starrail", "image": "bird-clash", "color": "#334D8B",
            "category": "event", "startTime": "2024-06-21T11:00:00Z", "endTime": "2024-07-29T02:59:59Z",
            "link": "https://www.hoyolab.com/article/30065149"
        },
        {
            "name": "Saga of Primaveral Blade", "game": "starrail", "image": "primaveral-blade", "color": "#7EADC2",
            "category": "event", "startTime": "2024-07-31T03:00:00Z", "endTime": "2024-09-09T02:59:59Z",
            "link": "https://www.hoyolab.com/article/31603306"
        },
        {
            "name": "Luminary Wardance Ceremony", "game": "starrail", "image": "luminary-wardance", "color": "#315286",
            "category": "event", "startTime": "2024-09-10T03:00:00Z", "endTime": "2024-10-21T02:59:59Z",
            "link": "https://www.hoyolab.com/article/33078161"
        },
        {
            "name": "Sound Hunt Ninjutsu Inscription", "game": "starrail", "image": "sound-hunt", "color": "#2d3434",
            "category": "event", "startTime": "2024-10-25T11:00:00Z", "endTime": "2024-12-02T02:59:59Z",
            "link": "https://www.hoyolab.com/article/34444603"
        },
        {
            "name": "Cosmic Home Décor Guide", "game": "starrail", "image": "cosmic-home", "color": "#3e4c77",
            "category": "event", "startTime": "2024-12-04T03:00:00Z", "endTime": "2025-01-13T02:59:59Z",
            "link": "https://www.hoyolab.com/article/35340664"
        },
        {
            "name": "The Legend of Galactic Baseballer", "game": "starrail", "image": "galactic-baseballer", "color": "#060434",
            "category": "event2", "startTime": "2024-05-29T11:00:00Z", "endTime": "2024-06-17T02:59:59Z",
            "link": "https://www.hoyolab.com/article/29125952"
        },
        {
            "template": "planarFissure", "category": "event2",
            "startTime": "2024-06-28T03:00:00Z", "endTime": "2024-07-05T02:59:59Z",
            "link": "https://www.hoyolab.com/article/30340877"
        },
        {
            "name": "Stellar Shimmer", "game": "starrail", "image": "stellar-shimmer", "color": "#17355B",
            "category": "event2", "startTime": "2024-07-05T11:00:00Z", "endTime": "2024-07-29T02:59:59Z",
            "link": "https://www.hoyolab.com/article/30587758"
        },
        {
            "name": "Operation Memoria Snapshot", "game": "starrail", "image": "operation-memoria", "color": "#475A7E",
            "category": "event2", "startTime": "2024-08-07T11:00:00Z", "endTime": "2024-08-19T02:59:59Z",
            "link": "https://www.hoyolab.com/article/31850204"
        },
        {
            "name": "Trailblaze: Friendship Is Magic!", "game": "starrail", "image": "trailblaze-friendship", "color": "#6E6864",
            "category": "event2", "startTime": "2024-08-21T11:00:00Z", "endTime": "2024-09-09T02:59:59Z",
            "link": "https://www.hoyolab.com/article/32273784"
        },
        {
            "template": "planarFissure", "category": "event2",
            "startTime": "2024-09-23T03:00:00Z", "endTime": "2024-09-30T02:59:59Z",
            "link": "https://www.hoyolab.com/article/32068176"
        },
        {
            "name": "Festive Revelry", "game": "starrail", "image": "festive-revelry", "color": "#22283F",
            "category": "event2", "startTime": "2024-09-30T11:00:00Z", "endTime": "2024-10-21T02:59:59Z",
            "link": "https://www.hoyolab.com/article/33739467"
        },
        {
            "name": "Mr. Cold Feet's Pop-Up Shop", "game": "starrail", "image": "popup-shop", "color": "#405378",
            "category": "event2", "startTime": "2024-10-31T11:00:00Z", "endTime": "2024-11-11T02:59:59Z",
            "link": "https://www.hoyolab.com/article/34613231"
        },
        {
            "name": "Shadow of the Ranger", "game": "starrail", "image": "shadow-ranger", "color": "#183f91",
            "category": "event2", "startTime": "2024-11-13T03:00:00Z", "endTime": "2024-12-02T02:59:59Z",
            "link": "https://www.hoyolab.com/article/34893777"
        },
        {
            "name": "Between the Frames...", "game": "starrail", "image": "between-frames", "color": "#252e4b",
            "category": "event2", "startTime": "2024-12-25T11:00:00Z", "endTime": "2025-01-25T02:59:59Z",
            "link": "https://www.hoyolab.com/article/35812193"
        },
        {
            "name": "Garden of Plenty", "game": "starrail", "image": "garden-plenty", "color": "#383A4B",
            "category": "event3", "startTime": "2024-06-07T03:00:00Z", "endTime": "2024-06-14T02:59:59Z",
            "link": "https://www.hoyolab.com/article/29574847"
        },
        {
            "template": "realmOfTheStrange", "category": "event3",
            "startTime": "2024-07-19T03:00:00Z", "endTime": "2024-07-26T02:59:59Z",
            "link": "https://www.hoyolab.com/article/31184271"
        },
        {
            "template": "planarFissure", "category": "event3",
            "startTime": "2024-08-14T03:00:00Z", "endTime": "2024-08-21T02:59:59Z",
            "link": "https://www.hoyolab.com/article/32068176"
        },
        {
            "template": "gardenOfPlenty", "category": "event3",
            "startTime": "2024-08-30T03:00:00Z", "endTime": "2024-09-06T02:59:59Z",
            "link": "https://www.hoyolab.com/article/32603828"
        },
        {
            "template": "realmOfTheStrange", "category": "event3",
            "startTime": "2024-10-11T03:00:00Z", "endTime": "2024-10-18T02:59:59Z",
            "link": "https://www.hoyolab.com/article/34134163"
        },
        {
            "template": "planarFissure", "category": "event3",
            "startTime": "2024-11-06T03:00:00Z", "endTime": "2024-11-13T02:59:59Z",
            "link": "https://www.hoyolab.com/article/34739115"
        },
        {
            "template": "gardenOfPlenty", "category": "event3",
            "startTime": "2024-11-22T03:00:00Z", "endTime": "2024-11-29T02:59:59Z",
            "link": "https://www.hoyolab.com/article/35080323"
        },
        {
            "template": "planarFissure", "category": "event3",
            "startTime": "2024-12-18T03:00:00Z", "endTime": "2024-12-25T02:59:59Z",
            "link": "https://www.hoyolab.com/article/34739115"
        },
        {
            "name": "Dusty Trail's Lone Star", "game": "starrail", "image": "boothill-banner", "color": "#988B92",
            "category": "character", "startTime": "2024-05-29T11:00:00Z", "endTime": "2024-06-18T13:59:59Z",
            "link": "https://www.hoyolab.com/article/29127114"
        },
        {
            "name": "Foreseen, Foreknown, Foretold", "game": "starrail", "image": "fuxuan-banner", "color": "#452A65",
            "category": "character2", "startTime": "2024-05-29T11:00:00Z", "endTime": "2024-06-18T13:59:59Z",
            "link": "https://www.hoyolab.com/article/29127114"
        },
        {
            "name": "Firefull Flyshine", "game": "starrail", "image": "firefly-banner", "color": "#34567C",
            "category": "character", "startTime": "2024-06-19T03:00:00Z", "endTime": "2024-07-10T10:59:59Z",
            "link": "https://www.hoyolab.com/article/29992036"
        },
        {
            "name": "Floral Triptych", "game": "starrail", "image": "ruanmei-banner", "color": "#48607C",
            "category": "character2", "startTime": "2024-06-19T03:00:00Z", "endTime": "2024-07-10T10:59:59Z",
            "link": "https://www.hoyolab.com/article/29992036"
        },
        {
            "name": "Lien on Life, Lease on Fate", "game": "starrail", "image": "jade-banner", "color": "#4940A5",
            "category": "character", "startTime": "2024-07-10T11:00:00Z", "endTime": "2024-07-30T13:59:59Z",
            "link": "https://www.hoyolab.com/article/30816396"
        },
        {
            "name": "Thorns of Scented Crown", "game": "starrail", "image": "argenti-banner", "color": "#C7AA9E",
            "category": "character2", "startTime": "2024-07-10T11:00:00Z", "endTime": "2024-07-30T13:59:59Z",
            "link": "https://www.hoyolab.com/article/30816396"
        },
        {
            "name": "Earth Hurled, Ether Curled", "game": "starrail", "image": "yunli-banner", "color": "#246176",
            "category": "character", "startTime": "2024-07-31T03:00:00Z", "endTime": "2024-08-21T10:59:59Z",
            "link": "https://www.hoyolab.com/article/31605001"
        },
        {
            "name": "Bloom in Gloom", "game": "starrail", "image": "huohuo-banner", "color": "#1D2E48",
            "category": "character2", "startTime": "2024-07-31T03:00:00Z", "endTime": "2024-08-21T10:59:59Z",
            "link": "https://www.hoyolab.com/article/31605001"
        },
        {
            "name": "Cauldron Contrivance", "game": "starrail", "image": "jiaoqiu-banner", "color": "#B47755",
            "category": "character", "startTime": "2024-08-21T11:00:00Z", "endTime": "2024-09-09T13:59:59Z",
            "link": "https://www.hoyolab.com/article/32306326"
        },
        {
            "name": "Sparkling Splendor", "game": "starrail", "image": "sparkle-banner", "color": "#0D2683",
            "category": "character2", "startTime": "2024-08-21T11:00:00Z", "endTime": "2024-09-09T13:59:59Z",
            "link": "https://www.hoyolab.com/article/32306326"
        },
        {
            "name": "Stormrider's Bolt", "game": "starrail", "image": "feixiao-banner", "color": "#6CB9BD",
            "category": "character", "startTime": "2024-09-10T03:00:00Z", "endTime": "2024-10-02T10:59:59Z",
            "link": "https://www.hoyolab.com/article/32306326"
        },
        {
            "name": "Indelible Coterie", "game": "starrail", "image": "indelible-coterie", "color": "#747FBD",
            "category": "character2", "startTime": "2024-09-10T03:00:00Z", "endTime": "2024-10-02T10:59:59Z",
            "link": "https://www.hoyolab.com/article/32306326"
        },
        {
            "name": "Let Scent Sink In", "game": "starrail", "image": "lingsha-banner", "color": "#5D473F",
            "category": "character", "startTime": "2024-10-02T11:00:00Z", "endTime": "2024-10-22T13:59:59Z",
            "link": "https://www.hoyolab.com/article/33777781"
        },
        {
            "name": "Sunset Clause", "game": "starrail", "image": "topaz-banner", "color": "#A2B2D4",
            "category": "character2", "startTime": "2024-10-02T11:00:00Z", "endTime": "2024-10-22T13:59:59Z",
            "link": "https://www.hoyolab.com/article/33777781"
        },
        {
            "name": "Eyes of a Ninja", "game": "starrail", "image": "rappa-banner", "color": "#5C64B1",
            "category": "character", "startTime": "2024-10-23T03:00:00Z", "endTime": "2024-11-13T10:59:59Z",
            "link": "https://www.hoyolab.com/article/34424519"
        },
        {
            "name": "Epochal Spectrum", "game": "starrail", "image": "danil-banner", "color": "#141E3A",
            "category": "character2", "startTime": "2024-10-23T03:00:00Z", "endTime": "2024-11-13T10:59:59Z",
            "link": "https://www.hoyolab.com/article/34424519"
        },
        {
            "name": "Words of Yore", "game": "starrail", "image": "acheron-banner", "color": "#414086",
            "category": "character", "startTime": "2024-11-13T11:00:00Z", "endTime": "2024-12-03T13:59:59Z",
            "link": "https://www.hoyolab.com/article/34892058"
        },
        {
            "name": "Gilded Imprisonment", "game": "starrail", "image": "aventurine-banner", "color": "#e5cc90",
            "category": "character2", "startTime": "2024-11-13T11:00:00Z", "endTime": "2024-12-03T13:59:59Z",
            "link": "https://www.hoyolab.com/article/34892058"
        },
        {
            "name": "Eyes to the Stars", "game": "starrail", "image": "sunday-banner", "color": "#32487a",
            "category": "character", "startTime": "2024-12-04T03:00:00Z", "endTime": "2024-12-25T10:59:59Z",
            "link": "https://www.hoyolab.com/article/35342567"
        },
        {
            "name": "Swirl of Heavenly Spear", "game": "starrail", "image": "jingyuan-banner", "color": "#afa09a",
            "category": "character2", "startTime": "2024-12-04T03:00:00Z", "endTime": "2024-12-25T10:59:59Z",
            "link": "https://www.hoyolab.com/article/35342567"
        },
        {
            "name": "The Long Voyage Home", "game": "starrail", "image": "fugue-banner", "color": "#4b312a",
            "category": "character", "startTime": "2024-12-25T11:00:00Z", "endTime": "2025-01-14T13:59:59Z",
            "link": "https://www.hoyolab.com/article/35814299"
        },
        {
            "name": "Firefull Flyshine", "game": "starrail", "image": "firefly-banner", "color": "#34567C",
            "category": "character2", "startTime": "2024-12-25T11:00:00Z", "endTime": "2025-01-14T13:59:59Z",
            "link": "https://www.hoyolab.com/article/35814299"
        },
        {   "template": "memoryOfChaos", "startTime": "2024-05-13T03:00:00Z", "endTime": "2024-06-19T02:59:59Z", 
            "category": "apocalyptic" },
        {   "template": "memoryOfChaos", "startTime": "2024-06-10T03:00:00Z", "endTime": "2024-07-22T02:59:59Z" },
        {   "template": "memoryOfChaos", "startTime": "2024-07-22T03:00:00Z", "endTime": "2024-09-02T02:59:59Z" },
        {   "template": "memoryOfChaos", "startTime": "2024-09-02T03:00:00Z", "endTime": "2024-10-14T02:59:59Z" },
        {   "template": "memoryOfChaos", "startTime": "2024-10-14T03:00:00Z", "endTime": "2024-11-25T02:59:59Z" },
        {   "template": "memoryOfChaos", "startTime": "2024-11-25T03:00:00Z", "endTime": "2025-01-06T02:59:59Z" },
        {   "template": "apocalypticShadow", "startTime": "2024-06-19T03:00:00Z", "endTime": "2024-08-05T02:59:59Z" },
        {   "template": "apocalypticShadow", "startTime": "2024-08-05T03:00:00Z", "endTime": "2024-09-16T02:59:59Z" },
        {   "template": "apocalypticShadow", "startTime": "2024-09-16T03:00:00Z", "endTime": "2024-10-28T02:59:59Z" },
        {   "template": "apocalypticShadow", "startTime": "2024-10-28T03:00:00Z", "endTime": "2024-12-09T02:59:59Z" },
        {   "template": "apocalypticShadow", "startTime": "2024-12-09T03:00:00Z", "endTime": "2025-01-20T02:59:59Z" },
        {   "template": "pureFiction", "startTime": "2024-05-27T03:00:00Z", "endTime": "2024-07-08T02:59:59Z" },
        {   "template": "pureFiction", "startTime": "2024-07-08T03:00:00Z", "endTime": "2024-08-19T02:59:59Z" },
        {   "template": "pureFiction", "startTime": "2024-08-19T03:00:00Z", "endTime": "2024-09-30T02:59:59Z" },
        {   "template": "pureFiction", "startTime": "2024-09-30T03:00:00Z", "endTime": "2024-11-11T02:59:59Z" },
        {   "template": "pureFiction", "startTime": "2024-11-11T03:00:00Z", "endTime": "2024-12-23T02:59:59Z" },
        {   "template": "pureFiction", "startTime": "2024-12-23T03:00:00Z", "endTime": "2025-02-03T02:59:59Z" },
        {
            "name": "Smoking Cool — The Universe! Pew! Pew! Grand Challenge!", "game": "starrail", "image": "pew-pew-challenge", "color": "#340704",
            "category": "web", "startTime": "2024-05-31T04:00:00Z", "endTime": "2024-06-07T03:59:59Z",
            "link": "https://www.hoyolab.com/article/29230738"
        },
        {
            "name": "Lady Bonajade Handbook", "game": "starrail", "image": "bonajade-handbook", "color": "#111834",
            "category": "web", "startTime": "2024-07-09T04:00:00Z", "endTime": "2024-07-16T15:59:59Z",
            "link": "https://www.hoyolab.com/article/30815713"
        },
        {
            "name": "Overdash Club", "game": "wuwa", "image": "overdash-club", "color": "#665B72",
            "category": "event", "startTime": "2024-05-30T03:00:00Z", "endTime": "2024-06-17T02:59:59Z",
            "link": "https://wutheringwaves.kurogames.com/en/main/news/detail/813"
        },
        {
            "template": "chordCleansing", "category": "event", 
            "startTime": "2024-06-20T03:00:00Z", "endTime": "2024-06-27T02:59:59Z",
            "link": "https://wutheringwaves.kurogames.com/en/main/news/detail/900"
        },
        {
            "name": "Traces of Mt. Firmament", "game": "wuwa", "image": "firmament-traces", "color": "#191713",
            "category": "event", "startTime": "2024-06-28T05:00:00Z", "endTime": "2024-08-13T02:59:59Z",
            "link": "https://wutheringwaves.kurogames.com/en/main/news/detail/923"
        },
        {
            "name": "By Moon's Grace", "game": "wuwa", "image": "moons-grace", "color": "#A97E57",
            "category": "event", "startTime": "2024-08-15T06:00:00Z", "endTime": "2024-09-28T15:00:00Z",
            "link": "https://wutheringwaves.kurogames.com/en/main/news/detail/923"
        },
        {
            "name": "Where Stars Slumber", "game": "wuwa", "image": "stars-slumber", "color": "#37678D",
            "category": "event", "startTime": "2024-09-29T05:00:00Z", "endTime": "2024-11-13T14:59:59Z",
            "link": "https://wutheringwaves.kurogames.com/en/main/news/detail/1408"
        },
        {
            "name": "Somnium Labyrinth", "game": "wuwa", "image": "somnium-labyrinth", "color": "#202639",
            "category": "event", "startTime": "2024-11-14T03:00:00Z", "endTime": "2025-01-01T02:59:59Z",
            "link": "https://wutheringwaves.kurogames.com/en/main/news/detail/1408"
        },
        {
            "name": "Alloy Smelt", "game": "wuwa", "image": "alloy-smelt", "color": "#1F1F39",
            "category": "event2", "startTime": "2024-06-06T09:00:00Z", "endTime": "2024-06-27T02:59:59Z",
            "link": "https://wutheringwaves.kurogames.com/en/main/news/detail/836"
        },
        {
            "name": "Tales from Mt. Firmament", "game": "wuwa", "image": "firmament-tales", "color": "#2D2F33",
            "category": "event2", "startTime": "2024-06-28T05:00:00Z", "endTime": "2024-08-13T02:59:59Z",
            "link": "https://wutheringwaves.kurogames.com/en/main/news/detail/923"
        },
        {
            "template": "bountifulCrescendo", "category": "event5", 
            "startTime": "2024-08-06T03:00:00Z", "endTime": "2024-08-13T02:59:59Z",
            "link": "https://wutheringwaves.kurogames.com/en/main/news/detail/1099"
        },
        {
            "name": "Do Echoids Dream of Electric Sheeps", "game": "wuwa", "image": "echoids-dream", "color": "#999C9B",
            "category": "event2", "startTime": "2024-09-05T09:00:00Z", "endTime": "2024-09-26T02:59:59Z",
            "link": "https://wutheringwaves.kurogames.com/en/main/news/detail/1268"
        },
        {
            "name": "Amidst The Stars", "game": "wuwa", "image": "amidst-stars", "color": "#5280AF",
            "category": "event2", "startTime": "2024-09-29T05:00:00Z", "endTime": "2024-11-13T14:59:59Z",
            "link": "https://wutheringwaves.kurogames.com/en/main/news/detail/1408"
        },
        {
            "name": "Pincer Maneuver Warriors I", "game": "wuwa", "image": "pincer-warriors", "color": "#242f35",
            "category": "event2", "startTime": "2024-11-14T03:00:00Z", "endTime": "2024-12-12T08:59:59Z",
            "link": "https://wutheringwaves.kurogames.com/en/main/news/detail/1607"
        },
        {
            "name": "Pincer Maneuver Warriors II", "game": "wuwa", "image": "pincer-warriors", "color": "#242f35",
            "category": "event2", "startTime": "2024-12-12T09:00:00Z", "endTime": "2025-01-01T10:59:59Z",
            "link": "https://wutheringwaves.kurogames.com/en/main/news/detail/1607"
        },
        {
            "name": "Second Coming of Solaris", "game": "wuwa", "image": "second-coming", "color": "#3E5584",
            "category": "event3", "startTime": "2024-06-13T03:00:00Z", "endTime": "2024-06-27T02:59:59Z"
        },
        {
            "name": "Lollo Campaign", "game": "wuwa", "image": "lollo-campaign", "color": "#3D3D46",
            "category": "event3", "startTime": "2024-07-25T09:00:00Z", "endTime": "2024-08-08T02:59:59Z",
            "link": "https://wutheringwaves.kurogames.com/en/main/news/detail/1080"
        },
        {
            "name": "Wuthering Exploration", "game": "wuwa", "image": "wuthering-exploration2", "color": "#1D1C24",
            "category": "event3", "startTime": "2024-09-12T09:00:00Z", "endTime": "2024-09-26T02:59:59Z",
            "link": "https://wutheringwaves.kurogames.com/en/main/news/detail/1296"
        },
        {
            "name": "Parade of Stars", "game": "wuwa", "image": "parade-stars", "color": "#182845",
            "category": "event3", "startTime": "2024-09-29T05:00:00Z", "endTime": "2024-11-13T14:59:59Z",
            "link": "https://wutheringwaves.kurogames.com/en/main/news/detail/1386"
        },
        {
            "name": "Beyond the Waves", "game": "wuwa", "image": "beyond-waves", "color": "#412a1c",
            "category": "event3", "startTime": "2024-11-21T09:00:00Z", "endTime": "2024-12-05T02:59:59Z",
            "link": "https://wutheringwaves.kurogames.com/en/main/news/detail/1693"
        },
        {
            "name": "Ragunna Sales Blitz!", "game": "wuwa", "image": "ragunna-sales", "color": "#525655",
            "category": "event3", "startTime": "2024-12-12T09:00:00Z", "endTime": "2025-01-01T02:59:59Z",
            "link": "https://wutheringwaves.kurogames.com/en/main/news/detail/1607"
        },
        {
            "name": "Wuthering Exploration", "game": "wuwa", "image": "wuthering-exploration", "color": "#3F4764",
            "category": "event4", "startTime": "2024-06-13T09:00:00Z", "endTime": "2024-06-27T02:59:59Z",
            "link": "https://wutheringwaves.kurogames.com/en/main/news/detail/874"
        },
        {
            "name": "Tactical Simulacra", "game": "wuwa", "image": "tactical-simulacra", "color": "#3C2E21",
            "category": "event4", "startTime": "2024-07-20T09:00:00Z", "endTime": "2024-08-08T02:59:59Z",
            "link": "https://wutheringwaves.kurogames.com/en/main/news/detail/1055"
        },
        {
            "name": "Alloy Smelt II", "game": "wuwa", "image": "alloy-smelt", "color": "#1F1F39",
            "category": "event4", "startTime": "2024-09-16T09:00:00Z", "endTime": "2024-09-28T02:59:59Z",
            "link": "https://wutheringwaves.kurogames.com/en/main/news/detail/1306"
        },
        {
            "name": "Fairy Tale's Finale", "game": "wuwa", "image": "fairy-finale", "color": "#8D98AA",
            "category": "event4", "startTime": "2024-10-01T09:00:00Z", "endTime": "2024-10-24T02:59:59Z",
            "link": "https://wutheringwaves.kurogames.com/en/main/news/detail/1473"
        },
        {
            "name": "Infinite Battle Simulation", "game": "wuwa", "image": "infinite-battle", "color": "#1d2d5e",
            "category": "event4", "startTime": "2024-10-24T09:00:00Z", "endTime": "2024-11-13T02:59:59Z",
            "link": "https://wutheringwaves.kurogames.com/en/main/news/detail/1509"
        },
        {
            "name": "Tactical Simulacra II", "game": "wuwa", "image": "tactical-simulacra", "color": "#3C2E21",
            "category": "event4", "startTime": "2024-12-19T09:00:00Z", "endTime": "2025-01-01T02:59:59Z",
            "link": "https://wutheringwaves.kurogames.com/en/main/news/detail/1788"
        },
        {
            "template": "chordCleansing", "category": "event5", 
            "startTime": "2024-08-06T03:00:00Z", "endTime": "2024-08-13T02:59:59Z",
            "link": "https://wutheringwaves.kurogames.com/en/main/news/detail/1099"
        },
        {
            "name": "Solaris Weather Forecast", "game": "wuwa", "image": "solaris-forecast", "color": "#0B1D29",
            "category": "event5", "startTime": "2024-10-10T09:00:00Z", "endTime": "2024-10-31T02:59:59Z",
            "link": "https://wutheringwaves.kurogames.com/en/main/news/detail/1491"
        },
        {
            "name": "Wuthering Exploration", "game": "wuwa", "image": "wuthering-exploration3", "color": "#45443f",
            "category": "event5", "startTime": "2024-10-31T09:00:00Z", "endTime": "2024-11-13T02:59:59Z",
            "link": "https://wutheringwaves.kurogames.com/en/main/news/detail/1562"
        },
        {
            "template": "chordCleansing", "category": "event5", 
            "startTime": "2024-12-05T03:00:00Z", "endTime": "2024-12-12T02:59:59Z",
            "link": "https://wutheringwaves.kurogames.com/en/main/news/detail/1715"
        },
        {
            "template": "bountifulCrescendo", "category": "event5", 
            "startTime": "2024-12-25T03:00:00Z", "endTime": "2025-01-01T02:59:59Z",
            "link": "https://wutheringwaves.kurogames.com/en/main/news/detail/1607"
        },
        {
            "template": "chordCleansing", "category": "event5", 
            "startTime": "2024-09-20T03:00:00Z", "endTime": "2024-09-27T02:59:59Z",
            "link": "https://wutheringwaves.kurogames.com/en/main/news/detail/1803"
        },
        {
            "template": "bountifulCrescendo", "category": "character", 
            "startTime": "2024-10-17T03:00:00Z", "endTime": "2024-10-24T02:59:59Z",
            "link": "https://wutheringwaves.kurogames.com/en/main/news/detail/1502"
        },
        {
            "name": "Lollo Campaign - Rerun", "game": "wuwa", "image": "lollo-rerun", "color": "#363a43",
            "category": "character", "startTime": "2024-10-24T09:00:00Z", "endTime": "2024-11-07T02:59:59Z",
            "link": "https://wutheringwaves.kurogames.com/en/main/news/detail/1509"
        },
        {
            "template": "chordCleansing", "category": "illusiverealm", 
            "startTime": "2024-11-06T03:00:00Z", "endTime": "2024-11-13T02:59:59Z",
            "link": "https://wutheringwaves.kurogames.com/en/main/news/detail/1588"
        },
        {
            "name": "Prevail the Lasting Night", "game": "wuwa", "image": "jiyan-banner", "color": "#69A5B4",
            "category": "character", "startTime": "2024-05-23T01:00:00Z", "endTime": "2024-06-13T08:59:59Z",
            "link": "https://wutheringwaves.kurogames.com/en/main/news/detail/846"
        },
        {
            "name": "When Thunder Pours", "game": "wuwa", "image": "yinlin-banner", "color": "#555870",
            "category": "character2", "startTime": "2024-06-06T09:00:00Z", "endTime": "2024-06-26T10:59:59Z",
            "link": "https://wutheringwaves.kurogames.com/en/main/news/detail/846"
        },
        {
            "name": "Thawborn Renewal", "game": "wuwa", "image": "jinhsi-banner", "color": "#183034",
            "category": "character", "startTime": "2024-06-28T05:00:00Z", "endTime": "2024-07-22T08:59:59Z",
            "link": "https://wutheringwaves.kurogames.com/en/main/news/detail/973"
        },
        {
            "name": "Vermillion's Ploy", "game": "wuwa", "image": "changli-banner", "color": "#563838",
            "category": "character", "startTime": "2024-07-22T09:00:00Z", "endTime": "2024-08-14T10:59:59Z",
            "link": "https://wutheringwaves.kurogames.com/en/main/news/detail/1065"
        },
        {
            "name": "Chromatic Prose", "game": "wuwa", "image": "zhezhi-banner", "color": "#87B3B4",
            "category": "character", "startTime": "2024-08-15T06:00:00Z", "endTime": "2024-09-07T08:59:59Z",
            "link": "https://wutheringwaves.kurogames.com/en/main/news/detail/1170"
        },
        {
            "name": "Celestial Revelation", "game": "wuwa", "image": "xiangliyao-banner", "color": "#8EB4C9",
            "category": "character", "startTime": "2024-09-07T09:00:00Z", "endTime": "2024-09-28T10:59:59Z",
            "link": "https://wutheringwaves.kurogames.com/en/main/news/detail/1170"
        },
        {
            "name": "Till the Sea Turns Clear", "game": "wuwa", "image": "shorekeeper-banner", "color": "#18192B",
            "category": "character2", "startTime": "2024-09-29T05:00:00Z", "endTime": "2024-10-24T08:59:59Z",
            "link": "https://wutheringwaves.kurogames.com/en/main/news/detail/1420"
        },
        {
            "name": "Prevail the Lasting Night", "game": "wuwa", "image": "jiyan-banner", "color": "#69A5B4",
            "category": "character2", "startTime": "2024-10-24T09:00:00Z", "endTime": "2024-11-13T10:59:59Z",
            "link": "https://wutheringwaves.kurogames.com/en/main/news/detail/1509"
        },
        {
            "name": "End of Lost Trail", "game": "wuwa", "image": "camellya-banner", "color": "#401713",
            "category": "character", "startTime": "2024-11-14T03:00:00Z", "endTime": "2024-12-12T08:59:59Z",
            "link": "https://wutheringwaves.kurogames.com/en/main/news/detail/1644"
        },
        {
            "name": "When Thunder Pours", "game": "wuwa", "image": "yinlin-banner", "color": "#555870",
            "category": "character", "startTime": "2024-12-12T09:00:00Z", "endTime": "2025-01-01T10:59:59Z",
            "link": "https://wutheringwaves.kurogames.com/en/main/news/detail/1768"
        },
        {
            "name": "Celestial Revelation", "game": "wuwa", "image": "xiangliyao-banner", "color": "#8EB4C9",
            "category": "character2", "startTime": "2024-12-12T09:00:00Z", "endTime": "2025-01-01T10:59:59Z",
            "link": "https://wutheringwaves.kurogames.com/en/main/news/detail/1770"
        },
        {   "template": "towerOfAdversity", "startTime": "2024-05-27T03:00:00Z", "endTime": "2024-06-10T02:59:59Z" },
        {   "template": "towerOfAdversity", "startTime": "2024-06-10T03:00:00Z", "endTime": "2024-06-24T02:59:59Z" },
        {   "template": "towerOfAdversity", "startTime": "2024-06-24T03:00:00Z", "endTime": "2024-07-08T02:59:59Z" },
        {   "template": "towerOfAdversity", "startTime": "2024-07-08T03:00:00Z", "endTime": "2024-07-22T02:59:59Z" },
        {   "template": "towerOfAdversity", "startTime": "2024-07-22T03:00:00Z", "endTime": "2024-08-05T02:59:59Z" },
        {   "template": "towerOfAdversity", "startTime": "2024-08-05T03:00:00Z", "endTime": "2024-08-19T02:59:59Z" },
        {   "template": "towerOfAdversity", "startTime": "2024-08-19T03:00:00Z", "endTime": "2024-09-02T02:59:59Z" },
        {   "template": "towerOfAdversity", "startTime": "2024-09-02T03:00:00Z", "endTime": "2024-09-16T02:59:59Z" },
        {   "template": "towerOfAdversity", "startTime": "2024-09-16T03:00:00Z", "endTime": "2024-09-30T02:59:59Z" },
        {   "template": "towerOfAdversity", "startTime": "2024-09-30T03:00:00Z", "endTime": "2024-10-14T02:59:59Z" },
        {   "template": "towerOfAdversity", "startTime": "2024-10-14T03:00:00Z", "endTime": "2024-10-28T02:59:59Z" },
        {   "template": "towerOfAdversity", "startTime": "2024-10-28T03:00:00Z", "endTime": "2024-11-11T02:59:59Z" },
        {   "template": "towerOfAdversity", "startTime": "2024-11-11T03:00:00Z", "endTime": "2024-11-25T02:59:59Z" },
        {   "template": "towerOfAdversity", "startTime": "2024-11-25T03:00:00Z", "endTime": "2024-12-09T02:59:59Z" },
        {   "template": "towerOfAdversity", "startTime": "2024-12-09T03:00:00Z", "endTime": "2024-12-23T02:59:59Z" },
        {   "template": "towerOfAdversity", "startTime": "2024-12-23T03:00:00Z", "endTime": "2025-01-06T02:59:59Z" },
        {
            "name": "Depths of Illusive Realm", "game": "wuwa", "image": "illusive-realm", "color": "#4E5768",
            "category": "illusiverealm", "startTime": "2024-05-23T03:00:00Z", "endTime": "2024-06-27T02:59:59Z"
        },
        {
            "name": "Dreams Ablaze in Darkness", "game": "wuwa", "image": "dreams-ablaze", "color": "#644C58",
            "category": "illusiverealm", "startTime": "2024-07-04T09:00:00Z", "endTime": "2024-08-05T02:59:59Z",
            "link": "https://wutheringwaves.kurogames.com/en/main/news/detail/1025"
        },
        {
            "name": "Carnival in Slumberland", "game": "wuwa", "image": "carnival-slumberland", "color": "#4E4659",
            "category": "illusiverealm", "startTime": "2024-08-22T09:00:00Z", "endTime": "2024-09-23T02:59:59Z",
            "link": "https://wutheringwaves.kurogames.com/en/main/news/detail/1218"
        },
        {
            "name": "Phantasm Amass", "game": "wuwa", "image": "phantasm-amass", "color": "#25302c",
            "category": "illusiverealm", "startTime": "2024-11-14T03:00:00Z", "endTime": "2025-01-01T02:59:59Z",
            "link": "https://wutheringwaves.kurogames.com/en/main/news/detail/1646"
        }
    ]
}`));

var dateData = JSON.parse(`
{
    
    "monthDays": [ 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
    "monthNames": [ "January", "Febuary", "March", "April", "May", "June", "July", "August", 
                    "September", "October", "November", "December" ],
    "monthNamesShort": [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ]
}`);