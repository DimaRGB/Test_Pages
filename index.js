var Pages = React.createClass({
  render: function () {
    var i = this.props.from;
    var step = 2;
    var pages = [];
    for( var i = this.props.from; i <= this.props.to; i += step ) {
      pages.push(
        <Page path={this.props.path} from={i} to={i + step}></Page>
      );
    }
    return (
      <div className='pages'>
        {pages}
      </div>
    );
  }
});

var Page = React.createClass({
  render: function () {
    var images = [];
    for( var i = this.props.from; i < this.props.to; i++ ) {
      var url = this.props.path + i + '.png';
      images.push(<img src={url} />);
    }
    return (
      <div className='page'>
        <div className='page-imgs'>
          {images}
        </div>
        <br/>
      </div>
    );
  }
});

ReactDOM.render(
  <Pages path='2/' from={1} to={15} />,
  document.getElementById('content')
);
