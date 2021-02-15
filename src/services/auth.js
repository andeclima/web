export const APP_TOKEN_KEY = 'token@BikeLock';

export const isAuthenticated = function() {
    return (localStorage.getItem(APP_TOKEN_KEY) !== null);
}

export const getToken = function() {
    return localStorage.getItem(APP_TOKEN_KEY);
}

export const doLogin = function(token) {
    localStorage.setItem(APP_TOKEN_KEY, token);
}

export const doLogout = function() {
    localStorage.removeItem(APP_TOKEN_KEY);
}