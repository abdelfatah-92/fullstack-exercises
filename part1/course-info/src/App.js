const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}
const Content = (props) => {
  return ( 
    <div>
      <p>
       Fundamentals of React {props.exerxises1}
      </p>
      <p>
       Using props to pass data {props.exerxises2}
      </p>
      <p>
       State of a component {props.exerxises3}
      </p>
    </div>
  )
}
const Total = (props) => {
  return (
  <p> Number of exercises {props.exerxises1 + props.exerxises2 + props.exerxises3} </p>
  )
}
const App = () => {

  return (
    <div>
      <Header course = "Half stack application development" />
      <Content exerxises1 = "10" exerxises2 = "7" exerxises3 = "14"/>
      <Total exerxises1 = {10} exerxises2 = {7} exerxises3 = {14} />
    </div>
  )
}
export default App