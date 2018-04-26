import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Card from './../teamComponent/Card';

class TeamPage extends Component {
  render() {

    const bios = {
      ralph: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes.",
      punghe: "Lorem ipsum bang alore Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
    }

    const styles = {
        p: {
         
       },
        h1: {
          margin: 20
        }
      }
    return (
      <div class='row'>
        <Card name="Alek" />
        <Card name="Ralph Salazar" bio={bios.ralph} />
        <Card name="Sarah"/>
        <Card name="Punghe"/>
      </div>
    );
  }
}

export default TeamPage;
