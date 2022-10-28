// Sub Component
const Header = (props) => {
  return (
    <div>
      <h1> {props.courseName} </h1>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <p>
        {props.part} {props.exercises}
      </p>
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>Number of exercises {props.total}</p>
    </div>
  )
}

const App = () => {

  return (
    <div>
      <Header courseName="Half Stack application development" />
      <Content part="Fundamentals of React" exercises={10} />
      <Content part="Using props to pass data" exercises={7} />
      <Content part="State of a component" exercises={14} />
      <Total total={10 + 7 + 14} />
    </div>
  )
}

export default App