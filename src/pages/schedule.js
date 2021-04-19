import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Calendar from 'react-calendar';
import '../Calendar.css';
import 'date-fns';
import AprilMenu from '../common/april.json';
import { UserInfo } from '../common/userInfo';
import { Notification } from '../common/notification';
import { spacing } from '@material-ui/system';
import { MenuCalendar } from '../common/menuCalendar';
import axios from 'axios';

export function Schedule() {
    const date = useState(new Date());
    const [ posts, setPosts] = useState({});

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(res => {
            console.log(res)
            setPosts(res.data);
        }).catch(err => {
            console.log(err);
        })
    })

    //state の日付と同じ表記に変換
    // function getFormatDate(date) {
    //     return `${date.getFullYear()}${('0' + (date.getMonth() + 1)).slice(-2)}${('0' + date.getDate()).slice(-2)}`;
    // }

    //日付の内容を出力
    // function getTileContent({ date }) {
    //     const day = getFormatDate(date);
    //     console.log(day);
    //     var message = null;

    //     return (
    //         <p>
    //             {AprilMenu.map(element => {
    //                 if (day === element.startDate) {
    //                     return <p>{element.content}</p>;
    //                 }
    //             })}

    //         </p>

    //     );
    // }
    return (
        // <Grid container direction="row">
        //     <Grid item xs={3}>
        //         <Grid container direction="column">
        //             <Box m={1}><Grid item p={5}><UserInfo /></Grid></Box>
        //             <Box m={1}><Grid item m={1}><Notification /></Grid></Box>
        //         </Grid>
        //     </Grid>
        //     <Grid item xs={9}>
        //         <MenuCalendar/>
        //     </Grid>
        // </Grid>
        <div>
            リスト
            {/* {posts.map(post => <li key={post.id}>{post.title}</li>)} */}
            {posts.title}
        </div>
    )
}
