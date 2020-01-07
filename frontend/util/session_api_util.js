// AJAX calls to backend to create user (signup), create session (login), and 
// destroy session (logout)

export const signup = (user) => (
    $.ajax({
        url: '/api/users',
        method: 'post',
        data: { user }
    })
)

export const login = (user) => (
    $.ajax({
        url: '/api/session',
        method: 'post',
        data: { user }
    })
)

export const logout = () => (
    $.ajax({
        url: '/api/session',
        method: 'delete',
    })
)

