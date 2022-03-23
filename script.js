if (!window.location.pathname.includes('queryScore.do')) { // if chinese trying to do something else on our site -> redirect to original
    window.location.href == 'http://www.chinesetest.cn/'
} else if (window.location.search == '') { // if no search were given -> redirect to original site
    window.location.href = 'http://www.chinesetest.cn/'    
} else if (window.location.search.split('&')[0] != '?zsid=15318823') {
    if (window.location.protocol == 'file:') {
        window.location.href = window.location.pathname.split('queryScore.do')[0] + 'login.html'
    } else {
        window.location.href = window.location.origin + '/login'
    }
}