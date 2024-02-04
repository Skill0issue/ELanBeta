import React from "react";
import { Card, CardHeader, CardBody, CardFooter, Typography, Button } from "@material-tailwind/react";

const WorkshopCard = ({ title, description, img, registration,timefrom,timeto,mode, ...props }) => {
    return (
        <Card className="w-full p-4 mt-6 rounded- md:w-96" style={{ backgroundColor: "#F68989" }}>
            <CardHeader color="blue-gray" className="relative h-56">
                <img
                    src={img}
                    alt="card-image"
                />
            </CardHeader>
            <CardBody>
                <Typography variant="h5" color="blue-gray" className="mb-2 font-bold">
                    {title}
                </Typography>
                <Typography className="pb-4 font-[500] text-justify overflow-clip h-36">
                    {description}
                </Typography>
                <Typography className="py-2 font-semibold">
                    Mode: {mode}
                    <br />
                    From: {timefrom}
                    <br />  
                    To: {timeto}
                </Typography>
            </CardBody>
            <CardFooter className="pt-0">
                <a href={registration} target="blank">
                    <Button style={{ backgroundColor: "#874356" }} ripple="light" className="px-4 py-2 text-lg rounded-full md:text-base md:px-3 md:py-1">REGISTER</Button>
                </a>
            </CardFooter>
        </Card>
    );
};

export default WorkshopCard;
