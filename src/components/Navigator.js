import React, { Component } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DnsRoundedIcon from '@material-ui/icons/DnsRounded';
import TimerIcon from '@material-ui/icons/Timer';
import SettingsIcon from '@material-ui/icons/Settings';
import PhonelinkSetupIcon from '@material-ui/icons/PhonelinkSetup';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchTypes } from '../store/actions/types';


const styles = theme => ({
  categoryHeader: {
    paddingTop: 16,
    paddingBottom: 16,
  },
  categoryHeaderPrimary: {
    color: theme.palette.common.white,
  },
  item: {
    paddingTop: 4,
    paddingBottom: 4,
    color: 'rgba(255, 255, 255, 0.7)',
  },
  itemCategory: {
    backgroundColor: '#232f3e',
    boxShadow: '0 -1px 0 #404854 inset',
    paddingTop: 16,
    paddingBottom: 16,
  },
  firebase: {
    fontSize: 24,
    fontFamily: theme.typography.fontFamily,
    color: theme.palette.common.white,
  },
  itemActionable: {
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.08)',
    },
  },
  itemActiveItem: {
    color: '#4fc3f7',
  },
  itemPrimary: {
    color: 'inherit',
    fontSize: theme.typography.fontSize,
  },
  divider: {
    marginTop: theme.spacing(2),
  },
});

class Navigator extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    fetchTypes: PropTypes.func.isRequired,
  };

  componentDidMount() {
    const { types } = this.props;
    if (!types.length) {
      this.props.fetchTypes();
    }
  }


  render() {
    const {
      classes, fetchTypes, types, ...other
    } = this.props;
    const categories = [
      {
        id: 'Comunals',
        children: types,
      },
      {
        id: 'Quality',
        children: [
          { id: 'Analytics', icon: <SettingsIcon /> },
          { id: 'Performance', icon: <TimerIcon /> },
          { id: 'Test Lab', icon: <PhonelinkSetupIcon /> },
        ],
      },
    ];
    return (
      <Drawer variant="permanent" {...other}>
        <List disablePadding>
          <ListItem className={clsx(classes.firebase, classes.item, classes.itemCategory)}>
            Comunals
          </ListItem>
          {categories.map(({ id, children }) => (
            <React.Fragment key={id}>
              <ListItem className={classes.categoryHeader}>
                <ListItemText
                  classes={{
                    primary: classes.categoryHeaderPrimary,
                  }}
                >
                  {id}
                </ListItemText>
              </ListItem>
              {children.map(item => (
                <Link to={`/comunal/${item.id}`}>
                  <ListItem
                    button
                    dense
                    key={item.id}
                    className={clsx(
                      classes.item,
                      classes.itemActionable,
                      true && classes.itemActiveItem,
                    )}
                  >
                    <ListItemIcon><DnsRoundedIcon /></ListItemIcon>
                    <ListItemText
                      classes={{
                        primary: classes.itemPrimary,
                      }}
                    >
                      {item.name}
                    </ListItemText>
                  </ListItem>
                </Link>
              ))}
              <Divider className={classes.divider} />
            </React.Fragment>
          ))}
        </List>
      </Drawer>
    );
  }
}


const mapStateToProps = state => ({
  types: state.types.list,
});

const mapDispatchToProps = {
  fetchTypes,
};

const Container = connect(
  mapStateToProps,
  mapDispatchToProps,
)(withStyles(styles)(Navigator));


export default Container;
