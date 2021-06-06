import { useContext, useEffect, useState } from "react";
import { Constants } from "../Constants";
import { StoreContext } from "../store/storeReducer";
import { LoginForm } from "../components/LoginForm";
import Action from "../constants/Action";
import { Redirect, useHistory } from "react-router-dom";

const LoginPage = () => {
    const history = useHistory();

    const {storeState, dispatch} = useContext(StoreContext);
    const {user} = storeState;
    const [loginState, setLoginState] = useState(false);

    useEffect(async () => {
        if (loginState){
            dispatch({type: Action.login});
        }
    },[loginState])

    useEffect(() => {
        if (user.id){
            history.push('/products');
        }
    },[user])

    const loginHandler = () => {

        setLoginState(true);
    }

    return (
        <div className="component-wrapper rounded shadow">
            <LoginForm
                clickLoginHandler={loginHandler}
                title={`User Login`} />
        </div>
    )
}

export default LoginPage;
