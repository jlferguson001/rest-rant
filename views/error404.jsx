const React = require('react')
const Def = require('./default')

function error404 () {
    return (
      <Def>
          <main>
              <h1>404: PAGE NOT FOUND</h1>
              <p>Oops, sorry, we can't find this page you have a typo!</p>
              <div>
                 <img src="/images/beach.jpg" alt="beach"></img>
              </div>
          </main>
      </Def>
    )
  }
  

module.exports = error404
