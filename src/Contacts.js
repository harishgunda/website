
import React, { Component } from 'react';
import './App.css';
import contacts from './contacts.json';

class Contacts extends Component {



    render() {

        return (
            <div>
                <table className="table table-striped">

                    <thead>
                        <tr>
                            <th>S.no</th>
                            <th>Name</th>
                            <th>Designation</th>
                            <th>Phone</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>

                        {contacts && contacts.map((list, index) => {
                            return (
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{list[0]}</td>
                                    <td>{list[1]}</td>
                                    <td>{list[2]}</td>
                                    <td>{list[3]}</td>
                                </tr>
                            )
                        })}

                    </tbody>
                </table>
            </div>
        );
    }
}

export default Contacts;
