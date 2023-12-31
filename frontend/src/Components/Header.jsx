import React from 'react'

const Header = () => {
  return (
    <div>
        <nav class="navbar navbar-expand-lg bg-primary navbar-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">SkyLimitEmployeeApp  </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link active" aria-current="page" href="/add">Add</a>
        <a class="nav-link" href="/viewtodo">Viewall</a>
        <a class="nav-link" href="/viewEmpAd">ViewCompleted</a>
        <a class="nav-link" href="/viewEmpAd">ViewInCompleted</a>
        
        
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Header