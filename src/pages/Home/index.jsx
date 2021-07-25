import React, { useEffect, useState } from 'react';
import { HomeHeader } from '../../common/components/Header';
import Slider from '../../common/components/Slider';
import CourseCat from '../../common/components/HomeCourseCat';
import CallToActionOne from '../../common/components/CallToActionOne';
import TeamTab from '../../common/components/TeamTab';
import CourseSwiper from '../../common/components/CourseSwiper';
import CallToActionTwo from '../../common/components/CallToActionTwo';
import Testimonial from '../../common/components/Testimonial';
import VideoDisplay from '../../common/components/VideoDisplay';
// import Brands from '../../common/components/Brands';
import CallToActionThree from '../../common/components/CallToActionThree';
import Footer from '../../common/components/Footer';
// import CourseFigure from '../../common/components/CourseFigure';
import { getAllCategories } from '../../service/categories';
import { queryMostViewsCourses, queryNewestCourses } from '../../service/courses';


const Home = () => {
    const [categoryList, setCategoryList] = useState([]);
    const [mostViewCourseList, setMostViewCourseList] = useState([]);
    const [newestCourseList, setNewestCourseList] = useState([]);

    useEffect(() => {
        setTimeout(async () => {
            const categories = await getAllCategories();
            // console.log(categories);
            setCategoryList(categories);
            const mostViewCourses = await queryMostViewsCourses();
            setMostViewCourseList(mostViewCourses);
            const newestCourses = await queryNewestCourses();
            setNewestCourseList(newestCourses);
        }, 300);
    }, [])
    
    return (
        <>
            <HomeHeader categoryList={categoryList}/>
            <Slider categoryList={categoryList}/>
            <CourseCat/>
            <CallToActionOne/>
            <TeamTab/>
            <CourseSwiper type="most-view" courseList={mostViewCourseList}/>
            <CourseSwiper type="newest" courseList={newestCourseList}/>
            <CallToActionTwo/>
            <Testimonial/>
            <VideoDisplay/>
            <CallToActionThree/>
            {/* <CourseFigure/> */}
            <Footer/>
        </>
        
    );
}

export default Home;