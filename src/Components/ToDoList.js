import './ToDoList.css'
import { Row, Col } from 'react-bootstrap'
function ToDoList(props) {
    const deleteItem = (key) => {
        const newList = props.itemList.filter((list) => {
            return list.key !== key
        })
        props.updateItemList(newList)
    }
    return (
        <div>
            {
                props.itemList.map((list) => {
                    return <div key={list.key}>
                        <Row className='form'>
                            <Col lg={7}><li>{list.item}</li></Col>
                            <Col lg={5}><button onClick={() => deleteItem(list.key)} className='remove'>REMOVE</button></Col>
                        </Row>
                    </div>
                })
            }
        </div>
    )
}
export default ToDoList