// Exercise 1.1 ~ 1.2

function Header({ course }: { course: string }) {
  return <h1>{course}</h1>;
}

function Part({ part, exercise }: { part: string; exercise: number }) {
  return (
    <p>
      {part} {exercise}
    </p>
  );
}

function Content({
  parts,
  exercises,
}: {
  parts: string[];
  exercises: number[];
}) {
  return (
    <div>
      {parts.map((part, idx) => (
        <Part key={idx} part={part} exercise={exercises[idx]} />
      ))}
    </div>
  );
}

function Total({ total }: { total: number }) {
  return <p>Number of exercises {total}</p>;
}

function App() {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;

  const parts = [part1, part2, part3];
  const exercises = [exercises1, exercises2, exercises3];
  const total = exercises1 + exercises2 + exercises3;

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} exercises={exercises} />
      <Total total={total} />
    </div>
  );
}

export default App;
