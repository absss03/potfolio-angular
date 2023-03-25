export class Login {
    id?: number;
    
    user_name: string;
    password: string;
    user_id: number;

    constructor(user_name: string, password: string, user_id: number) {
        this.user_name = user_name;
        this.password = password;
        this.user_id = user_id;
    }
}
