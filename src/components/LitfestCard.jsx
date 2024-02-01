import React from "react";
import { Card, CardHeader, CardBody, CardFooter, Typography, Button } from "@material-tailwind/react";

const LitfestCard = ({ title, description, img, registration, submission, ...props }) => {
      const formattedDescription = description.split("<br />")
      .map((line, index) => (
          <p key={index}>
            {line}
            <br />
          </p>
        ));
    return (
      <div className="flex flex-col justify-center">
        <Card className="mt-6 w-full md:w-96 rounded p-4 h-[40rem]" style={{ backgroundColor: "" }}>
            <CardHeader color="blue-gray" className="relative h-56">
                <img
                    src={img}
                    alt="card-image"
                />
            </CardHeader>
            <CardBody>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                    {title}
                </Typography>
                <Typography>
                    {formattedDescription}
                </Typography>
            </CardBody>
            <CardFooter className="pt-0">
                <a href={registration} target="_blank">
                    <Button style={{ backgroundColor: "#874356" }} ripple="light" className="rounded-full text-lg md:text-base px-4 md:px-3 py-2 md:py-1">{submission ? "SUBMIT HERE": "REGISTER"}</Button>
                </a>
            </CardFooter>
        </Card>
      </div>
    );
};

export default LitfestCard;
