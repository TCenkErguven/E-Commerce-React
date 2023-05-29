import * as React from 'react';
import Product from '../../components/ProductCard/Product';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import TextField from '@mui/material/TextField';

import Avatar from '@mui/material/Avatar';

import "../../styles.css";



const theme = createTheme({
    Toolbar: {
        backgroundColor: "#F7D060",
    }
});

export default function Home() {
    const [productList, setProductList] = React.useState([])
    const [profile, setProfile] = React.useState({
        username: '',
        avatar: '',
    })

    React.useEffect(() => {
        fetch('http://localhost:8060/api/v1/product/get-all-products', {
            method: 'GET',
        }).then(data => data.json())
            .then(data => {
                setProductList(data);
            });
        fetch('http://localhost:8090/api/v1/user/get-my-profile', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                token: localStorage.getItem('token'),
            }),
        }).then(data => data.json())
            .then(data => {
                setProfile(data);
                console.log(data)
            })
    }, []);

    return (
        <ThemeProvider theme={theme} >
            <CssBaseline />
            <div className='toolBar'>
                <Toolbar >
                    <TextField id="filled-basic" label="Arama" variant="filled"
                        sx={{ width: 500 }}
                    />
                    <button className='buttonClass'>
                        <Avatar
                            alt={profile.username}
                            src={profile.avatar}


                        />
                        <label>
                            {profile.username === undefined
                                ? <a href='/Login'>Login</a>
                                : profile.username}
                        </label>
                    </button>
                </Toolbar>

            </div>
            <main>
                {/* Hero unit */}

                <Container sx={{ py: 8, maxWidth: 10000 }}   >
                    {/* End hero unit */}
                    <Grid container spacing={3} >
                        {
                            productList.map((product, index) => (
                                <Grid item key={index} xs={12} sm={6} md={4}>
                                    <Product item={product} key={index} />
                                </Grid>
                            ))}
                    </Grid>
                </Container>
            </main>

        </ThemeProvider>
    );
}

