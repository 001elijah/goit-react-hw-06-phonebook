// import { applyFilter } from "redux/store";
import { filter as applyFilter } from "redux/contactsSlice";

import s from './Filter.module.css';

const Filter = ({ onChangeProp }) => {
    return (
        <form className={s.Form}>
            <label htmlFor="">
                Find contacts by name<br />
                <input type="text"
                onChange={evt => {
                    onChangeProp(applyFilter(evt.target.value))
                }}/>
            </label>
        </form>
    );

};

export default Filter;