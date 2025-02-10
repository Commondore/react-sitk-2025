export const CounterTitle = ({ units, text }) => {
  const titleStyles = {
    marginTop: "20px",
  };

  if (units.length < 3) {
    titleStyles.color = "orange";
  }

  if (units.length < 2) {
    titleStyles.color = "red";
  }

  if (units.length === 0) {
    titleStyles.color = "white";
    titleStyles.background = "#444";
  }
  return (
    <h3 style={titleStyles}>
      {text} {units.length}
    </h3>
  );
};
