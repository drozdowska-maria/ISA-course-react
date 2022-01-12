import { useParams } from "react-router-dom";

export const Employeeinfo = () => {
    const employeeId = useParams().employeeId;
    return (
        <div>
            Tutaj będzie info o pracowniku o ID {employeeId}
        </div>
    )
}