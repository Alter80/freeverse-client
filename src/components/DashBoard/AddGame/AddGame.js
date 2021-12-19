import React from 'react';
import { Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const AddGame = () => {
    const { register, handleSubmit, formState: { errors, } } = useForm();


    const onSubmit = (inputData, e) => {
        fetch('https://serene-garden-71214.herokuapp.com/games', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(inputData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Game add successfully')
                    e.target.reset('')
                }
                else {
                    alert('ERROR!!!')
                }
            })
        e.preventDefault();
    }


    return (
        <div>
            <h2 className='text-white'>Add New Free Games</h2>
            <form className='order-form container w-50 mt-5' onSubmit={handleSubmit(onSubmit)}>
                <div className="form-label-group">
                    <input type="text" className="text-center form-control p-2" placeholder="title" {...register("title", { maxLength: 80 })} />
                </div>

                <div className="form-label-group">
                    <input type="url" className="text-center form-control p-2" placeholder="thumbnail" {...register("thumbnail", {})} />
                </div>

                <div className="form-label-group">
                    <input type="text" className="text-center form-control p-2" placeholder="short_description" {...register("short_description", {})} />
                </div>

                <div className="form-label-group">
                    <input type="text" className="text-center form-control p-2" placeholder="game_url" {...register("game_url", {})} />
                </div>

                <div className="form-label-group">
                    <input type="text" className="text-center form-control p-2" placeholder="genre" {...register("genre", {})} />
                </div>

                <div className="form-label-group">
                    <input type="text" className="text-center form-control p-2" placeholder="platform" {...register("platform", {})} />
                </div>

                <div className="form-label-group">
                    <input type="text" className="text-center form-control p-2" placeholder="publisher" {...register("publisher", {})} />
                </div>

                <div className="form-label-group">
                    <input type="text" className="text-center form-control p-2" placeholder="developer" {...register("developer", {})} />
                </div>

                <div className="form-label-group">
                    <input type="text" className="text-center form-control p-2" placeholder="release_date" {...register("release_date", {})} />

                </div>

                <div className="form-label-group">
                    <input type="url" className="text-center form-control p-2" placeholder="freetogame_profile_url" {...register("freetogame_profile_url", {})} />
                </div>


                <Button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit" >Submit</Button>

            </form>
        </div>
    );
};

export default AddGame;