import React from 'react'
import axios from 'axios'
import { Header, Segment, Divider, Grid, Card } from 'semantic-ui-react'
import { Link } from 'react-router-dom'


class Beers extends React.Component {
  state = { beers: [], offset: 0 }

  componentDidMount() {
    axios.get('/api/all_beers', { params: { per_page: 10, page: 1 }})
      .then( res => {
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
              <Link to={`/beer/${beer.name}`}>
                {beer.name}
              </Link>
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
          <Grid>
            <Grid.Column computer={16} tablet={16} mobile={16}>
              <Segment inverted>
                <Header
                  as='h1'
                  textAlign='center'
                  style={styles.header}>
                  Some Beer My Dudes
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