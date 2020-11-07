import "bootstrap/dist/css/bootstrap.css";
import { connect } from "react-redux";
import ListItem from "../components/ListItem";
import React, { Component } from "react";
import axios from "axios";
import * as actions from "../Store/index";
import classes from "./ListData.module.css";
import { Select } from "@material-ui/core";

class ListData extends Component {
  // const [weatherdata, setWeatherData] = useState({});
  // const [isLoaded, setIsLoaded] =useState(false)

  componentDidMount() {
    this.props.onFetchData();
  }

  renderTableData() {
    return this.props.weatherData.map((data, index) => {
      const { value, place, unit, type, time } = data; //destructuring
      return (
        <tr key={index}>
          <td>{value}</td>
          <td>{type}</td>
          <td>{unit}</td>
          <td>{time}</td>
          <td>{place}</td>
        </tr>
      );
    });
  }

  // useEffect(() => {
  //   setIsLoaded(false)
  //   getData();
  //   setIsLoaded(true)
  // },[]);

  // let i = 0;
  // let data = [];
  // if (!this.props.loading) {
  //   data = this.props.weatherData.map((item, index) => (
  //     <ListItem key = {i++} value={item.value} place={item.place} />
  //     ));
  // }
  render() {
    return (
      <div className="col-sm-6 col-md-6 col-lg-6">
        <div className="table-container">
          <h1>
            Latest measured data
            <Select>
              <option>None</option>
              <option>Aarhus</option>
              <option>Copenhagen</option>
              <option>Horsens</option>
            </Select>
          </h1>
          <table className={classes.table}>
            <thead className={classes.TableHeadColor}>
              <tr>
                <th scope="col">Value</th>
                <th scope="col">Type</th>
                <th scope="col">Unit</th>
                <th scope="col">Time</th>
                <th scope="col">Place</th>
              </tr>
            </thead>
            <tbody>{this.renderTableData()}</tbody>
          </table>
        </div>
      </div>
    );
  }
}

// const getData = async () => {
//   const response = await axios.get(url);
//   console.log(response.data);
//   setWeatherData(response.data);
// };

const mapStateToProps = (state) => {
  return {
    weatherData: state.weatherData,
    loading: state.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchData: () => dispatch(actions.fetchData()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListData, axios);
