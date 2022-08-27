export interface User{
    id?:number;
    uuid:string;
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
}