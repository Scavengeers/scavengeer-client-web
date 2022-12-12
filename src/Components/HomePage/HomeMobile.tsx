import React, { type FC, type ReactElement, useState, useEffect } from "react";
import FadeDiv from "../Helpers/FadeDiv";
import GameIdForm from "./GameIdForm";
import GamePreview from "./GamePreview";
import Hero from "./Hero";
import ListOfPublicGames from "./ListOfPublicGames";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Dialog } from "@mui/material";
import TokyoNoireName from "../../../public/Title_DarkTheme.svg";

export type startModuleInfo = {
  _id: string;
  titleOfGame: string;
  description?: string | null;
  rating?: string | null;
  author?: string | null;
  image?: string;
  estimatedTimeMinutes?: number | null;
  startLocationCoordinates?: Array<number>;
};

const testArray = [
  {
    _id: "638d8a2f61306a3dc4e94430",
    titleOfGame: "The disappearance of Akika Mori",
    description:
      "Akika Mori is the hidden daughter of the late Taikichiro Mori, who was once the richest person on earth. She was being surveilled at all time, her family wanting her to stay hidden from the public and to not be associated with her family. Her dream was to become an actress, despite knowing that her family would never allow it. The worried Mori family requested your services to find their daughter.",
    author: "Cole Phelps",
    rating: "G",
    isPrivate: false,
  },
  {
    _id: "638d8a2f61306a3dc4e94430",
    titleOfGame: "The disappearance of Akika Mori",
    description:
      "Akika Mori is the hidden daughter of the late Taikichiro Mori, who was once the richest person on earth. She was being surveilled at all time, her family wanting her to stay hidden from the public and to not be associated with her family. Her dream was to become an actress, despite knowing that her family would never allow it. The worried Mori family requested your services to find their daughter.",
    author: "Cole Phelps",
    rating: "G",
    isPrivate: false,
  },
];

interface props {
  show: boolean
}

const HomeMobile = (props: props): ReactElement => {
  const { show } = props;

  const [gameId, setGameId] = useState<string>("");
  const [game, setGame] = useState<startModuleInfo | null>(null);
  const [open, setOpen] = useState<boolean>(false);
  const [publicGames, setPublicGames] = useState<startModuleInfo[] | null>(
    testArray
  );

  useEffect(() => {
    if (game !== null) {
      handleOpen();
    }
  }, [game]);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <>
      <div className="relative h-screen flexCenterDiv place-items-center mx-5 ">
        <TokyoNoireName alt="Tokyo Noire Name" style={{ maxWidth: "80vw" }} />
        <div className="absolute bottom-8">
          <KeyboardArrowDownIcon
            style={{ animation: `hover-up-down ease-in-out 3s infinite` }}
            sx={{
              width: "1.5em",
              height: "1.5em",
            }} />
        </div>
      </div>
      <Hero />
      <ListOfPublicGames publicGames={publicGames!} />
      {game ? (
        <Dialog
          className="object-fit flexCenterDiv"
          open={open}
          onClose={handleClose}
          fullScreen
        >
          <GamePreview
            game={game!}
            handleClose={handleClose}
            gameId={gameId}
          />
        </Dialog>
      ) : (
        <></>
      )}
    </>
  );
};

export default HomeMobile;