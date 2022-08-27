export interface User{
    id?:number;
    uuid:string;
    nik?:string;
    no_anggota?:string;
    email:string;
    nama?:string;
    tmp_lhr?:string;
    tgl_lhr?:string;
    alamat?:string;
    foto?:string;
    jk?:"L"|"P";
    role:"member"|"admin";
    status:"Approved"|"Pending"|"Rejected";
    agama?:string;
    created_at:string;
    updated_at:string;
}

export interface Login {
        access_token: string;
        token_type: string;
        expires_in: number;
        user: User 
}