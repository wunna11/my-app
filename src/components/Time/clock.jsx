export default function Clock(props) {
  console.log('compnet color', props.color)
  return (
    <h1 style={{ color: props.color }}>
      {props.time}
    </h1>
  );
}
