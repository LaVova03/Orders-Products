import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { orders } from '../../data';

const Bootstrap = ({ isDeleteModal, showModalDelete, index }) => {

    const deleteOrder = (index) => {
        orders.splice(index, 1);
        showModalDelete(false);
    }

    return (
        <>
            <Modal
                show={isDeleteModal}
                onHide={() => showModalDelete(false)}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Вы уверены, что хотите удалить приход?</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4>
                        {orders[index]?.title}<br />
                    </h4>
                    Дата прихода: {orders[index]?.date}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => showModalDelete(false)}>
                        ОТМЕНИТЬ
                    </Button>
                    <Button variant="primary" onClick={deleteOrder}>УДАЛИТЬ</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Bootstrap;
