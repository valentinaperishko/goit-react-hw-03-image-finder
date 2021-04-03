import React, { Component } from 'react';
import './App.css';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';
import SearchBar from './components/SearchBar';
import fetchImages from './services/imagesApi';
import ImageGallery from './components/ImageGallery';
import Button from './common/Button';
import Notifications from './common/Notifications/Notifications';

class App extends Component {
  state = {
    query: '',
    page: 1,
    gallery: [],
    fetchLength: null,
    isLoading: false,
    error: false,
  };

  componentDidUpdate(prevProps, prevState) {
    const { query, page } = this.state;
    if (query !== prevState.query && query !== '') {
      this.fetchImagesByQuery(query);
    } else if (query === prevState.query && page !== prevState.page) {
      this.fetchImagesByQuery(query);
    }
  }

  getQueryByForm = ({ query }) => {
    this.setState({ query: '', page: 1, gallery: [], fetchLength: 0 });
    this.setState({ query: query, page: 1, gallery: [] });
  };

  setNewPage = e => {
    e.preventDefault();
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  fetchImagesByQuery = (prevProps, prevState) => {
    const { query, page } = this.state;

    this.setState({ isLoading: true });
    fetchImages(query, page)
      .then(result => {
        this.setState(prevState => ({
          gallery: [...prevState.gallery, ...result],
          fetchLength: result.length,
        }));
      })
      .catch(error => {
        this.setState({ error: true });
      })
      .finally(() => {
        this.setState({ isLoading: false });
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth',
        });
      });
  };
  render() {
    const { gallery, fetchLength, isLoading, query, error } = this.state;
    return (
      <div className="App">
        <h1>Search image</h1>
        <SearchBar onSubmit={this.getQueryByForm} />
        <ImageGallery gallery={gallery} />
        {isLoading && (
          <Loader
            type="ThreeDots"
            color="#3f51b5"
            height={100}
            width={100}
            timeout={3000}
          />
        )}
        {fetchLength === 12 && !isLoading && (
          <Button getNewPage={this.setNewPage} />
        )}

        <Notifications
          fetchLength={fetchLength}
          galleryLength={gallery.length}
          searchQuery={query}
          error={error}
        />
      </div>
    );
  }
}

export default App;
