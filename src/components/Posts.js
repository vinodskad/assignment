import { Col, Container, Row } from "react-bootstrap";
import { Button, Card, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { GetPostComments, GetPostsList } from "../actions/PostsAction";
import { useEffect, useState } from "react";

function Posts() {
  const dispatch = useDispatch();  
  const postsList = useSelector((state) => state.PostsList?.posts);
  const commentsList = useSelector((state) => state.PostsList?.comments);
  const [listItems, setListItems] = useState(10);
  const [showTitle, setShowTitile] = useState(true);
  const [favoritePost, setFavoritePost] = useState([]);
  const [comments, setComments] = useState();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = (item) => {
    setShow(true);
    readComments(item);
  };

  const hideShowTitile = () => {
    setShowTitile(!showTitle);
  };

  const getPostData = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((json) => {
        dispatch(GetPostsList(json));
      });
  };
  const addFavoritePost = (item) => {
    setFavoritePost([...favoritePost, item]);
  };
  const readComments = (item) => {
    fetch(`https://jsonplaceholder.typicode.com/comments?postId=${item}`)
      .then((res) => res.json())
      .then((json) => {
        dispatch(GetPostComments(json));
      });
  };
  useEffect(() => {
    
    if (commentsList) {
      setComments(commentsList);
    }
    // eslint-disable-next-line
  }, [commentsList]);
  return (
    <Container className="mt-3">
      <Row>
        <Col sm={6} className="mb-2">
          <h4>Favorite Posts {favoritePost?.map((item) => item + ", ")}</h4>
        </Col>
        <Col sm={6} className="text-right mb-2">
          <Button variant="primary" onClick={getPostData}>
            Get Posts
          </Button>
        </Col>
      </Row>
      <Row>
        {postsList &&
          postsList?.slice(0, listItems)?.map((item, i) => (
            <Col sm={12} className="mb-2" key={i + 1}>
              <Card>
                <Card.Body>
                  <Card.Title>
                    {showTitle && (
                      <>
                        {item?.id} {item?.title}{" "}
                      </>
                    )}
                    <Button variant="link" size="sm" onClick={hideShowTitile}>
                      {showTitle === true ? "Hide Title" : "Show Title"}
                    </Button>
                  </Card.Title>
                  <Card.Text>{item?.body}</Card.Text>

                  <Button
                    variant="primary"
                    style={{ width: "fit-content" }}
                    onClick={() => addFavoritePost(item?.id)}
                  >
                    Favorite Posts
                  </Button>
                  <Button
                    variant="primary"
                    style={{ float: "right" }}
                    onClick={() => handleShow(item?.id)}
                  >
                    Read Comments
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        <Col sm={12} className="text-right mb-2">
          {postsList?.length !== 0 ? (
            <Button
              variant="primary"
              onClick={() => setListItems(listItems + 10)}
            >
              Load More Posts
            </Button>
          ) : (
            ""
          )}
        </Col>
      </Row>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Comments</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ul>
            {comments?.map((item) => (
              <li key={item?.id}>{item?.body}</li>
            ))}
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default Posts;
