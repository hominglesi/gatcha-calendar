var eventTemplates = JSON.parse(`
{
    "templates": [
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
            "name": "Ley Line Overflow", "game": "genshin", "image": "layline-overflow", "color": "#172B4B",
            "category": "event", "startTime": "2024-07-08T03:00:00Z", "endTime": "2024-07-15T02:59:00Z",
            "link": "https://www.hoyolab.com/article/30689501"
        },
        {
            "name": "Summertide Scales and Tales", "game": "genshin", "image": "summertide-scales", "color": "#559CDB",
            "category": "event", "startTime": "2024-07-17T03:00:00Z", "endTime": "2024-08-27T22:59:59Z",
            "link": "https://www.hoyolab.com/article/31070415"
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
            "name": "Bing-Bang Finchball", "game": "genshin", "image": "bing-bang", "color": "#9ABC1E",
            "category": "event3", "startTime": "2024-08-06T09:00:00Z", "endTime": "2024-08-19T02:59:59Z",
            "link": "https://www.hoyolab.com/article/31777295"
        },
        {
            "name": "Illuminating Lightning", "game": "genshin", "image": "clorinde-banner", "color": "#46388D",
            "category": "character", "startTime": "2024-06-05T03:00:00Z", "endTime": "2024-06-25T16:59:59Z",
            "link": "https://www.hoyolab.com/article/29435758"
        },
        {
            "name": "Caution in Confidence", "game": "genshin", "image": "alhaitham-banner", "color": "#1C3C3B",
            "category": "character2", "startTime": "2024-06-05T03:00:00Z", "endTime": "2024-06-25T16:59:59Z",
            "link": "https://www.hoyolab.com/article/29435758"
        },
        {
            "name": "Romaritime Meluserenity", "game": "genshin", "image": "sigewinne-banner", "color": "#7F6073",
            "category": "character", "startTime": "2024-06-25T17:00:00Z", "endTime": "2024-07-16T13:59:59Z",
            "link": "https://www.hoyolab.com/article/30071782"
        },
        {
            "name": "Chanson of Many Waters", "game": "genshin", "image": "furina-banner", "color": "#072A5C",
            "category": "character2", "startTime": "2024-06-25T17:00:00Z", "endTime": "2024-07-16T13:59:59Z",
            "link": "https://www.hoyolab.com/article/30071782"
        },
        {
            "name": "In the Name of the Rosula", "game": "genshin", "image": "navia-banner", "color": "#E49C3A",
            "category": "character", "startTime": "2024-07-17T03:00:00Z", "endTime": "2024-08-06T16:59:59Z",
            "link": "https://www.hoyolab.com/article/31070419"
        },
        {
            "name": "Twirling Lotus", "game": "genshin", "image": "nilou-banner", "color": "#398FD9",
            "category": "character2", "startTime": "2024-07-17T03:00:00Z", "endTime": "2024-08-06T16:59:59Z",
            "link": "https://www.hoyolab.com/article/31070419"
        },
        {
            "name": "Ambrosial Essence", "game": "genshin", "image": "emilie-banner", "color": "#19493E",
            "category": "character", "startTime": "2024-08-06T17:00:00Z", "endTime": "2024-08-27T13:59:59Z",
            "link": "https://www.hoyolab.com/article/31676908"
        },
        {
            "name": "Discerner of Enigmas", "game": "genshin", "image": "yelan-banner", "color": "#313771",
            "category": "character2", "startTime": "2024-08-06T17:00:00Z", "endTime": "2024-08-27T13:59:59Z",
            "link": "https://www.hoyolab.com/article/31676908"
        },
        {   "template": "spiralAbyss", "startTime": "2024-06-01T03:00:00Z", "endTime": "2024-06-16T02:59:59Z" },
        {   "template": "spiralAbyss", "startTime": "2024-06-16T03:00:00Z", "endTime": "2024-07-16T02:59:59Z" },
        {   "template": "spiralAbyss", "startTime": "2024-07-16T03:00:00Z", "endTime": "2024-08-16T02:59:59Z" },
        {   "template": "imaginariumTheather", "startTime": "2024-07-01T03:00:00Z", "endTime": "2024-08-01T02:59:59Z" },
        {   "template": "imaginariumTheather", "startTime": "2024-08-01T03:00:00Z", "endTime": "2024-09-01T02:59:59Z" },
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
            "name": "Garden of Plenty", "game": "starrail", "image": "garden-plenty", "color": "#383A4B",
            "category": "event3", "startTime": "2024-06-07T03:00:00Z", "endTime": "2024-06-14T02:59:59Z",
            "link": "https://www.hoyolab.com/article/29574847"
        },
        {
            "name": "Realm of the Strange", "game": "starrail", "image": "realm-strange", "color": "#131D4C",
            "category": "event3", "startTime": "2024-07-19T03:00:00Z", "endTime": "2024-07-26T02:59:59Z",
            "link": "https://www.hoyolab.com/article/31184271"
        },
        {
            "template": "planarFissure", "category": "event3",
            "startTime": "2024-08-14T03:00:00Z", "endTime": "2024-08-21T02:59:59Z",
            "link": "https://www.hoyolab.com/article/32068176"
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
        {   "template": "memoryOfChaos", "startTime": "2024-05-13T03:00:00Z", "endTime": "2024-06-19T02:59:59Z", 
            "category": "apocalyptic" },
        {   "template": "memoryOfChaos", "startTime": "2024-06-10T03:00:00Z", "endTime": "2024-07-22T02:59:59Z" },
        {   "template": "memoryOfChaos", "startTime": "2024-07-22T03:00:00Z", "endTime": "2024-09-02T02:59:59Z" },
        {   "template": "apocalypticShadow", "startTime": "2024-06-19T03:00:00Z", "endTime": "2024-08-05T02:59:59Z" },
        {   "template": "pureFiction", "startTime": "2024-05-27T03:00:00Z", "endTime": "2024-07-08T02:59:59Z" },
        {   "template": "pureFiction", "startTime": "2024-07-08T03:00:00Z", "endTime": "2024-08-19T02:59:59Z" },
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
            "name": "Chord Cleansing", "game": "wuwa", "image": "chord-clensing", "color": "#05161E",
            "category": "event", "startTime": "2024-06-20T03:00:00Z", "endTime": "2024-06-27T02:59:59Z",
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
            "name": "Second Coming of Solaris", "game": "wuwa", "image": "second-coming", "color": "#3E5584",
            "category": "event3", "startTime": "2024-06-13T03:00:00Z", "endTime": "2024-06-27T02:59:59Z"
        },
        {
            "name": "Lollo Campaign", "game": "wuwa", "image": "lollo-campaign", "color": "#3D3D46",
            "category": "event3", "startTime": "2024-07-25T09:00:00Z", "endTime": "2024-08-08T02:59:59Z",
            "link": "https://wutheringwaves.kurogames.com/en/main/news/detail/1080"
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
            "name": "Chord Cleansing", "game": "wuwa", "image": "chord-clensing", "color": "#05161E",
            "category": "event5", "startTime": "2024-08-06T03:00:00Z", "endTime": "2024-08-13T02:59:59Z",
            "link": "https://wutheringwaves.kurogames.com/en/main/news/detail/1099"
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
        {   "template": "towerOfAdversity", "startTime": "2024-05-27T03:00:00Z", "endTime": "2024-06-10T02:59:59Z" },
        {   "template": "towerOfAdversity", "startTime": "2024-06-10T03:00:00Z", "endTime": "2024-06-24T02:59:59Z" },
        {   "template": "towerOfAdversity", "startTime": "2024-06-24T03:00:00Z", "endTime": "2024-07-08T02:59:59Z" },
        {   "template": "towerOfAdversity", "startTime": "2024-07-08T03:00:00Z", "endTime": "2024-07-22T02:59:59Z" },
        {   "template": "towerOfAdversity", "startTime": "2024-07-22T03:00:00Z", "endTime": "2024-08-05T02:59:59Z" },
        {   "template": "towerOfAdversity", "startTime": "2024-08-05T03:00:00Z", "endTime": "2024-08-19T02:59:59Z" },
        {   "template": "towerOfAdversity", "startTime": "2024-08-19T03:00:00Z", "endTime": "2024-09-02T02:59:59Z" },
        {
            "name": "Depths of Illusive Realm", "game": "wuwa", "image": "illusive-realm", "color": "#4E5768",
            "category": "illusiverealm", "startTime": "2024-05-23T03:00:00Z", "endTime": "2024-06-27T02:59:59Z"
        },
        {
            "name": "Dreams Ablaze in Darkness", "game": "wuwa", "image": "dreams-ablaze", "color": "#644C58",
            "category": "illusiverealm", "startTime": "2024-07-04T09:00:00Z", "endTime": "2024-08-05T02:59:59Z",
            "link": "https://wutheringwaves.kurogames.com/en/main/news/detail/1025"
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