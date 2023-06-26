import Button from "../ui/button";
import classes from "./events-search.module.css";

export default function EventsSearch(props) {
  return (
    <form className={classes.form}>
      <div className={classes.controls}>
        <div className={classes.control}>
          <label htmlFor="year">Year</label>
          <select id="year">
            <option value="2021">2021</option>
            <option value="2022">2022</option>
          </select>
        </div>
        <div className={classes.control}>
          <label htmlFor="month">Month</label>
          <select id="month">
            <option value="1">January</option>
            <option value="2">February</option>
            <option value="3">March</option>
          </select>
        </div>
      </div>
      <Button>Find Events</Button>
    </form>
  );
}
