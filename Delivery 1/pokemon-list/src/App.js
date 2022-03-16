import logo from './logo.svg';
import './App.css';

function App() {
  const Button = props => {
    const { kind, ...other } = props;
    console.log(props)
    const className = kind === "primary" ? "PrimaryButton" : "SecondaryButton";
    return <button className={className} {...other} />;
  };
  return (
    <div>
      <Button kind="primary" onClick={() => console.log("clicked!")}>
        Hello World!
      </Button>
    </div>
  );
}

export default App;
