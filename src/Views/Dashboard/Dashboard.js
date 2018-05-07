import React from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { css, withStyles } from "../../withStyles";
import FlexContainer from "../../Containers/FlexContainer";
import Avatar from "../../Elements/Avatar";
import Heading from "../../Elements/Heading";
import Button from "../../Elements/Button";
import ButtonLink from "../../Elements/ButtonLink";
import Navigation from "../../Components/Navigation";
import Sessions from "./Sessions";
import CreateSession from "../CreateSession";
import Upgrade from "./Upgrade";
import Profile from "./Profile";
import Settings from "./Settings";
import Workspaces from "./Workspaces";

import openBoxIcon from "../../assets/open-box.svg";

import { requestUser } from "../../redux/user/actions";
import { requestLogout } from "../../redux/auth/actions";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.handleLogout = this.handleLogout.bind(this);
  }

  componentDidMount() {
    this.props.dispatch(requestUser());
  }

  handleLogout() {
    this.props.dispatch(requestLogout());
  }

  render() {
    const { styles, auth, user } = this.props;
    let path = this.props.location.pathname.slice(11);
    return (
      <div {...css(styles.dashboard)}>
        <Navigation logOut={this.handleLogout} {...this.props} />
        <div {...css(styles.main)}>
          <div {...css(styles.header)}>
            <FlexContainer direction="row" align="center" justify="between">
              <Heading size="2" style={{ margin: "0" }}>
                {path == "profile"
                  ? "Profile"
                  : path == "upgrade"
                    ? "Upgrade Plan"
                    : path == "settings"
                      ? "Settings"
                      : "Sessions"}
              </Heading>
            </FlexContainer>
            <FlexContainer direction="row" align="center" justify="end">
              <ButtonLink
                to={`${this.props.match.url}/workspaces`}
                appearance="primary"
              >
                My Workspaces
              </ButtonLink>
              <ButtonLink
                to={`${this.props.match.url}/new`}
                appearance="secondary"
              >
                New session
              </ButtonLink>
              <Avatar
                size="medium"
                image="https://avatars1.githubusercontent.com/u/24225542?s=460&v=4"
              />
            </FlexContainer>
          </div>
          <Switch location={this.props.location}>
            <Route
              exact
              path={`${this.props.match.url}`}
              render={() => (
                <Sessions dispatch={this.props.dispatch} data={user} />
              )}
            />

            <Route
              exact
              path={`${this.props.match.url}/profile`}
              component={Profile}
            />
            <Route
              exact
              path={`${this.props.match.url}/upgrade`}
              component={Upgrade}
            />
            <Route
              exact
              path={`${this.props.match.url}/settings`}
              component={Settings}
            />
            <Route
              exact
              path={`${this.props.match.url}/workspaces`}
              render={() => <Workspaces data={user} />}
            />
          </Switch>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth,
    isAuthenticated: state.auth.isAuthenticated,
    user: state.user
  };
};

Dashboard = connect(mapStateToProps)(Dashboard);

export default withStyles(({ colors }) => {
  return {
    dashboard: {
      display: "flex",
      flexDirection: "row"
    },
    icon: {
      width: "128px",
      marginBottom: "48px"
    },
    header: {
      width: "100%",
      padding: "15px",
      backgroundColor: "white",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      borderBottom: `1px solid ${colors.aluminum}`
    },
    main: {
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      flex: "2",
      backgroundColor: colors.sand
    }
  };
})(Dashboard);
