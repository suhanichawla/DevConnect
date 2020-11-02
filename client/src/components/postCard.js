import React, { Component } from 'react';

export default class PostCard extends Component {
  render() {
      var {data,onDelete}=this.props
      // console.log("myposttt",data)
    return (
      <div className="card" style={{width: "18rem"}}>
        <img src={data.image} height="100px" width="100px" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{data.user.name}</h5>
          <p className="card-text">{data.caption}</p>
          <p className="card-text"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></p>
          <a href="#" className="btn btn-primary">Like</a>
          {onDelete &&
            <button onClick={()=>onDelete(data._id)}>Delete</button>
          }
        </div>
      </div>
      // <div style={{height:"200px", width:"400px",backgroundColor:"beige"}}>
      //     <p>{data.circle.name}</p>
      //     <div>
      //         <img src={data.image} height="100px" width="100px"/>
      //     </div>
      //     <p>{data.user.name}</p>
      //     <p>{data.caption}</p>
      //     {onDelete &&
      //       <button onClick={()=>onDelete(data._id)}>Delete</button>
      //     }
      // </div>
    );
  }
}


{/* <div style={{height:"200px", width:"400px",backgroundColor:"beige"}}>
          <p>{data.circle.name}</p>
          <div>
              <img src={data.image}
          </div>
          <p>{data.user.name}</p>
          <p>{data.caption}</p>
          {onDelete &&
            <button onClick={()=>onDelete(data._id)}>Delete</button>
          }
      </div>

      </div> */}
      