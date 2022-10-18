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
    "margin-left": "5%",
    "margin-top": "0.5rem",
    height: "3rem",
    "font-size": "1.5rem",
    overflow:"hidden"
  }),
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = 'opacity 300ms';

    return { ...provided, opacity, transition };
  }
}

export default selectionStyles;
