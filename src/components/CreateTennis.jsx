import React from 'react';
import '../styles/create_tennis.scss';
import { Formik, Form, Field, FieldArray, ErrorMessage } from 'formik';
import 'react-bootstrap'
import axios from 'axios';

export function CreateTennis(props) {
    // const [ id, setID ] = React.useState([]); 

    async function postData(values) {
        let url = 'https://ohuq0ojxz2.execute-api.us-west-2.amazonaws.com/prod/tennis';
        let config = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: values
        }
        await axios.post(url, {config})
            .then(result => {
                console.log(result.data.body);
                props.history.push('/tennis/' + result.data.body.id);
            })
    }

    return (
        <div className="container">
            <h1 className="tennis-title">Create your Tennis schedule!</h1>
            <Formik
                initialValues={{ title: '', group_size: '2', capacity: '', weeks: '', player_list: [] }}
                onSubmit={(values, { setSubmitting }) => {
                    // alert(JSON.stringify(values, null, 2));
                    postData(values);
                    // console.log(id);
                    // props.history.push('/tennis/' + id);
                    setSubmitting(false);
                }} 
                render={({ values }) => (
                    <Form className="container">
                        <div className="tennis-form">
                            <div className="row row-title">
                                <label htmlFor="title" className="col-sm">
                                    Tennis Schedule Title
                                </label>
                                <Field type="title" name="title" placeholder="Title.." className="col-sm"/>
                            </div>
                            <div className="row row-title">
                                <label htmlFor="capacity" className="col-sm">
                                    Tennis Court Capacity
                                </label>
                                <Field type="capacity" name="capacity" placeholder="Capacity.." className="col-sm"/>
                            </div>
                            <div className="row row-title">
                                <label htmlFor="weeks" className="col-sm">
                                    Number of Weeks
                                </label>
                                <Field type="weeks" name="weeks" placeholder="# Weeks.." className="col-sm"/>
                            </div>
                            <div className="row row-title">
                                <label htmlFor="group_size" className="col-sm">
                                    Type
                                </label>
                                <Field as="select" name="group_size" className="col-sm">
                                    <option value="2">Singles</option>
                                    <option value="4">Doubles</option>
                                </Field>
                            </div>
                            <label htmlFor="player_list" className="player-list-title">
                                Player List
                            </label>
                        </div>
                        <FieldArray
                            name="player_list"
                            render={arrayHelpers => (
                                <div className="player-list">
                                    {
                                        values.player_list.map((player, index) => (
                                            <div key={index}>
                                            <Field name={`player_list.${index}`} />
                                            <button type="button" className="x-button"
                                                onClick={() => arrayHelpers.remove(index)} // remove a friend from the list
                                            > X </button>
                                            </div>
                                        ))
                                    }
                                    <button type="button" className="add-button" onClick={() => arrayHelpers.push('')}>
                                        {/* show this when user has removed all friends from the list */}
                                        Add a player
                                    </button>
                                </div>
                            )}
                        />
                        <div>
                            <button type="submit" className="submit-button">Submit</button>
                        </div>
                    </Form>
                    )} >
            </Formik>
        </div>
    );
}