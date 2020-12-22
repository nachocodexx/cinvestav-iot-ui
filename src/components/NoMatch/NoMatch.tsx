import RC from 'react'
import noFound from '../../images/no-found.svg'
import Flex from '@react-css/flex'
import './style.scss';
export const NoMatch: RC.FunctionComponent<any> = (props: any) => {

    return (
        <Flex justifyCenter alignItemsCenter className="full-vph">
            <div>
                <img src={noFound} alt="" />
                <h1 className="not-found-title color-grey">Page not found <span className="color-primary" >404</span></h1>
            </div>
        </Flex>


    )
}