function App() {
  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <div>
      <h1>Hello world</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter your Birthday " />
      </form>
    </div>
  );
}

export default App;
