const Header = (props) => {
  console.log(props)
  return (
    <div>
      <h1>{props.course.name}</h1>
    </div>
  );
}

const Part = (props) => {
  console.log(props)
  return(
    <div>
      <h1>
        {props.part.name} {props.part.exercises}
      </h1>
    </div>
  );
}

const Content =(props)=> {
  console.log(props)
  return(
    <div>
      <Part part={props.parts.parts[0]} />
      <Part part={props.parts.parts[1]} />
      <Part part={props.parts.parts[2]} />
    </div>
  );
}

const Total = (props) => {
  return(
    <div>
      <p>
        Number of exercises {props.parts.parts[0].exercises + props.parts.parts[1].exercises + props.parts.parts[2].exercises}
      </p>
    </div>
  );
}

const App = () => {
  const course = {
    name: "Half Stack application developement",
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
      },
      {
        name: 'state of a component',
        exercises: 14,
      }
    ]
  }
  return (
    <div>
      <Header course = {course} />
      <Content parts = {course} />
      <Total parts = {course} />
    </div>
  );
}

export default App;
