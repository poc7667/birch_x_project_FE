import useInput from "../hooks/useInput";
import { Constants } from "../Constants";
import { useEffect } from "react";

const UpdateShipment = (props) => {
    const {employees, orders, shipments, dataRow} = props;
    const [selectedOrderId, setOrderId] = useInput();
    const [selectedEmployeeId, setEmployeeId] = useInput();
    const [selectedShipmentId, setShipmentId] = useInput();

    useEffect(() => {
        setShipmentId(dataRow.id);
    }, [])

    const updateShipment = async () => {
        console.log([selectedOrderId, selectedEmployeeId, selectedShipmentId])
        const selectedShipment = shipments.filter(item => item.id === selectedShipmentId)[0];
        const {recipient, shippingAddress} = selectedShipment;
        const postData = {
            method: 'PUT', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json, text/plain, */*'
            },
            body: JSON.stringify({
                employee_id: parseInt(selectedEmployeeId),
                recipient: recipient,
                shippingAddress: shippingAddress
            }) // body data type must match "Content-Type" header
        }
        const response = await fetch(Constants.SERVER_URL + `/shipments/${dataRow.id}/`, postData).then(data => data.json());
        props.updateShipment(response);
    }

    const updateDelivery = async () => {
        const selectedShipment = shipments.filter(item => item.id === selectedShipmentId)[0];
        console.log(selectedShipmentId);
        console.log(selectedShipment);
        const {recipient, shippingAddress} = selectedShipment;
        const postData = {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json, text/plain, */*'
            },
            body: JSON.stringify({
                shipment_id: parseInt(selectedShipment.id),
                order_id: parseInt(selectedShipment.order_id)
            }) // body data type must match "Content-Type" header
        }
        const response = await fetch(Constants.SERVER_URL + `/deliveries/`, postData).then(data => data.json());
        props.addDelivery(response);
    }
    return (
        <>
            <div className="row">
                <div className="col-md-6 input-group">
                        <select className="form-select form-control" aria-label="Default select example"
                                onChange={setEmployeeId}>
                            <option selected>Select employee</option>
                            {employees.map(employee => <option key={employee.id}
                                                               value={employee.id}>{employee.firstName} {employee.lastName}</option>)}
                        </select>

                        <a type="button" id="submit" name="send" className="btn btn-primary" defaultValue="Send Message"
                           onClick={(e) => {
                               e.preventDefault();
                               updateShipment();
                           }}
                        >
                            Update
                        </a>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 input-group">
                    <a type="button" id="submit" name="send" className="btn btn-primary" defaultValue="Send Message"
                       onClick={(e) => {
                           e.preventDefault();
                           updateDelivery();
                       }}
                    >
                        Make delivered
                    </a>
                </div>
            </div>
        </>
    )
}
export default UpdateShipment;
