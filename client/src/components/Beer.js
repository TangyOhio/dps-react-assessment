import React from 'react'
import axios from 'axios'
import { Header, Segment, Divider, Grid } from 'semantic-ui-react'

class Beer extends React.Component {
  state = { beer: {} }

  componentDidMount() {
    axios.get(`/api/beer/${this.props.match.params.name}`)
      .then(res => {
        this.setState({ beer: res.data.entries[0] })
      }).catch(err => {
        console.log(err)
      })
  }

  render() {
    let { beer } = this.state
    return (
      <div>
        <Segment basic>
          <Grid>
            <Grid.Column computer={16} tablet={16} mobile={16}>
              <Segment inverted>
                <Segment basic textAlign='center'>
                  <Header as='h1' style={styles.header}>{beer.name}</Header>
                </Segment>
                <Divider />

                <Grid columns={16} divided textAlign='center'>
                  <Grid.Row>

                    <Grid.Column width={6}>
                      <h5>{beer.status_display}</h5>

                      <Divider />
                    </Grid.Column>

                  </Grid.Row>
                </Grid>

                <Grid columns={16} textAlign='center'>
                  <Grid.Row>

                    <Grid.Column width={10}>
                      <h3 style={styles.description}>Description</h3>
                      <p>
                        {beer.description}
                      </p>
                    </Grid.Column>

                  </Grid.Row>
                </Grid>

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
    color: '#2ecc40',
  },
  description: {
    textDecoration: 'underline',
    paddingBottom: '2rem',
  }
}

export default Beer