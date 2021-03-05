import React, { Component } from 'react';
import Hero from '../components/sections/Hero';
import FeaturesTiles from '../components/sections/FeaturesTiles';
import FeaturesSplit from '../components/sections/FeaturesSplit';
import Testimonial from '../components/sections/Testimonial';
import Cta from '../components/sections/Cta';
import Contact from '../components/sections/Contact';
import { getLatestVideoId } from '../models/YoutubeRepository';

class Home extends Component {
  state = {
    videoUrlEmbed: '',
    videoUrlExternal: '',
  };

  async componentDidMount() {
    const urls = await getLatestVideoId();
    this.setState({
      videoUrlEmbed: urls.embed,
      videoUrlExternal: urls.external,
    });
  }
  render() {
    return (
      <>
        <Hero className="illustration-section-01" videoUrlEmbed={this.state.videoUrlEmbed} videoUrlExternal={this.state.videoUrlExternal} />
        <Cta split />
        <FeaturesTiles />
        <Testimonial topDivider />
        <Contact />
      </>
    );
  }
}

export default Home;