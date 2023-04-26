<template>
  <div class="container">
    <h1>404 Page Not Found</h1>
    <p>Sorry, the page you are looking for cannot be found.</p>
    <router-link to="/" class="btn btn-primary">Back to Home</router-link>
  </div>
</template>
  
  <style>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
}

h1 {
  font-size: 5rem;
  margin-bottom: 2rem;
  text-align: center;
  color: #333;
}

p {
  font-size: 1.5rem;
  margin-bottom: 2rem;
  text-align: center;
  color: #666;
}

.btn {
  display: inline-block;
  padding: 1rem 2rem;
  background-color: #007bff;
  color: #fff;
  border-radius: 0.25rem;
  text-decoration: none;
  transition: background-color 0.3s ease;
}

.btn:hover {
  background-color: #0069d9;
}
</style>
  