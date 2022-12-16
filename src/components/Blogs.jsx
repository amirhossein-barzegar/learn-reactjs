import React,{Component} from 'react'
import axios from 'axios'
import Accordion from 'react-bootstrap/Accordion';
import { Link } from "react-router-dom";

class Blogs extends Component {

    state = {
        posts: [],
    }

    componentDidMount = () => {
        let thiskeyword = this;
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(function (response) {
            // handle success
            var responseData = response.data;
            thiskeyword.setState({posts: responseData});
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
    }

    render() {
        const postsElem = this.state.posts.map((post, index) => {
            return (
                <Accordion.Item eventKey={index} key={index}>
                    <Accordion.Header>{post.title}</Accordion.Header>
                    <Accordion.Body>
                    {post.body}
                    </Accordion.Body>
                </Accordion.Item>
            )
        });
        return (
            <>
                <div class="d-flex justify-content-between px-4">
                    <h1>Blogs Page</h1> 
                    <Link to="/newpost" class="btn btn-primary">Add New</Link>
                </div>

                <Accordion>
                    {postsElem}
                </Accordion>
            </>

        );
    }
}

export default Blogs;