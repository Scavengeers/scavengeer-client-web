// @ts-nocheck
import React, {
  type FC,
  type ReactElement,
  useState,
  useEffect,
  useContext
} from "react";
import { Box } from "@mui/material";
// import { saveGameInfo } from "../../types/global";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import VisibilityIcon from '@mui/icons-material/Visibility';
import {
  DataGrid,
  GridColDef,
  GridValueFormatterParams,
  GridRowParams,
  GridActionsCellItem,
  GridRowId
} from "@mui/x-data-grid";
import axios from "axios";
import moment from "moment";
import Link from "next/link";
import PublishIcon from '@mui/icons-material/Publish';
import AppContext from "src/AppContext.ts";

interface props {
  listOfGamesByAuthor: [] | null;
}

const GameListAuthored: FC = (props: props): ReactElement => {
  const value = useContext(AppContext);
  const { setGameData, setGameModules, setGameInfoModule } = value;
  const { listOfGamesByAuthor } = props;
  const [rows, setRows] = React.useState<[]>(listOfGamesByAuthor);

  
  useEffect(() => {
    setRows(listOfGamesByAuthor);
  }, []) 

  const deleteStory = React.useCallback(
    (id: GridRowId) => () => {
      setTimeout(() => {
        setRows((prevRows) => prevRows.filter((row) => row._id !== id));
      });
    },
    [],
  );

  // const handleEdit = React.useCallback(
  //     (id: GridRowId) => async() => {
  //       console.log("🍓hello this is function")
  //   await axios.get(`http://localhost:2000/editor/${id}`).then((response) => {
  //     console.log(response.data)
  //     // setGameData(response.data[0]);
  //     // setGameModules(response.data[0].gameModules);
  //     // setGameInfoModule(response.data[0]);
  //   });

  //    console.log("triggered");
  //     },
  //     [],
  //   );
  const handleEdit = async (id: GridRowId) => {
    console.log("this is the selected Id: ", id)
    await axios.get(`http://localhost:2000/editor/${id}`)
    .then(response => console.log(response.data[0]))
  } 


  const handleDelete = async (id: string) => {
    await axios
      .delete(
        `https://tokyo-noire-server-development.herokuapp.com/editor/${id}}`
      )
      .then((response) => setListOfGamesByAuthor(response.data));
  };

  // const togglePublish = React.useCallback(
  //   (id: GridRowId) => () => {
  //     setRows((prevRows) =>
  //       prevRows.map((row) =>
  //       row._id === id ? { ...row, isPublished: !row.isPublished } : row,
  //       ),
  //     );
  //   },
  //   [],
  // );

  // const toggleVisibility = React.useCallback(
  //   (id: GridRowId) => async() => {
  //     setRows((prevRows) =>
  //       prevRows.map((row) =>
  //       row._id === id ? { ...row, isPrivate: !row.isPrivate } : row,
  //       ),
  //     );
  //     console.log(id)
  //     await axios.patch(`http://localhost:2000/${id}`, {
  //       isPublished: true,
  //     });
  //   },
  //   [],
  // );

  const columns = React.useMemo<GridColumns<Row>>(
    () => [
      {
        field: "titleOfGame",
        headerName: "Case Name",
        minWidth: 300,
        flex: 1,
      },

      {
        field: "isPublished",
        headerName: "Published",
        type: "boolean",
        minWidth: 100,
        flex: 3,
      },
      {
        field: "isPrivate",
        headerName: "Visibility",
        type: "boolean",
        minWidth: 100,
        flex: 2,
      },
      {
        field: "dateCreated",
        headerName: "Created On",
        type: "date",
        minWidth: 150,
        sortable: true,
        flex: 4,
        valueFormatter: (params: GridValueFormatterParams) =>
          `${moment(params?.value).format("DD/MM/YYYY hh:mm A")}`,
      },
      {
        field: "dateUpdated",
        headerName: "Last Modified",
        type: "date",
        minWidth: 150,
        sortable: true,
        flex: 5,
        valueFormatter: (params: GridValueFormatterParams) =>
          `${moment(params?.value).format("DD/MM/YYYY hh:mm A")}`,
      },
      {
        minWidth: 200,
        field: "actions",
        type: "actions",
        flex: 6,

        getActions: (params) => [
          <GridActionsCellItem
            key="1"
            icon={<ModeEditIcon />}
            label="Edit"
            onClick={() => {
              handleEdit(params.id)
            }
            }
            // component={Link}
            // href={`/editor/${params.id}`}
          />,
          // <GridActionsCellItem
          //   key="2"
          //   icon={<PublishIcon />}
          //   onClick={togglePublish(params.id)}
          //   label="Publish"
          //   component={Link}
          //   href={``}
          // />,
          // <GridActionsCellItem
          //   key="3"
          //   icon={<VisibilityIcon />}
          //   onClick={toggleVisibility(params.id)}
          //   label="Visibility"
          // />,
          <GridActionsCellItem
            key="4"
            icon={<DeleteIcon />}
            onClick={deleteStory(params.id)}
            label="Delete"
          />,
        ],
      },
    ],
    [deleteStory]
  );



  return (
    <>

  
      <Box sx={{ height: 400}}
  justifyContent="center"
  alignItems="center">
        <DataGrid
          rows={rows}
          getRowId={(row) => row._id}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          disableSelectionOnClick
        />
      </Box> 

    
      </>
  );
};

export default GameListAuthored;
