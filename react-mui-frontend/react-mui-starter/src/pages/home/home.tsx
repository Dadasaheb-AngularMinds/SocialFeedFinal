import React,{useState} from "react";
import "./home.scss";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Collapse, Grid, IconButton, Skeleton, TextField } from "@mui/material";
// import AddCircleOutlineIcon from "@mui/icons-material/MoreVert/AddCircleOutline";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";


// const ExpandMore = styled((ExpandMoreProps) => {
//   const { expand, ...other } = ExpandMoreProps;
//   return <IconButton {...other} />;
// })(({ theme, expand }) => ({
//   transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
//   marginLeft: "auto",
//   transition: theme.transitions.create("transform", {
//     duration: theme.transitions.duration.shortest,
//   }),
// }));

export default function Login() {
 

  const[loading,setLoading] = useState(false)
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
      <Grid
                  container
                  spacing={2}
                  sx={{ maxWidth: 300, margin: "auto" }}
                >
                  <Grid item xs={6}>
                    <Card style={{ width: "400px" }}>
                      <CardHeader
                        style={{
                          maxWidth: 400,
                          margin: "auto",
                        }}
                        avatar={
                          loading ? (
                            <Skeleton
                              animation="wave"
                              variant="circular"
                              width={40}
                              height={40}
                            />
                          ) : (
                            <Avatar sx={{ bgcolor: "red" }}>
                              <img
                                // src={
                                //   feed.userProfile &&
                                //   feed.userProfile
                                // }
                               
                              />
                              {/* {feed.userName} */}
                            </Avatar>
                          )
                        }
                        action={
                          loading ? null : (
                            <IconButton
                              aria-label="settings"
                              id="basic-button"
                              // aria-controls={open ? "basic-menu" : undefined}
                              aria-haspopup="true"
                              // aria-expanded={open ? "true" : undefined}
                              // onClick={openEditPost}
                            >
                              <MoreVertIcon />
                            </IconButton>
                          )
                        }
                        title={
                          loading ? (
                            <Skeleton
                              animation="wave"
                              height={10}
                              width="80%"
                              style={{ marginBottom: 6 }}
                            />
                          ) : (
                            console.log(null)
                            // feed.userName
                          )
                        }
                      />

                      {loading ? (
                        <Skeleton
                          sx={{ height: 190 }}
                          animation="wave"
                          variant="rectangular"
                        />
                      ) : (
                        <CardMedia
                          component="img"
                          height="194"
                          image="img"
                          alt="Paella dish"
                        />
                      )}

                      <CardContent>
                        <Grid item xs={12}>
                          <TextField
                            id="standard-basic"
                            label="add a comment"
                            // value={newComment}
                            variant="standard"
                            // onChange={(e) => setNewComment(e.target.value)}
                            fullWidth
                          />
                        </Grid>
                        <Grid item xs={12}>
                          {/* <AddCircleOutlineIcon
                            // onClick={() => addNewComment(i)}
                          /> */}
                        </Grid>
                      </CardContent>

                      <CardActions>
                        <IconButton
                          aria-label="add to favorites"
                          // color={feed.likes.length > 0 ? "error" : "default"}
                          // onClick={() => handleLike(feed._id)}
                        >
                          <FavoriteIcon />
                        </IconButton>
                        {/* <h4>{feed.likes.length}</h4> */}

                        {/* <ExpandMore
                          // expand={expanded}
                          // onClick={() => handleExpandClick(i)}
                          // aria-expanded={expanded}
                          aria-label="show more"
                        > */}
                          <ExpandMoreIcon />
                        {/* </ExpandMore> */}
                      </CardActions>
                      <Collapse  timeout="auto" unmountOnExit>
                        <CardContent>
                          {/* {feed.comments.map((c, index) => (
                            <>
                            <Grid item xs={6}><Avatar><img src={userObj.profilePicture} /> </Avatar>
                            </Grid>
                            <Grid item xs={6}>  <Typography key={index}>{c}</Typography></Grid>
                           
                         </>
                          ))} */}
                        </CardContent>
                      </Collapse>
                    </Card>
                  </Grid>
                  </Grid>
      </Box>
    </Container>
  );
}
