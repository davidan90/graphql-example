import React from 'react';
import {Query} from 'react-apollo';
import gql from 'graphql-tag';

const Courses = () => (
    <Query query={gql`
        {   
            allCourses {
                id
                title
                author
                description
                topic
            }
        }
    `}>
        {
            ({loading, error, data}) => {
                if(loading) {
                    return <span>Loading...</span>
                }

                if(error) {
                    return <span>Error</span>
                }

                return data.allCourses.map(course => (
                    <div key={course.id}>
                        <p>{`${course.title} by ${course.author}`}</p>
                    </div>
                ))
            } 
        }
    </Query>
)

export default Courses;