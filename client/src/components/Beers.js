import React from 'react'
import axios from 'axios'
import { Header, Segment, Divider, Grid, Card } from 'semantic-ui-react'


class Beers extends React.Component {
  state = { beers: [], offset: 0 }

  componentDidMount() {
    axios.get('/api/all_beers', { params: { per_page: 10, page: 1 }})
      .then( res => {
        console.log(res.data.entries)
        this.setState({ beers: res.data.entries })
      }).catch( err => {
        console.log(err)
    })
  }

  displayBeer = () => {
    const { beers } = this.state
    return beers.map( beer => {
      return(
        <Card key={beer.id} color="brown">
          <Card.Content>
            <Card.Header>
                {beer.name}
            </Card.Header>

            <Card.Description>
              {beer.description}
            </Card.Description>
          </Card.Content>
        </Card>
      )
    })
  }

  render() {
    
    return(
      <div>
        <Segment basic>
          <Segment basic textAlign='center'>
            <Header as='h1' style={styles.header}>Some Beer My Dudes</Header>
          </Segment>
          <Grid>
            <Grid.Column computer={16} tablet={16} mobile={16}>
              <Segment inverted>
                <Header
                  as='h1'
                  textAlign='center'
                  style={styles.header}>
                  Beer:
                </Header>
                <Divider />
                <Card.Group stackable itemsPerRow={3}>
                  {this.displayBeer()}
                </Card.Group>
              </Segment>
            </Grid.Column>
          </Grid>
        </Segment>
      </div>
    )
  }
}

const styles = {
  centered: {
    margin: '0 auto',
  },
  header: {
    color: '#2ecc40'
  }
}

export default Beers