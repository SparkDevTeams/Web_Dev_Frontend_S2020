import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { TablePagination } from "@material-ui/core";
import styled from "styled-components";
import {Actions} from 'react-native-router-flux'; 
import { Component } from "react";
import {Helmet} from 'react-helmet';

class Application extends React.Component {
    render() {
        return( 
             <div className="application" >
                <Helmet>
                    <style>
                        {'body{ background-color: red;}'}
                    </style>
                </Helmet>
            </div>
        );
    }

