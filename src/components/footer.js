// import React from 'react';
import * as React from 'react'
import {useStaticQuery, graphql } from 'gatsby'
import {Navbar,Nav,Form,FormControl,Button,CardGroup} from 'react-bootstrap'
import Card from 'react-bootstrap/Card'
const footer = () => {
    return (
        <>
           <CardGroup>
                <Card>
                    <Card.Footer>
                        <small className="text-muted">This is My Footer.</small>
                    </Card.Footer>
                </Card>
            </CardGroup>
        </>
    );
};

export default footer;