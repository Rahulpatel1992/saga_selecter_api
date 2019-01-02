import React from 'react';
import { connect } from 'react-redux'
import {getNewsSelector} from'./selectors';
const imgStyle = {
  hight: 'auto',
  width: '80%',
  border: '1px solid RebeccaPurple ',
};
const articleStyle = {
  width: '50%',
  margin: '0 auto',
  color: 'olive'
}

let NewsItem = ({ article }) => (
  article ?
    <article style={articleStyle} >
            <div className="p2 bg-white border rounded">
                <h1>{article.author}</h1>
                <div className="border"></div>
                <br/>
                <h2 className="h2 mt0">{article.title}</h2> 
          <img style={imgStyle} src={article.urlToImage} alt="" />
              <p className="mb0">{article.description}</p>
             
              <button className="btn btn-primary  bg-navy">Detail</button>
          </div>
    </article> :
    null
);

const mapStateToProps = (state) => ({
  article:getNewsSelector(state)
})

NewsItem = connect(mapStateToProps, null)(NewsItem)

export default NewsItem;



