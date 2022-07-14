import React from "react";
import {
  Typography,
  AppBar,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Toolbar,
  Container,
  Button,
} from "@mui/material";
import { PhotoCamera } from "@mui/icons-material";
const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function App() {
  return (
    <>
      <AppBar position="relative">
        <Toolbar>
          <PhotoCamera style={{ marginRight: "10px" }} />
          <Typography variant="h5">Photo Album</Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div style={{ margin: "50px 50px" }}>
          <Container maxWidth="sm">
            <Typography
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Photo Album
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              Hello everyone. This is a photo album and I'm trying to make this
              sentence as long as possible we can see how does it look on the
              screen
            </Typography>
            <div>
              <Grid
                container
                style={{ marginTop: "10px" }}
                spacing={2}
                justifyContent="center"
              >
                <Grid item>
                  <Button variant="contained" color="primary">
                    See my photos
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    Secondary action
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container style={{ padding: "20px" }} maxWidth="md">
          <Grid container spacing={4}>
            {cards.map((card) => {
              return (
                <Grid item key={card} xs={12} sm={6} md={4}>
                  <Card>
                    <CardMedia
                      className=""
                      image="https://source.unsplash.com/random"
                      title="Image Title"
                      height="140"
                      style={{ paddingTop: "56.25%" }}
                    />
                    <CardContent>
                      <Typography variant="h5" gutterBottom>
                        Heading
                      </Typography>
                      <Typography variant="p">
                        This is a media card. You can use this section to
                        describe the content.
                      </Typography>
                    </CardContent>
                    <Card Actions>
                      <Button size="small">View</Button>
                      <Button size="small">Edit</Button>
                    </Card>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </main>
      <footer style={{ padding: "50px 0" }}>
        <Typography variant="h6" align="center">
          Footer
        </Typography>
        <Typography variant="subtitle1" color="textSecondary" align="center">
          Something here to give the footer a purpose! Copyright © Your Website
          2022.
        </Typography>
      </footer>
    </>
  );
}

export default App;
