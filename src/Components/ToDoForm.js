import { useState } from 'react'
import ToDoList from './ToDoList'
import { Row, Col } from 'react-bootstrap'
import './ToDoForm.css'
function ToDoForm() {
    const [currentItem, setCurrentItem] = useState('')
    const [itemList, updateItemList] = useState([])
    const onChangeHandler = (event) => {
        setCurrentItem(event.target.value)
    }
    const addItemToList = () => {
        if (currentItem === '') {
            return alert('add option')
        }
        updateItemList([...itemList, { item: currentItem, key: Date.now() }])
        setCurrentItem('')
    }
    return (
        <div>
            <h1 className='title'>What's On Your Mind Today?!</h1>
            <Row className='form'>
                <Col lg={7}><input value={currentItem} onChange={onChangeHandler} placeholder='Add You Task!' /></Col>
                <Col lg={5}><button onClick={addItemToList}>ADD</button></Col>
            </Row>
            <ToDoList itemList={itemList} updateItemList={updateItemList} />
        </div>
    )
}
export default ToDoForm