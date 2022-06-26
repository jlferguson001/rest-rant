const React = require('react')
const Def = require('../default')

function show (data) {
    let comments = (
        <h3 className='inactive'>No comments at this time!</h3>
    )

    let rating =(
        <h3 className='inactive'>No ratings at this time.</h3>
    )

    if (data.place.comments.length) {
        let sumRatings = data.place.comments.reduce((tot, c) => {
          return tot + c.stars
        }, 0)
        let averageRating = Math.round(sumRatings / data.place.comments.length)
        let stars = ''
        for (let i = 0; i < averageRating; i++) {
          stars += '⭐️'
        }
        rating = (
          <h3>
            {stars} stars
          </h3>
        )

        comments = data.place.comments.map(c => {
            return (
              <div className="border">
            <h2 className='rant'>{c.rant ? 'Rant! 😈' : 'Rave! 🥰'}</h2>
            <h4>{c.content}</h4>
          <h3>
            <strong>- {c.author}</strong>
          </h3>
          <h4>Rating: {c.stars}</h4>
        </div>
      )
    })
  }

  return (
    <Def>
      <main>
        <div className="container mt-5">
          <div className="row align-items-center">
            <div className="col">
            <img src={ data.place.pic } alt={ data.place.name } />
            <h3>Located in { data.place.city }, { data.place.state }</h3>
            </div>
            <div className="col">
              <h1>{ data.place.name }</h1>
              <h2>Rating</h2>
              {rating}
              <br />
              <p>Not Rated</p>

              <h2>Description</h2>
              <h3>{data.place.showEstablished()}</h3>
              <h4>{data.place.cuisines}</h4>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col text-right">
              <a href={`/places/${data.place.id}/edit`} className="btn btn-warning"> 
              Edit
              </a>
              
            </div>
            <div>
              <form method="POST" action={`/places/${data.place.id}?_method=DELETE`}>
                <button type="submit" className="btn btn-danger">DELETE</button>
              </form></div>
          </div>

          <div>
            <div className="col pt-3">
            <h2>Comments</h2>
            {comments}

            <form method='POST' action={`/places/${data.place.id}/comment`}>
              <div className='form-group'>
                <label htmlFor='author'>Author</label>
                <input className='form-control' id='author' name='author'/>
              </div>

              <div className='form-group'>
                <label htmlFor='content'>Content</label>
                <input className='form-control' id='content' name='content' type='textarea' />
              </div>

              <div className='form-group'>
                <label htmlFor='stars'>Star Rating</label>
                <input className='form-control' id='stars' name='stars' type='range' step='0.5' min='0' max='5' />
              </div>

              <div className='form-group'>
                <label htmlFor='rant'>Rant</label>
                <input  id='rant' name='rant' type='checkbox' defaultChecked/>
              </div>

              <input className='btn btn-primary' type='submit' value='Add Comment' />
            </form>
            </div>
          </div>
        </div>
      </main>
    </Def>
)
}

module.exports = show