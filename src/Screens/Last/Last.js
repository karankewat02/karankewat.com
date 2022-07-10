import React, { useEffect, useState } from "react";

function Last() {
  const [loading, setLoading] = useState(false);

  const goToStrt = async () => {
     setTimeout(()=>{
      document.querySelector(".screenConatiner").scrollTo(0, 0);
    },1000)
  };
  return (
    <>
      {loading ? (
        <div style={{position:'absolute',inset:0,background:'white',display:'grid',placeItems:'center',zIndex:20,color:'#000'}}>Loading...</div>
      ) : (
        <div
          style={{
            width: "80%",
            margin: "auto",
            display: "grid",
            placeItems: "center",
          }}
        >
          <h1 style={{ marginBlock: "1rem", textAlign: "center" }}>
            Made With ❤️ by karan{" "}
          </h1>
          <button onClick={goToStrt} className="nrmlBTN">
            Go Back To Start
          </button>
        </div>
      )}
    </>
  );
}

export default Last;
