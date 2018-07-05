import React from 'react'
import axios from 'axios'
import { Header, Segment, Divider, Grid } from 'semantic-ui-react'

class Brewery extends React.Component {
  state = { brewery: {} }

  componentDidMount() {
    axios.get(`/api/brewery/${this.props.match.params.name}`)
      .then(res => {
        this.setState({ brewery: res.data.entries[0] })
      }).catch(err => {
        console.log(err)
      })
  }

  render() {
    let { brewery } = this.state
    return (
      <div>
        <Segment basic>
          <Grid>
            <Grid.Column computer={16} tablet={16} mobile={16}>
              <Segment inverted>
                <Segment basic textAlign='center'>
                  <Header as='h1' style={styles.header}>{brewery.name}</Header>
                </Segment>
                <Divider />

                <Grid columns={16} divided textAlign='center'>
                  <Grid.Row>

                    <Grid.Column width={8}>
                      <a href={brewery.website}>
                        <p>Website</p>
                      </a>
                    </Grid.Column>

                    <Grid.Column width={8}>
                      <h5>Established {brewery.established}</h5>

                    </Grid.Column>

                  </Grid.Row>
                </Grid>

                  <Divider />

                <Grid columns={16} textAlign='center'>
                  <Grid.Row>

                    <Grid.Column width={10}>
                      <h3 style={styles.description}>Description</h3>
                      <p>
                        {brewery.description}
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

export default Brewery