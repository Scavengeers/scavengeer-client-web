import React, { type ReactElement } from "react";
import { useRouter } from "next/router";
import { type saveGameInfo } from "../../types/global";
import { Button, Menu, MenuItem } from "@mui/material";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import GameListAuthored from "src/Components/Editor/GameListAuthored";

interface Props {
    game: saveGameInfo;
    handleClose: () => void;
    gameId: string;
}

const Editor = (props: Props): ReactElement => {
    // const { game, gameId } = props;
    const router = useRouter();

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    // Kazuki: this function below is connected to the open New Case button. I assume the request happens here.
    const handleCreateNewGameClick = (e: React.MouseEvent) => {
        e.preventDefault();
        router.push({
            pathname: "/editor/[gameId]",
            query: { gameId: "gameId" },
        });
    };

    return (
        <>
            <div className="mt-40 overflow-x-auto">
        <GameListAuthored/>
            </div >

            <div className="flex justify-center p-10">
                <button id="themeButton" onClick={handleCreateNewGameClick}>Open New Case</button>
            </div>
        </>
    )
};

export default Editor;

{/* <table className="w-full text-sm text-center ">
    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
            <th scope="col" className="px-2 py-3 font-body2">
                case title
            </th>
            <th scope="col" className="px-2 py-3 font-body2">
                id
            </th>
            <th scope="col" className="px-2 py-3 font-body2">
                created on
            </th>
            <th scope="col" className="px-2 py-3 font-body2">
                last modified
            </th>
            <th scope="col" className="px-2 py-3 font-body2">

            </th>

        </tr>
    </thead>
    <tbody>
        <tr className="bg-white border-b">
            <th
                scope="row"
                className="px-2 py-2 font-heading whitespace-nowrap"
            >
                Placeholder Case Name
            </th>
            <td className="px-2 py-4 font-heading">Placeholder ID</td>
            <td className="px-2 py-4 font-heading">Placeholder creation date</td>
            <td className="px-2 py-4 font-heading">
                Placeholder creation date
            </td>
            <td className="px-2 py-4 font-heading">
                <button id="themeButton">Edit</button>
                <Button
                    sx={{
                        borderRadius: "9999px",
                        height: "2rem",
                        width: "2rem",
                    }}
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                >
                    <MoreHorizIcon />
                </Button>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >
                    <MenuItem onClick={handleClose}>Unpublish</MenuItem>
                    <MenuItem onClick={handleClose}>Set Private</MenuItem>
                    <MenuItem onClick={handleClose} sx={{ color: "red" }}>Delete</MenuItem>
                </Menu>

            </td>
        </tr>
    </tbody>
</table> */}