import React, { type FC, type ReactElement } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Image from "next/image";
import heroImage from "public/Hero.jpg";

const NarrativeModule: FC = (): ReactElement => {
  return (
    <div className="self-center w-2/4">
      <Card>
        <div className="self-center">
          <h1 className="self-center p-5 text-3xl text-center uppercase font-heading">
            The salad murder mysteries
          </h1>
          <div className="m-4">
            <Image src={heroImage} alt="Tokyo Noire Hero" />
          </div>
          <p>Hello</p>
        </div>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default NarrativeModule;
