//  Structuring props

function First(props) {
  return (
    <div>
      <h1>
        {props.count} Props {props.message}
      </h1>
    </div>
  );
}

// Destructuring props

function Second({ count, message }) {
  return (
    <div>
      <h1>
        {count} Props {message}
      </h1>
    </div>
  );
}

// Passing Array & Object as Props

function Third(props) {
  return (
    <div>
      <h1>
        {props.person.count} Props {props.person.message} {props.person.seatNumber}
      </h1>
    </div>
  );
}

// Destructuring Array & Object as Props

function Fourth({ personSec }) {
  return (
    <div>
      <h1>
        {personSec.count} Props {personSec.message} {personSec.seatNumber}
      </h1>
    </div>
  );
}

export { First, Second, Third, Fourth };
