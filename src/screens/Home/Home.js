import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./home.scss";
import { mapStateToProps, mapDispatchToProps } from "./reducer";
import { connect } from "react-redux";
import Pagination from "react-js-pagination";
import { Spin } from 'antd';
import '../../../node_modules/antd/dist/antd.css';
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";


class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activePage: 1,
      payload: {
        limit: 100,
        offset: 0
      }
    }
    this.handlePageChange = this.handlePageChange.bind(this);
  }

  componentDidMount() {
    const { payload } = this.state;
    const { getCharacters, characters } = this.props;

    characters ? null : getCharacters(payload.limit, payload.offset);
  }

  handlePageChange(pageNumber) {
    const { payload } = this.state;
    const { getCharacters } = this.props;

    getCharacters(payload.limit, payload.limit * (pageNumber - 1));

    this.setState({ activePage: pageNumber });
  }

  render() {
    const { characters } = this.props;
    const { payload, activePage } = this.state;

    return (
      <div>
      <header>
        <div className="wrapper">
          <Link to="/">Marvel Manager</Link>
          <Link to="/remove-vowel">Remove Vowel</Link>
        </div>
      </header>
      <Spin tip="Loading..." spinning={this.props.getCharactersPending}>
        <ScrollToTop scrollStepInPx="50" delayInMs="5"/>
        <div className="wrapper">
          <h2>All Marvels</h2>
          <div className="characters">
            {characters && characters.results && characters.results.map(i =>
              <div key={i.id} className="character-item">
                <Link to={`/detail?id=${i.id}`}>
                  <div className="thumbnail-img">
                    <img src={`${i.thumbnail.path}.${i.thumbnail.extension}`} /></div>
                </Link>

                <div className="thumbnail-content">
                  <h4>{i.name}</h4>
                  <p>{i.description.length > 100 ? i.description.substring(0,100) + '...' : i.description}</p>
                </div>
              </div>
            )}
          </div>

          {characters && characters.total > payload.limit ?
            <Pagination
              activePage={activePage}
              itemsCountPerPage={payload.limit}
              totalItemsCount={characters.total}
              pageRangeDisplayed={5}
              onChange={this.handlePageChange}
            />
            : null}

        </div>
      </Spin>
      </div>
    )
  }
}

Home.propTypes = {
  characters: PropTypes.object.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);