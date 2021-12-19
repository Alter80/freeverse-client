import React, { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';

const RemoveGame = () => {
    const [allGames, setAllGame] = useState([]);
    // const { user } = useAuth();


    useEffect(() => {
        fetch('https://serene-garden-71214.herokuapp.com/games')
            .then(res => res.json())
            .then(data => setAllGame(data));

    },
        [allGames]);

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure you want to delete')

        if (proceed) {
            const url = `https://serene-garden-71214.herokuapp.com/games/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Deleted Successfully')
                        const remainingData = allGames.filter(order => order._id !== id)
                        setAllGame(remainingData);
                    }
                })
        }
    }


    return (
        <Table striped bordered hover variant="dark">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Game Name</th>
                    <th className='w-25'>Image</th>
                    <th>Dev/Publisher</th>
                    <th>Category</th>
                    <th>Action</th>
                </tr>
            </thead>

            <tbody>
                {
                    allGames.map(game => <tr>
                        <td>{game.id}</td>
                        <td>{game.title}</td>
                        <td> <img className='w-50 img-fluid' src={game.thumbnail} alt="" srcset="" /> </td>
                        <td>{game.publisher}</td>
                        <td>{game.genre}</td>
                        <td><Button onClick={() => handleDelete(game._id)} variant="outline-light" className='mx-auto my-3 p-1'>Delete this Game</Button></td>
                    </tr>)
                }
            </tbody>
        </Table>
    );
};

export default RemoveGame;