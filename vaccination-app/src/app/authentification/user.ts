export interface User {
    id: number;
    fname: string;
    lname: string
    mail: string;
    password: string;
    phone: string;
    role: 'superadmin' | 'admin' | 'doctor';
}
