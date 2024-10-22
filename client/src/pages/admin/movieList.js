import { Button, Table } from 'antd'
import React, { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { getAllMovies } from '../../api/movies';
import { hideLoading, showLoading } from '../../redux/movieSlice';
import moment from "moment";
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import MovieForm from './movieForm';
import DeleteMovieModal from './deleteMovieModal';

function MovieList() {
    // const movies = [
    //     {
    //       key: '1',
    //       poster: 'Image1',
    //       name: 'Mastaney',
    //       description: 'Set in 1739, Nadar Shah`s undefeated army was attacked by Sikh Rebellions. ',
    //       duration: 120,
    //       genre: "Action",
    //       language: "Hindi",
    //       releaseDate: "Oct  25, 2023",
    //     },
    //     {
    //       key: '2',
    //       poster: 'Image2',
    //       name: 'Mastaney',
    //       description: 'Set in 1739, Nadar Shah`s undefeated army was attacked by Sikh Rebellions. ',
    //       duration: 120,
    //       genre: "Action",
    //       language: "Hindi",
    //       releaseDate: "Oct  25, 2023",
    //       action: "Delete"
    //     },
    //   ];

    const deleteHandler = async(movie) =>{
        const id = movie._id
        selectedMovie(movie)
        setIsDeleteModal(true)
    }

    const updateHandler = async(movie) =>{
        const id = movie._id
        setIsModalOpen(true);
        setFormType("update");
        selectedMovie(movie)
    }
    
    const tableHeadings = [
    {
        title:"Poster",
        dataIndex: "poster",
        render: (text, data) => {
            return <img width={75} height={115} style={{objectFit: "cover"}} src={data.poster} alt={data.name}/>
        }
    },
    {
        title:"Movie Name",
        dataIndex: "title"
    },
    {
        title:"Description",
        dataIndex: "description"
    },
    {
        title:"Duration",
        dataIndex: "duration",
        render: (text) =>{
            return `${text} Min`
        }
    },
    {
        title:"Genre",
        dataIndex: "genre"
    },
    {
        title:"Language",
        dataIndex: "language"
    },
    {
        title:"Release Date",
        dataIndex: "releaseDate",
        render: (text,data)=>{
            // can be done using inbuilt 
            return moment(data.releaseDate).format("DD-MM-YYYY");
        }
    },
    {
        title: "Action",
        render: (text, data) => {
            return (
            <>
                <EditOutlined onClick={updateHandler(data)}/>
                <DeleteOutlined onClick={deleteHandler(data)}/>
            </>

            )
        }
    }
    ]

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModal] = useState(false);
    const [movies, setMovies] = useState([]);
    const [formType, setFormType] = useState("add");
    const [selectedMovie, setSelectedMovie] = useState(null);

    const dispatch = useDispatch();

    useEffect(() => { 
        getData()
    })

    const getData = async () => {
        dispatch(showLoading())
        const response = await getAllMovies()
        const allMovies = response.data
        console.log(allMovies)
        setMovies(allMovies.map((item) => {
            return {...item, key: item._id}
        }))
        dispatch(hideLoading())
    }

  return (

    <>
        <div>
            <Button onClick={() => {
                setIsModalOpen(true);
                setFormType("add");

            }}>
                Add Movie
            </Button>
        </div>
        <Table dataSource={movies} columns={tableHeadings}></Table>
        {
            isModalOpen && (
                <MovieForm 
                    isModalOpen={isModalOpen}
                    setIsModalOpen={setIsModalOpen}
                    selectedMovie={selectedMovie}
                    setSelectedMovie={setSelectedMovie}
                    formType={formType}
                    updateMoviesData={getData}
                />
            )
        }
        {
            isDeleteModalOpen && (
                <DeleteMovieModal 
                    isDeleteModalOpen={isDeleteModalOpen}
                    setIsDeleteModal={setIsDeleteModal}
                    selectedMovie={selectedMovie}
                    setSelectedMovie={setSelectedMovie}
                    updateData={getData}
                />
            )
        }
    </>
  )
}

export default MovieList