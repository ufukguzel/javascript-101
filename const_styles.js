// ı defined styles 
const styles = {
    color: 'purple',
    fontSize: 40,
    border: "2px solid purple",
   }
  class Colorful extends React.Component {
    render() {
      // ı added only const in styles
      return (
        <div style={styles}>Style Me!</div>
      );
    }
  };