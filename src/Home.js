
import React, { Component } from 'react';
import medal from './resources/medal.svg';
import './App.css';

class Home extends Component {

    render() {
        return (
            <div>
                <div className="firstscreen" id="menu-bar">
                    <div className="jumbo-text">
                        <div>
                            AP Municipal Commissioner's Association
                        </div>
                        <p>
                            To unite all Employers in a common endeavour to establish and
                            thereafter maintain the best possible relations among the Members
                            of the Association.
                        </p>
                        <button className="button">learn more</button>
                    </div>
                    <div className="background"></div>
                </div>

                <div className="objectives">
                    <p className="objectives-header">Our Objectives</p>

                    <div>
                        <i className="fas fa-users fa-4x"></i>
                        <p>
                            To unite all Employers in a common endeavour to establish and thereafter
                            maintain the best possible relations among the Members of the Association.
                        </p>
                    </div>


                    <div>
                        <i className="fas fa-handshake fa-4x"></i>
                        <p>
                            To represent, communicate and co-operate and/or act as an authoriative
                            medium of communication with the Government, Government departments, public
                            authorities and services, constituted bodies, unions, associations, on all
                            other matters affecting generally in regard to be welfare of the members of
                            the Association or the particular interests of members.
                        </p>
                    </div>

                    <div>
                        <i className="fas fa-bullseye fa-4x"></i>
                        <p>
                            At the request of any Member, group of Members or of all Members jointly
                            to represent on their behalf to the Government.
                        </p>
                    </div>


                    <div>
                        <i class="fas fa-balance-scale fa-4x"></i>
                        <p>
                            To promote and Undertake by negotiation and/or arbitration the settlement of any
                            dispute which may arise between individual Members and their respective employees
                            or between the Association.
                        </p>
                    </div>
                </div>

                <div className="latest-news">

                    <p className="latest-news-header">What's Happening?</p>
                    <div className="latest-news-inner">

                        <div className="latest-news-card">
                            <div className="latest-news-top">
                                <div className="latest-news-number">1</div>
                                <div className="latest-news-heading">Association Meeting</div>
                            </div>
                            <div className="latest-news-body">1st association meeting is held on 21-09-2018</div>
                        </div>


                        <div className="latest-news-card">
                            <div className="latest-news-top">
                                <div className="latest-news-number">1</div>
                                <div className="latest-news-heading">Enhancements</div>
                            </div>
                            <div className="latest-news-body">Power enhancements to all commissioners</div>
                        </div>

                        <div className="latest-news-card">
                            <div className="latest-news-top">
                                <div className="latest-news-number">1</div>
                                <div className="latest-news-heading">Meetings</div>
                            </div>
                            <div className="latest-news-body">Meetings are held monthly once</div>
                        </div>


                        <div className="latest-news-card">
                            <div className="latest-news-top">
                                <div className="latest-news-number">1</div>
                                <div className="latest-news-heading">heading</div>
                            </div>
                            <div className="latest-news-body">1st association meeting is held on 21-09-2018</div>
                        </div>

                    </div>
                </div>

                <div className="membership">
                    <div className="membership-right">
                        <img src={medal} alt="Logo" className="medal" />
                    </div>
                    <div className="membership-left">
                        <p className="membership-header">Membership</p>
                        <p>
                            a) Membership of the Association shall be open to every Commissioner in active service and to no other person
                        </p>
                        <p>
                            b) The annual subscription for membership shall be Rs.100/- per Calendar year. It Shall be payable before the close of January each year
                        </p>
                        <button className="button">sign up</button>

                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
