import { change } from 'dom7';
import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import { userInfo as getUserInfo, toggleWatchlist} from '../../../service/user';
import CourseFigureById from '../CourseFigureById';

export default function WatchlistBody(props) {
    
    const [userInfo, setUserInfo] = useState({watchlist:[]});
    const [change, setChange] = useState(0)

    useEffect(() => {
        const fetch = async () => {
            const user = await getUserInfo(localStorage.getItem('userId'));
            setUserInfo(user);
        }

        fetch();
    }, [change])

    const removeCourse = async (c) => {
        const result = await toggleWatchlist(localStorage.getItem('userId'), c)
        if(result) {
            setChange(change+1)
        }
    }

    return (
        <>
            <div style={{marginBottom: "50px"}}>
                <div className="contact-one">
                    <div className="container">
                        <h2 className="contact-one__title text-center" >Watchlist</h2>
                    </div>
                </div>
                <div className="container" style={{marginTop: "-120px"}}>
                    <div className="row">
                        <div style={{display: "flex"}}>
                            <Link replace to="/my-courses">
                                <div className="user-profile__form-second my-courses-tab">
                                    <h2 className="user-profile__form-title" style={{color: "#81868a"}}>
                                        My Courses
                                    </h2>
                                </div>
                            </Link>
                            <div className="user-profile__form-top my-courses-tab">
                                <h2 className="user-profile__form-title">
                                    Watchlist
                                </h2>
                            </div>
                            
                        </div>
                    </div>

                    <div className="row active-tab">
                    {userInfo.watchlist?
                    userInfo.watchlist.map(c => {
                        return ( 
                            <div key={c}>
                                <button onClick={()=>removeCourse(c)}>x</button>
                                <CourseFigureById courseId={c}></CourseFigureById>
                            </div>
                        )
                    }):''}                    
                    </div>


                </div>
            </div>
        </>
    )
}
