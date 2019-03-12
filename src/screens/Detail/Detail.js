import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { mapStateToProps, mapDispatchToProps } from "./reducer";
import { connect } from "react-redux";
import "./detail.scss";
import { Spin } from "antd";
import '../../../node_modules/antd/dist/antd.css';
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";



class Detail extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let urlParams = new URLSearchParams(window.location.search);
    let detailId = urlParams.get('id');

    const { getDetailCharacter, getCharacterComics } = this.props;
    window.scrollTo(0, 0)

    getDetailCharacter(detailId);
    getCharacterComics(detailId)
  }


  render() {
    const { detailCharacter, characterComics } = this.props;

    return (
      <Spin tip="Loading..." spinning={this.props.getDetailCharacterPending}>
        <div className="back">
          <Link to={"/"}>
          <img src="/icons/arrow-left.svg" alt="" />
          <h4>Back</h4>
          </Link>
          </div>
      <ScrollToTop scrollStepInPx="50" delayInMs="5"/>
        <div className="detail-wrapper">
          {detailCharacter && detailCharacter.results && detailCharacter.results.map(i =>
            <div key={i.id}>
              <div className="thumb-img">
                <img src={`${i.thumbnail.path}.${i.thumbnail.extension}`} />
              </div>
              <div className="thumb-content">
                <h1>{i.name}</h1>
                <p className="des">{i.description ? i.description : "This character don't have description"}</p>

              </div>
            </div>
          )}
          <Spin tip="Loading..." spinning={this.props.getCharacterComicsPending}>
          {characterComics && characterComics.results && <div className="comics">
            <p><b>Available comics: {characterComics.total}</b></p>
            <div className="comics-list">
              {characterComics.results.map(i =>
                <div className="comic-item">
                  <div className="comic-img">
                    <img src={`${i.thumbnail.path}.${i.thumbnail.extension}`} />
                  </div>
                  <div className="comic-content">
                    <h4>{i.title}</h4>
                    <p>{i.description}</p>
                  </div>
                </div>)}
            </div>
          </div>
          }
          </Spin>

        </div>
      </Spin>
    )
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Detail);