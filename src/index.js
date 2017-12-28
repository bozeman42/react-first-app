import _ from 'lodash';
import React, { Component } from 'react';
import ReactDom from 'react-dom';
import YTSearch from 'youtube-api-search';

import VideoList from './components/VideoList';
import SearchBar from './components/SearchBar';
import VideoDetail from './components/VideoDetail';
import 'bootstrap/dist/css/bootstrap.css';
import './style/index.css';

const API_KEY = 'AIzaSyAGLihC6bO4tm5YIEFw2wOnElvO_qs-r8I';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null
    }

    this.videoSearch('surfboards');
  }

  videoSearch(term){
    YTSearch({ key: API_KEY, term: term },
    videos => {
      console.log(videos);
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    }
  );
  }

  render() {
    const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);
    return (
      <div className="container">
        <div className="row">
          <SearchBar onSearchTermChange={videoSearch}/>
        </div>
        <div className='row'>
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList onVideoSelect={selectedVideo => this.setState({selectedVideo})}
        videos={this.state.videos} />
        </div>
      </div>
    )
  }
}


ReactDom.render(<App />, document.getElementById("root"));