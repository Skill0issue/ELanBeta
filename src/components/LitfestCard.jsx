import React from "react";
import { Card, CardHeader, CardBody, CardFooter, Typography, Button } from "@material-tailwind/react";

const LitfestCard = ({ title, description, img, registration, ...props }) => {
    return (
        <Card className="mt-6 w-full md:w-96 rounded p-4" style={{ backgroundColor: "#F68989" }}>
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
                    {description}
                </Typography>
            </CardBody>
            <CardFooter className="pt-0">
                <a href={registration}>
                    <Button style={{ backgroundColor: "#874356" }} ripple="light" className="rounded-full text-lg md:text-base px-4 md:px-3 py-2 md:py-1">REGISTER</Button>
                </a>
            </CardFooter>
        </Card>
    );
};

export default LitfestCard;
