import React from "react";
import { useHistory } from "react-router-dom";
import Button from "../Components/UI/Button";

export const GoBack = () => {
    const { goBack } = useHistory();

    return (
        <Button
            color="primary"
            size="sm"
            className="m-2 text-white"
            onClick={goBack}
            children="Назад"
        />
    );
};
