import React from 'react'
import axios from 'axios'
import { Header, Segment, Divider, Grid, Card } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class Breweries extends React.Component {
  state = { breweries: [] }

  componentDidMount() {
    axios.get('/api/all_breweries', { params: { per_page: 10, page: 1 } })
      .then(res => {
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
              <Link to={`/brewery/${brewery.name}`}>
                {brewery.name}
              </Link>
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
        <Grid>
          <Grid.Column computer={16} tablet={16} mobile={16}>
            <Segment inverted>
              <Header
                as='h1'
                textAlign='center'
                style={styles.header}>
                And Then The Breweries
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