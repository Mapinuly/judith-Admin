export const AppConfig = {
    baseUrl: 'https://localhost:44343/api',
    //    baseUrl: 'https://www.gogis.co.il/api',
    baseImg: 'http://134.209.122.168/',

    baseImgUrl: 'http://localhost:4200/',
    //    baseImgUrl:'https://www.gogis.co.il/website/',

    login: '/user/login',

    cards: '/slider',
    teamCards: '/team',
    contactUs: '/contact_us',

    weHere: '/we_are_here',
    events: '/upcoming_events',

    synopsis: '/synopsis',

    deleteEventData: '/upcoming_events',
    list: '/register_events',
    createEvent: '/upcoming_events'
}

export const ConfigDetails = {
    authToken: localStorage.getItem('access_token')

}