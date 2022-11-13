import React from "react";

const MenuCard = ({ menuesData }) => {     //menudata ==  menuesData (props lai use gareko)
  /* ({curlybrackets diyena bhani pani error aaucha blank dekhaucha kei dekhaudina}) */
  //modified(menuData)
  console.log(menuesData);
  return (
    <>
      <section className="main-card--cointainer">
        {menuesData.map((curElem) => {             /* for running a loop for food category */
          return (
            <>
              <div className="card-container" key={curElem.id}>
                {" "}
                {/* key={curElem.id} yo dinai parcha inorder to use array properties {curElem.id} in spans(nadiyeni huni raicha) */}
                {/*  yo feri repeat garna parey loop mah garni  */}
                <div className="card">
                  <div className="card-body">
                    <span className="card-number card-circle subtle">
                      {curElem.id}
                    </span>
                    {/*  <span className='card-author subtle' style={{color: "red"}}> Breakfast</span>        for category such as dinner */}
                    <span className="card-author subtle">{curElem.name}</span>{" "}
                    {/* //{curElem.name} can be removed */}
                    <h2 className="card-title"> {curElem.name} </h2>
                    <span className="card-description subtle">{curElem.description}
                      {/* MISTAKE is seen in here. for every item Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Dolore libero cum obcaecati deserunt excepturi. Amet? */}
                    </span>
                    <div className="card-read">Read</div>
                  </div>
                  <img
                    src={curElem.image}
                    alt="../../../public/images"
                    className="card-media"
                  />
                  <span className="card-tag subtle">Order Now</span>
                </div>
              </div>
            </>
          );
        })}
      </section>
    </>
  );
};

export default MenuCard;
