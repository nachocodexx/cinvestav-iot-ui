import RC, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { LoginForm } from "../components/LoginForm/LoginForm"

export const IndexPage: RC.FunctionComponent<any> = (props: any) => {
    const history = useHistory()

    useEffect(() => {
        console.log("CHECK IF IS AUTHENTICATED");
        history.push("/dashboard")

    }, [history])
    return <div>
        {/* <h1>index page </h1> */}
        <LoginForm />
    </div>
}