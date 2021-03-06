import React, { Component } from 'react';

import './heading.css';
import './display-text.css';
import './card.css';
import './caption.css';
import './button.css';
import './button-group.css';
import './grid.css';
import './table.css';

import Heading from './heading';
import DisplayText from './display-text';
import Card from './card';
import Caption from './caption';
import Button from './button';
import ButtonGroup from './button-group';
import Row from './row';
import Col from './col';
import Table from './table';

class App extends Component {
  render() {
    return (
      <div className="app">
        <section className="body-text">
          Simple body text
        </section>
        <section className="headings">
          <Heading>Heading</Heading>
        </section>
        <section className="captions">
          <Caption>Caption</Caption>
        </section>
        <section className="display-texts">
          <DisplayText>Display Text (default)</DisplayText>
          <DisplayText size="small">Display Text (small)</DisplayText>
          <DisplayText size="medium">Display Text (medium)</DisplayText>
          <DisplayText size="large">Display Text (large)</DisplayText>
          <DisplayText size="extra-large">Display Text (extra large)</DisplayText>
        </section>
        <section className="buttons">
          <ButtonGroup>
            <Button>
              Accept
            </Button>
            <Button danger>
              Remove
            </Button>
            <Button neutral>
              Cancel
            </Button>
          </ButtonGroup>
        </section>
        <section className="cards">
          <Card>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac pulvinar mauris. Pellentesque molestie est mollis est convallis, accumsan venenatis sapien laoreet. Pellentesque et ipsum vitae ante iaculis consectetur.
          </Card>
          <Card title="Card Title">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac pulvinar mauris. Pellentesque molestie est mollis est convallis, accumsan venenatis sapien laoreet. Pellentesque et ipsum vitae ante iaculis consectetur.
          </Card>
          <Card
            title="Card Title And Footer"
            footer="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac pulvinar mauris. Pellentesque molestie est mollis est convallis, accumsan venenatis sapien laoreet. Pellentesque et ipsum vitae ante iaculis consectetur.
          </Card>
          <Card
            title="Card Title"
            titleCaption="A tiny little caption for fun"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac pulvinar mauris. Pellentesque molestie est mollis est convallis, accumsan venenatis sapien laoreet. Pellentesque et ipsum vitae ante iaculis consectetur.
          </Card>
          <Card
            title="Do you agree to our Terms & Conditions?"
            footer={ (
              <ButtonGroup align="right">
                <Button neutral>
                  I agree
                </Button>
                <Button neutral>
                  I do not agree
                </Button>
              </ButtonGroup>
            ) }
          >
            You need to agree to the Terms & Conditions before placing your order.
          </Card>
          <Card
            title="Removing profile picture"
            footer={ (
              <ButtonGroup>
                <Button danger>
                  Yes, remove it
                </Button>
                <Button neutral>
                  Cancel
                </Button>
              </ButtonGroup>
            ) }
          >
            Are you sure you want to remove your profile picture?
          </Card>
         </section>
        <section className="grid">
          <div className="sub-section">
            <Row>
              <Col span={ 8 }>
                <Card
                  title="Seo settings"
                  titleCaption={
                    <span>
                      You can set up the page title, description and the user friendly URL.
                      <br />
                      These increase the SEO performance of the article.
                    </span>
                  }
                >
                  Hello, Settings
                </Card>
                <Card
                  title="Featured images"
                  footer="Lorem ipsum dolor sit amet."
                >
                  Hello, Featured
                </Card>
              </Col>
              <Col span={ 4 }>
                <Card
                  title="Useful information"
                  titleCaption="You can read some useful information about your project."
                  footer="Lorem ipsum dolor sit amet."
                >
                  Hello, information
                </Card>
                <Card
                  title="Content Quality Analysis"
                >
                  Hello, Analysis
                </Card>
              </Col>
            </Row>
          </div>
          <Row gutter={ 30 }>
            <Col span={ 8 }>
              <Card
                title="Featured images"
                footer="Lorem ipsum dolor sit amet."
              >
                Hello, Featured
              </Card>
            </Col>
            <Col span={ 4 }>
              <Card
                title="Useful information"
                titleCaption="You can read some useful information about your project."
                footer="Lorem ipsum dolor sit amet."
              >
                Hello, information
              </Card>
            </Col>
          </Row>
          <Row>
            <Col span={ 8 }>
              <Row>
                <Col span={ 6 }>
                  <Card
                    title="Featured images"
                    footer="Lorem ipsum dolor sit amet."
                  >
                    Hello, Featured
                  </Card>
                </Col>
                <Col span={ 6 }>
                  <Card
                    title="Featured images"
                    footer="Lorem ipsum dolor sit amet."
                  >
                    Hello, Featured
                  </Card>
                </Col>
              </Row>
            </Col>
            <Col span={ 4 }>
              <Card
                title="Useful information"
                titleCaption="You can read some useful information about your project."
                footer="Lorem ipsum dolor sit amet."
              >
                Hello, information
              </Card>
            </Col>
          </Row>
        </section>
        <section className="tables">
          <Table
            columns={ [
              {
                name: 'ID',
                key: 'id'
              },
              {
                name: 'Project',
                key: 'project'
              },
              {
                name: 'Website',
                key: 'website'
              },
              {
                name: 'Title',
                key: 'title',
                render(title, article) {
                  return (
                    <a href={ `/articles/${article.id}` }>{ title }</a>
                  );
                }
              },
              {
                name: 'Status',
                key: 'status'
              },
              {
                name: 'Due date',
                key: 'dueDate'
              },
              {
                name: 'Final due date',
                key: 'finalDueDate'
              },
              {
                name: 'Assignees',
                key: 'assignees',
                render(assignees) {
                  return assignees &&
                    assignees.join(', ');
                }
              },
              {
                name: 'Actions',
                key: 'id',
                render(id) {
                  return (
                    <div className="actions">
                      <ButtonGroup>
                        <Button>
                          Edit
                        </Button>
                        <Button danger>
                          Delete
                        </Button>
                      </ButtonGroup>
                    </div>
                  );
                }
              }
            ] }
            data={ [
              {
                id: '1',
                project: 'Intellyo',
                website: 'blog.intellyo.com',
                title: 'Blogging Basics, from Content Flow to Imperfect Grammar',
                status: 'Published',
                dueDate: String(new Date()),
                finalDueDate: String(new Date()),
                assignees: ['John Doe', 'Kim Basinger', 'Vin Diesel']
              },
              {
                id: '2',
                project: 'Intellyo',
                website: 'blog.intellyo.com',
                title: 'These Facebook competitor analysis tricks will get you ahead of the game in 2017',
                status: 'Published',
                dueDate: String(new Date()),
                finalDueDate: String(new Date()),
                assignees: ['John Doe', 'Kim Basinger', 'Vin Diesel']
              }
            ] }
          />
        </section>
      </div>
    );
  }
}

export default App;
