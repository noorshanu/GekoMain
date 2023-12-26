import React, { useEffect } from "react";

import "./DinoGame.css";

const DinoGame = () => {
  useEffect(() => {
    // Automatically start the game by setting the "Start" checkbox as checked
    const startGameCheckbox = document.getElementById('start-game');
    if (startGameCheckbox) {
      startGameCheckbox.checked = true;
    }
  }, []);

  return (
    <>
    <div className="overflow-x-hidden hidden sm:block">

   
      {/* <input type="checkbox" id="pixelize" checked /><label id="label-pixels" for="pixelize">Pixelize game</label> */}
      <form method="get" action="javascript:void(0)"  >
        <input type="checkbox" id="start-game"  />
        <input type="checkbox" id="cactus-1"  />
        <input type="checkbox" id="cactus-2" />
        <input type="checkbox" id="cactus-3" />
        <input type="checkbox" id="cactus-4" />
        <input type="checkbox" id="cactus-5" />
        <input type="checkbox" id="cactus-6" />
        <input type="checkbox" id="cactus-7" />
        <input type="checkbox" id="cactus-8" />
        <input type="checkbox" id="cactus-9" />
        <input type="checkbox" id="cactus-10" />
        <input type="checkbox" id="cactus-11" />
        <input type="checkbox" id="cactus-12" />
        <input type="checkbox" id="cactus-13" />
        <input type="checkbox" id="cactus-14" />
        <input type="checkbox" id="cactus-15" />
        <input type="checkbox" id="cactus-16" />
        <input type="checkbox" id="cactus-17" />
        <div id="menu-start">
          {/* <h1>CSS Dino</h1> */}
          <label for="start-game" aria-label="Click here to start" id="start-game"></label>
        </div>
        <div id="game"   >
          <div id="canvas"   >
            <label for="cactus-1"  ></label>
            <label for="cactus-2"  ></label>
            <label for="cactus-3"  ></label>
            <label for="cactus-4"  ></label>
            <label for="cactus-5"  ></label>
            <label for="cactus-6"  ></label>
            <label for="cactus-7"  ></label>
            <label for="cactus-8"  ></label>
            <label for="cactus-9"  ></label>
            <label for="cactus-10"  ></label>
            <label for="cactus-11"  ></label>
            <label for="cactus-12"  ></label>
            <label for="cactus-13"  ></label>
            <label for="cactus-14"  ></label>
            <label for="cactus-15"  ></label>
            <label for="cactus-16"  ></label>
            <label for="cactus-17"  ></label>
            <div id="you-won">
              <h2>YOU WON</h2>
              <input type="reset" value="◄" />
            </div>
          </div>
          <div id="dinosaur"></div>
          <div id="gameover">
            {/* <h2>GAME OVER</h2>
      <input type="reset" value="◄" /> */}
          </div>
        </div>
      </form>
      </div>
    </>
  );
};

export default DinoGame;
