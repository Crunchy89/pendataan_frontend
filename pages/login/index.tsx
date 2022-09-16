import React from 'react';
import foto from "../assets/uder.svg"
import Image from 'next/image';

const Login = () => {
  return (
    <div className="row g-0">
      <div className="col-sm-6 col-md-8">
        <br />
        <div>
          <Image src={foto} width="500px" height="500px" alt="" />
        </div>
      </div>
      <div className="col-6 col-md-4">
        <div>
          <br />
          <h3>Selamat Datang</h3>
          <p>Silahkan masuk menggunakan aplikasi</p>
          <br />
          <div>
            <input
              type="text"
              style={{ borderRadius: "12px", textAlign: "center" }}
              placeholder="Nama"
            />
            <br /><br /><br />
            <input
              type="password"
              style={{ borderRadius: "12px", textAlign: "center" }}
              placeholder="Password"
            />
          </div>
        </div>
        <br />
        <div>
          <button
            style={{
              backgroundColor: `rgb(151, 12, 12)`,
              color: "white",
              borderRadius: "11px",
              border: "0px",
              width: "255px",
              height: "30px",
            }}
          >
            masuk
          </button>
        </div>
        <br />
        <div>
          <a href="#">lupa password?</a>
        </div>
      </div>
    </div>
  );
};

export default Login;

