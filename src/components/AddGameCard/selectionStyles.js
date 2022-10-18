// Selection styles for react-select need to be done in JS like this.

const selectionStyles = {
  option: (provided, state) => ({
    ...provided,
    borderBottom: '1px dotted pink',
    margin:0,
    padding:'1rem',
    "font-size": "1rem"
  }),
  control: () => ({
    background: "white",
    width: "80%",
    marginLeft: "5%",
    marginTop: "0.5rem",
    height: "3rem",
    fontSize: "1.5rem",
    overflow:"hidden"
  }),
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = 'opacity 300ms';

    return { ...provided, opacity, transition };
  }
}

export default selectionStyles;
