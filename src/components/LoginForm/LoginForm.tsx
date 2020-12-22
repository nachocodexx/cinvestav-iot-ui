import RC from 'react'
import Flex from '@react-css/flex'
import { useHistory } from 'react-router-dom'


export const LoginForm: RC.FunctionComponent<any> = (props: any) => {

    const history = useHistory()

    function onSubmit() {
        console.log("SUBMIT");
        history.push("/sensors")

    }


    return <Flex justifyCenter alignItemsCenter className="full-height">
        <main className="full-height">
            <div className="iot-form">
                <div className="iot-field">
                    <input className="iot-input iot-input-color--default" type="text" placeholder="E-mail Address" autoComplete="no" />
                </div>
                <div className="iot-field">
                    <input className="iot-input iot-input-color--default" type="text" placeholder="Password" autoComplete="no" />
                </div>
                <div className="iot-field">
                    <button onClick={onSubmit} className="iot-button">LOGIN</button>
                </div>
            </div>

        </main>
    </Flex>
}