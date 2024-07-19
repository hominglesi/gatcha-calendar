var dateData = JSON.parse(`
    {
        
        "monthDays": [ 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
        "monthNames": [ "January", "Febuary", "March", "April", "May", "June", "July", "August", 
                        "September", "October", "November", "December" ],
        "monthNamesShort": [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ]
    }`);

var eventData = JSON.parse(`
{
    "events": [
        {
            "name": "Mutual Security Enhancing Simulation", "game": "genshin", "image": "mutual-security",
            "category": "event", "startTime": "2024-06-07T09:00:00Z", "endTime": "2024-06-17T03:00:00Z"
        },
        {
            "name": "Recollective Writing", "game": "genshin", "image": "recollective-writing",
            "category": "event", "startTime": "2024-06-18T09:00:00Z", "endTime": "2024-06-24T03:00:00Z"
        },
        {
            "name": "Endless Forms", "game": "genshin", "image": "endless-forms",
            "category": "event", "startTime": "2024-06-25T09:00:00Z", "endTime": "2024-07-01T03:00:00Z"
        },
        {
            "name": "Spino Doubleblaster", "game": "genshin", "image": "spino-doubleblaster",
            "category": "event", "startTime": "2024-07-02T09:00:00Z", "endTime": "2024-07-08T03:00:00Z"
        },
        {
            "name": "Lay Line Overflow", "game": "genshin", "image": "layline-overflow",
            "category": "event", "startTime": "2024-07-08T03:00:00Z", "endTime": "2024-07-15T03:00:00Z"
        },
        {   
            "name": "Spiral Abyss", "game": "genshin", "image": "spiral-abyss",
            "category": "abyss", "startTime": "2024-06-01T03:00:00Z", "endTime": "2024-06-16T03:00:00Z" 
        },
        {   
            "name": "Spiral Abyss", "game": "genshin", "image": "spiral-abyss",
            "category": "abyss", "startTime": "2024-06-16T03:00:00Z", "endTime": "2024-07-16T03:00:00Z"
        },
        {   
            "name": "Spiral Abyss", "game": "genshin", "image": "spiral-abyss",
            "category": "abyss", "startTime": "2024-07-16T03:00:00Z", "endTime": "2024-08-16T03:00:00Z"
        },
        {   
            "name": "Imaginarium Theather", "game": "genshin", "image": "imaginarium-theather",
            "category": "theather", "startTime": "2024-07-01T03:00:00Z", "endTime": "2024-07-31T03:00:00Z"
        },
        {
            "name": "The Legend of the Galactic Baseballer", "game": "starrail", "image": "galactic-baseballer",
            "category": "event2", "startTime": "2024-05-29T11:00:00Z", "endTime": "2024-06-17T03:00:00Z"
        },
        {
            "name": "Heartfelt Doodlings Web", "game": "genshin", "image": "heartfelt-doodlings",
            "category": "event2", "startTime": "2024-06-20T04:00:00Z", "endTime": "2024-06-26T16:00:00Z"
        },
        {
            "name": "Planar Fissure", "game": "starrail", "image": "planar-fissure",
            "category": "event2", "startTime": "2024-06-28T04:00:00Z", "endTime": "2024-07-05T04:00:00Z"
        },
        {
            "name": "Stellar Shimmer", "game": "starrail", "image": "stellar-shimmer",
            "category": "event2", "startTime": "2024-07-05T12:00:00Z", "endTime": "2024-07-29T04:00:00Z"
        },
        {
            "name": "Clockie: Dreamjoy Memoir", "game": "starrail", "image": "dreamjoy-memoir",
            "category": "event7", "startTime": "2024-05-08T03:00:00Z", "endTime": "2024-06-17T03:00:00Z"
        },
        {
            "name": "Origami Bird Clash", "game": "starrail", "image": "bird-clash",
            "category": "event7", "startTime": "2024-06-21T11:00:00Z", "endTime": "2024-07-29T03:00:00Z"
        },
        {
            "name": "Memory of Chaos", "game": "starrail", "image": "memory-chaos",
            "category": "moc", "startTime": "2024-05-12T22:00:00Z", "endTime": "2024-06-18T22:00:00Z"
        },
        {
            "name": "Memory of Chaos", "game": "starrail", "image": "memory-chaos",
            "category": "moc2", "startTime": "2024-06-10T03:00:00Z", "endTime": "2024-07-22T03:00:00Z"
        },
        {
            "name": "Apocalyptic Shadow", "game": "starrail", "image": "apocalyptic-shadow",
            "category": "moc", "startTime": "2024-06-19T02:00:00Z", "endTime": "2024-07-26T03:00:00Z"
        },
        {
            "name": "Pure Fiction", "game": "starrail", "image": "pure-fiction",
            "category": "pf", "startTime": "2024-05-27T03:00:00Z", "endTime": "2024-07-08T03:00:00Z"
        },
        {
            "name": "Pure Fiction", "game": "starrail", "image": "pure-fiction",
            "category": "pf", "startTime": "2024-07-08T03:00:00Z", "endTime": "2024-08-19T03:00:00Z"
        },
        {
            "name": "Tower of Adversity", "game": "wuwa", "image": "adversity-tower",
            "category": "tower", "startTime": "2024-06-10T03:00:00Z", "endTime": "2024-06-24T03:00:00Z"
        },
        {
            "name": "Tower of Adversity", "game": "wuwa", "image": "adversity-tower",
            "category": "tower", "startTime": "2024-06-24T03:00:00Z", "endTime": "2024-07-08T03:00:00Z"
        },
        {
            "name": "Tower of Adversity", "game": "wuwa", "image": "adversity-tower",
            "category": "tower", "startTime": "2024-07-08T03:00:00Z", "endTime": "2024-07-22T03:00:00Z"
        },
        {
            "name": "Overdash Club", "game": "wuwa", "image": "overdash-club",
            "category": "event3", "startTime": "2024-05-30T03:00:00Z", "endTime": "2024-06-17T03:00:00Z"
        },
        {
            "name": "Chord Cleansing", "game": "wuwa", "image": "chord-clensing",
            "category": "event3", "startTime": "2024-06-20T03:00:00Z", "endTime": "2024-06-27T03:00:00Z"
        },
        {
            "name": "Lady Bonajade Handbook Web", "game": "starrail", "image": "bonajade-handbook",
            "category": "event3", "startTime": "2024-07-09T11:00:00Z", "endTime": "2024-07-16T16:00:00Z"
        },
        {
            "name": "Second Coming of Solaris", "game": "wuwa", "image": "second-coming",
            "category": "event4", "startTime": "2024-06-13T03:00:00Z", "endTime": "2024-06-27T03:00:00Z"
        },
        {
            "name": "Tales from Mt. Firmament", "game": "wuwa", "image": "firmament-tales",
            "category": "event4", "startTime": "2024-06-27T07:00:00Z", "endTime": "2024-08-13T03:00:00Z"
        },
        {
            "name": "Alloy Smelt", "game": "wuwa", "image": "alloy-smelt",
            "category": "event5", "startTime": "2024-06-06T07:00:00Z", "endTime": "2024-06-27T03:00:00Z"
        },
        {
            "name": "Traces of Mt. Firmament", "game": "wuwa", "image": "firmament-traces",
            "category": "event5", "startTime": "2024-06-27T07:00:00Z", "endTime": "2024-08-13T03:00:00Z"
        },
        {
            "name": "Wuthering Exploration", "game": "wuwa", "image": "wuthering-exploration",
            "category": "event6", "startTime": "2024-06-13T07:00:00Z", "endTime": "2024-06-27T03:00:00Z"
        },
        {
            "name": "Fragrant Fantasy Web", "game": "genshin", "image": "fragrant-fantasy",
            "category": "event6", "startTime": "2024-07-09T11:00:00Z", "endTime": "2024-07-15T16:00:00Z"
        }
    ]
}`);