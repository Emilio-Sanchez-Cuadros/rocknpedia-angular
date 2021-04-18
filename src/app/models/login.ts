export interface Login {
    username: string,
    password: string
}

export interface Register {
    username: string,
    password: string,
    is_admin: boolean,
    user_image: string,
    rol: string
}

export interface UserLogged {
    user_id: number,
    username: string, 
    is_admin: boolean, 
    user_image: string, 
    rol: string;
}