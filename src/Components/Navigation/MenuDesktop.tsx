import React, { type FC, type ReactElement, useState, useContext } from "react";
import Logo from "../../../public/Logo_DarkTheme.svg";
import Link from "next/link";
import PublishIcon from "./../../../Assets/Icons/publishIcon-darkTheme.svg";
import SaveIcon from "./../../../Assets/Icons/saveIcon-darkTheme.svg";
import axios from "axios";
import { useRouter } from "next/router";
import FadeDiv from "../Helpers/FadeDiv";
import AppContext from "../../AppContext";

type menuItem = {
  title: string;
  url: string;
};

const menuItems: Array<menuItem> = [
  {
    title: "Explore",
    url: "/explore",
  },
  {
    title: "How To Play",
    url: "/how-to-play",
  },
  {
    title: "Profile",
    url: "/profile",
  },
];

const MenuDesktop = (): ReactElement => {
  const [show] = useState<boolean>(true);
  const value = useContext(AppContext);
  const { gameData } = value;

  //post request for when a user creates a new game.
  const postGameData = async () => {
    await axios.post(
      "https://tokyo-noire-server-development.herokuapp.com/editor",
      gameData
    );
  };
  
  const saveDraft = async () => {
    await axios.patch(
      `http://localhost:2000/editor/${gameData._id}`,
        gameData
    );
  };

  const publishGame = async () => {
    await axios.patch(
      `http://localhost:2000/editor/${gameData._id}`,
        gameData
    );
  };

  return (
    <>
      <div className="flex items-center flex-grow h-20 max-w-52 gap-14">
        <Link href="/" title="Homepage" className="z-50 w-12">
          <Logo alt="logo menu button" className="logo" />
        </Link>
        {useRouter().pathname === "/editor" && (
          <FadeDiv show={show}>
            <div
              className="flex gap-10 px-8 py-3 rounded-full"
              style={{ backgroundColor: "rgb(20, 20, 20)" }}
            >
              <div className="cursor-pointer w-7" title="Save as Draft">
                <SaveIcon
                  onClick={() => {
                    gameData.isPublished = "false";
                    saveDraft();
                  }}
                ></SaveIcon>
              </div>
              <div className="cursor-pointer w-7" title="Publish">
                <PublishIcon
                  onClick={() => {
                    gameData.isPublished = "true";
                    console.log(gameData);
                    publishGame();
                  }}
                ></PublishIcon>
              </div>
            </div>
          </FadeDiv>
        )}
      </div>
      <ul className="flex gap-12 mr-10">
        {menuItems.map((menuItem, index) => (
          <li key={index} className="text-xl menu-item">
            <Link href={menuItem.url}>{menuItem.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default MenuDesktop;
