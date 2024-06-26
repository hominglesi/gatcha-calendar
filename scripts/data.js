var dateData = JSON.parse(`
    {
        
        "monthDays": [ 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
        "monthNames": [ "January", "Febuary", "March", "April", "May", "June", "July", "August", 
                        "September", "October", "November", "December" ],
        "monthNamesShort": [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ]
    }`);

var nodeData = JSON.parse(`
{
    "nodes": [
        {
            "name": "Mutual Security Enhancing Simulation", "game": "genshin", "category": "event",
            "startTime": "2024-06-07T09:00:00Z", "endTime": "2024-06-17T03:00:00Z"
        },
        {
            "name": "Recollective Writing", "game": "genshin", "category": "event",
            "startTime": "2024-06-18T09:00:00Z", "endTime": "2024-06-24T03:00:00Z"
        },
        {
            "name": "Endless Forms", "game": "genshin", "category": "event",
            "startTime": "2024-06-25T09:00:00Z", "endTime": "2024-07-01T03:00:00Z"
        },
        {
            "name": "Spino Doubleblaster", "game": "genshin", "category": "event",
            "startTime": "2024-07-02T09:00:00Z", "endTime": "2024-07-08T03:00:00Z"
        },
        {   
            "name": "Spiral Abyss", "game": "genshin", "category": "abyss",
            "startTime": "2024-06-01T03:00:00Z", "endTime": "2024-06-16T03:00:00Z" 
        },
        {   
            "name": "Spiral Abyss", "game": "genshin", "category": "abyss",
            "startTime": "2024-06-16T03:00:00Z", "endTime": "2024-07-16T03:00:00Z"
        },
        {   
            "name": "Spiral Abyss", "game": "genshin", "category": "abyss",
            "startTime": "2024-07-16T03:00:00Z", "endTime": "2024-08-16T03:00:00Z"
        },
        {   
            "name": "Imaginarium Theather", "game": "genshin", "category": "theather",
            "startTime": "2024-07-01T03:00:00Z", "endTime": "2024-07-31T03:00:00Z"
        },
        {
            "name": "The Legend of the Galactic Baseballer", "game": "starrail", "category": "event2",
            "startTime": "2024-05-29T11:00:00Z", "endTime": "2024-06-17T03:00:00Z"
        },
        {
            "name": "Heartfelt Doodlings Web", "game": "genshin", "category": "event2",
            "startTime": "2024-06-20T04:00:00Z", "endTime": "2024-06-26T16:00:00Z"
        },
        {
            "name": "Planar Fissure", "game": "genshin", "category": "event2",
            "startTime": "2024-06-28T04:00:00Z", "endTime": "2024-07-05T04:00:00Z"
        },
        {
            "name": "Clockie: Dreamjoy Memoir", "game": "starrail", "category": "event7",
            "startTime": "2024-05-08T03:00:00Z", "endTime": "2024-06-17T03:00:00Z"
        },
        {
            "name": "Origami Bird Clash", "game": "starrail", "category": "event7",
            "startTime": "2024-06-21T11:00:00Z", "endTime": "2024-07-29T03:00:00Z"
        },
        {
            "name": "Memory of Chaos", "game": "starrail", "category": "moc",
            "startTime": "2024-05-12T22:00:00Z", "endTime": "2024-06-18T22:00:00Z"
        },
        {
            "name": "Apocalyptic Shadow", "game": "starrail", "category": "moc",
            "startTime": "2024-06-19T02:00:00Z", "endTime": "2024-07-26T03:00:00Z"
        },
        {
            "name": "Memory of Chaos", "game": "starrail", "category": "moc2",
            "startTime": "2024-06-10T03:00:00Z", "endTime": "2024-07-22T03:00:00Z"
        },
        {
            "name": "Pure Fiction", "game": "starrail", "category": "pf",
            "startTime": "2024-05-27T03:00:00Z", "endTime": "2024-07-08T03:00:00Z"
        },
        {
            "name": "Tower of Adversity", "game": "wuwa", "category": "tower",
            "startTime": "2024-06-10T03:00:00Z", "endTime": "2024-06-24T03:00:00Z"
        },
        {
            "name": "Tower of Adversity", "game": "wuwa", "category": "tower",
            "startTime": "2024-06-24T03:00:00Z", "endTime": "2024-07-08T03:00:00Z"
        },
        {
            "name": "Overdash Club", "game": "wuwa", "category": "event3",
            "startTime": "2024-05-30T03:00:00Z", "endTime": "2024-06-17T03:00:00Z"
        },
        {
            "name": "Chord Cleansing", "game": "wuwa", "category": "event3",
            "startTime": "2024-06-20T03:00:00Z", "endTime": "2024-06-27T03:00:00Z"
        },
        {
            "name": "Second Coming of Solaris", "game": "wuwa", "category": "event4",
            "startTime": "2024-06-13T03:00:00Z", "endTime": "2024-06-27T03:00:00Z"
        },
        {
            "name": "Tales from Mt. Firmament", "game": "wuwa", "category": "event4",
            "startTime": "2024-06-27T07:00:00Z", "endTime": "2024-08-13T03:00:00Z"
        },
        {
            "name": "Alloy Smelt", "game": "wuwa", "category": "event5",
            "startTime": "2024-06-06T07:00:00Z", "endTime": "2024-06-27T03:00:00Z"
        },
        {
            "name": "Traces of Mt. Firmament", "game": "wuwa", "category": "event5",
            "startTime": "2024-06-27T07:00:00Z", "endTime": "2024-08-13T03:00:00Z"
        },
        {
            "name": "Wuthering Exploration", "game": "wuwa", "category": "event6",
            "startTime": "2024-06-13T07:00:00Z", "endTime": "2024-06-27T03:00:00Z"
        }
    ]
}`);