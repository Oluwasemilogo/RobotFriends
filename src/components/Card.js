import React from "react";

const Card = (props) => {
    const { name, email, id} = props;
    return(
        <div className="bg-light-green tc dib br3 pa3 ma2 grow bw2 shadow-5">
            <img alt="robot" src={`https://robohash.org/${id}`} width={200} height = {200} />
            <div>
                <h3>{name}</h3>
                <p>{email}</p>
            </div>
        </div>
    )
};
export default Card;