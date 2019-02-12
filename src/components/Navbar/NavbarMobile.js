import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Menu, Sidebar, Segment, Button, Header } from "semantic-ui-react";

class NavbarMobile extends React.Component {
  state = { visible: true };

  handleHideClick = () => this.setState({ visible: false });
  handleShowClick = () => this.setState({ visible: true });
  handleSidebarHide = () => this.setState({ visible: false });
  render() {
    const { visible } = this.state;
    return (
      <div style={{ zIndex: "999" }}>
        <Button.Group>
          <Button disabled={visible} onClick={this.handleShowClick}>
            Show sidebar
          </Button>
          <Button disabled={!visible} onClick={this.handleHideClick}>
            Hide sidebar
          </Button>
        </Button.Group>
        <Sidebar.Pushable as={Segment}>
          <Sidebar
            as={Menu}
            animation="overlay"
            vertical
            onHide={this.handleSidebarHide}
            visible={visible}
            direction="left"
          >
            <Menu.Item as="a">Home</Menu.Item>
            <Menu.Item as="a">QR Reader</Menu.Item>
          </Sidebar>
          <Sidebar.Pusher>
            <Segment basic>
              <Header as="h3">Application Content</Header>
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    );
  }
}

export default connect(null)(NavbarMobile);
