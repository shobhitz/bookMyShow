import { Col, Form, Input, message, Modal, Row } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import { hideLoading, showLoading } from "../../redux/movieSlice";
import { addMovie, updateMovie } from "../../api/movies";

export default function MovieForm(props) {
    const {isModalOpen, formType, setIsModalOpen, selectedMovie ,setSelectedMovie, updateMoviesData} = props

    const dispatch = useDispatch()

    const onFinish = async (values) => {
        try{
            dispatch(showLoading())
            let response = null
            if(formType === 'add'){
                response = await addMovie(values)
            } else {
                const id = selectedMovie._id
                response = await updateMovie(id, values)
            }

            if(response.success){
                setIsModalOpen(false)
                message.success(response.message)
                updateMoviesData()
            } else {
                message.error(response.message)
            }
            setSelectedMovie(null)
            dispatch(hideLoading())

        }catch(err){

        }
    }

    return (
        <Modal 
            centered
            title={formType==="add" ? "Add Movie":"Update Movie"}
            open={isModalOpen}
            onCancel={handleCancel}
            width={800}
            footer={null}
        >
            <Form
                layout="vertical"
                initialValues={selectedMovie}
                onFinish={onFinish}
            >
                <Row gutter={{xs: 6, sm: 10, md: 12, lg: 16}}>
                    <Col span={24}>
                        <Form.Item label="Movie Name" name="title" rules={[{required: true, message: "Movie title is required"}]}>
                            <Input type="text" placeholder="Enter title" />
                        </Form.Item>
                    </Col>
                </Row>

            </Form>
        </Modal>
    )
}
