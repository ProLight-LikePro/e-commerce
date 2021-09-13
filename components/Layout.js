import React from 'react'
import Head from 'next/head';
import NextLink from 'next/link';
import { AppBar, Container, Toolbar, Typography, Link } from '@material-ui/core'
import useStyles from '../utils/styles';

export default function Layout({ children, title }) {
    const classes = useStyles();
    return (
        <div>
            <Head>
                <title>{title ? `${title} - E-Commerce` : 'E-Commerce'}</title>
            </Head>
            <AppBar className={classes.navbar} position='static'>
                <Toolbar>
                    <NextLink href="/" passHref>
                        <Link>
                            <Typography className={classes.brand}>E-Commerce</Typography>
                        </Link>
                    </NextLink>
                </Toolbar>
            </AppBar>
            <Container className={classes.main}>
                {children}
            </Container>
            <footer className={classes.footer}>
                <Typography>All rights reserved</Typography>
            </footer>
        </div>
    )
}
