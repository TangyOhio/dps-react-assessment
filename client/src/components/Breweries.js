import React from 'react'
import axios from 'axios'
import { Header, Segment, Divider, Grid, Card } from 'semantic-ui-react'


class Breweries extends React.Component {
  state = { breweries: [] }

  componentDidMount() {
    axios.get('/api/all_breweries')
      .then(res => {
        console.log(res.data.entries)
        this.setState({ breweries: res.data.entries })
      }).catch(err => {
        console.log(err)
      })
  }

  displayBrewery = () => {
    const { breweries } = this.state
    return breweries.map(brewery => {
      return (
        <Card key={brewery.id} color="brown">
          <Card.Content>
            <Card.Header>
              {brewery.name}
            </Card.Header>

            <Card.Description>
              {brewery.description}
            </Card.Description>
            <a href={brewery.website}>
              <p>Website</p>
            </a>
          </Card.Content>
        </Card>
      )
    })
  }

  render() {

    return (
      <Segment basic>
        <Segment basic textAlign='center'>
          <Header as='h1' style={styles.header}>And Then The Breweries</Header>
        </Segment>
        <Grid>
          <Grid.Column computer={16} tablet={16} mobile={16}>
            <Segment inverted>
              <Header
                as='h1'
                textAlign='center'
                style={styles.header}>
                Breweries:
              </Header>
              <Divider />
              <Card.Group stackable itemsPerRow={3}>
                {this.displayBrewery()}
              </Card.Group>
            </Segment>
          </Grid.Column>
        </Grid>
      </Segment>
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

export default Breweries