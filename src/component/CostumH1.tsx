import React from 'react';

type Props ={
    title?:string | number;
    text?:string;
    button?:string;
}

const CostumH1 = ({text,title,button}:Props) => {
    return (
        <>
            <div className="card" style={{width: "18rem"}}>
                <img className="card-img-top" src="..." alt="Card image cap"/>
            <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{text}</p>
            <a href="#" className="btn btn-primary">{button || "Go somewhere"}</a>
  </div>
</div>
        </>
    );
};

export default CostumH1;